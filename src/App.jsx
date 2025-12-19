import { useEffect, useState } from "react";

const sampleCards = [
  {
    id: 1,
    title: "Ocean Retreat",
    description:
      "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    tag: "Nature",
    price: 20,
  },
  {
    id: 2,
    title: "City Nights",
    description:
      "Skylines, neon, and late-night vibes for your urban inspiration.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    tag: "Urban",
    price: 15,
  },
  {
    id: 3,
    title: "Forest Walk",
    description: "A path through pines and light — take a breath and reset.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    tag: "Outdoors",
    price: 30,
  },
  {
    id: 4,
    title: "Minimal Desk",
    description: "Clutter-free workspace for deep work and clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Workspace",
    price: 55,
  },
  {
    id: 5,
    title: "Golden Desert",
    description: "Warm sands and endless dunes to spark wanderlust.",
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop",
    tag: "Travel",
    price: 45,
  },
  {
    id: 6,
    title: "Cozy Reading",
    description: "Soft light, hot tea, and your favorite book.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    tag: "Lifestyle",
    price: 65,
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Grid Cards</h1>
      </div>
    </header>
  );
}

function Card({ card, onDelete, onView }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <div className="card-media">
        <img src={card.image} alt={card.title} loading="lazy" />
        <span className="badge">{card.tag}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">
          {card.title} - {card.price}$
        </h3>
        <p className="card-desc">{card.description}</p>

        <div className="card-actions">
          <button className="btn ghost" onClick={() => setLiked(!liked)}>
            {liked ? "★ Liked" : "☆ Like"}
          </button>

          <button className="btn danger" onClick={() => onDelete(card)}>
            Delete
          </button>

          <button className="btn primary" onClick={() => onView(card)}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [searchTextByTitle, setSearchTextByTitle] = useState("");
  const [searchTextByDescription, setSearchTextByDescription] = useState("");
  const [filteredCards, setFilteredCards] = useState(sampleCards);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDeleteClick = (card) => {
    setCardToDelete(card);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setFilteredCards(filteredCards.filter((c) => c.id !== cardToDelete.id));
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleViewClick = (card) => {
    setSelectedCard(card);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
  };

  useEffect(() => {
    setFilteredCards(
      sampleCards.filter((card) =>
        card.title.toLowerCase().includes(searchTextByTitle.toLowerCase())
      )
    );
  }, [searchTextByTitle]);

  useEffect(() => {
    setFilteredCards(
      sampleCards.filter((card) =>
        card.description
          .toLowerCase()
          .includes(searchTextByDescription.toLowerCase())
      )
    );
  }, [searchTextByDescription]);

  return (
    <>
      <Header />

      <div className="site-main">
        <div className="container">
          <div className="toolbar">
            <h2 className="section-title">Explore</h2>

            <input
              className="input"
              type="search"
              placeholder="Search cards by title..."
              value={searchTextByTitle}
              onChange={(e) => setSearchTextByTitle(e.target.value)}
            />

            <input
              className="input"
              type="search"
              placeholder="Search cards by description..."
              value={searchTextByDescription}
              onChange={(e) => setSearchTextByDescription(e.target.value)}
            />
          </div>

          <div className="grid">
            {filteredCards.map((c) => (
              <Card
                key={c.id}
                card={c}
                onDelete={handleDeleteClick}
                onView={handleViewClick}
              />
            ))}
          </div>

          <h2>Liked cards total price is - 230$</h2>
        </div>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Are you sure?</h3>
            <p>Do you want to delete "{cardToDelete.title}"?</p>

            <div className="modal-actions">
              <button className="btn primary" onClick={confirmDelete}>
                Yes
              </button>
              <button className="btn" onClick={cancelDelete}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {showViewModal && selectedCard && (
        <div className="modal-backdrop" onClick={closeViewModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedCard.title}</h3>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <p style={{ marginTop: "10px" }}>
              {selectedCard.description}
            </p>

            <div className="modal-actions">
              <button className="btn primary" onClick={closeViewModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

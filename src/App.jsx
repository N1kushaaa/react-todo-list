import { useEffect, useState } from "react";

const sampleCards = [
  {
    id: 1,
    title: "Ocean Retreat",
    description:
      "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8B4hleHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs35ED1hFJ3a3oxuYISrZSmPbUS6zS_8Q3LuHMZ5_mXAYttfhOFrR_pspc0z_aem_TkbaUZ-xIKjUto9WY7ZEoA",
    tag: "Nature",
  },
  {
    id: 2,
    title: "City Nights",
    description:
      "Skylines, neon, and late-night vibes for your urban inspiration.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8CWFleHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs2kkmPD0LNmBSdK4zNa36ER2_zJsWJhna3hIzR4jL1pr-H4DGeMpfjhJURW_aem_opZhiL_rYuU7O1k4Xdsr4g",
    tag: "Urban",
  },
  {
    id: 3,
    title: "Forest Walk",
    description: "A path through pines and light — take a breath and reset.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8CX1leHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsgNoi9OJruRqQFlFiVlmgTLlJIRGT-635rHtJsVdGaGY_Q2QaK2fBbvGAdA_aem_QRu7M0M2nPXi3J7mvwknKw",
    tag: "Outdoors",
  },
  {
    id: 4,
    title: "Minimal Desk",
    description: "Clutter-free workspace for deep work and clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8CZhleHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhe_7ceLvEzV7ypk6_YnRsm_SZ9uwM7tWDrQuEKnYx3WuJJZvYY9ic48qjZ9_aem_ihQOGv-Dve5nm6iBGkSVxg",
    tag: "Workspace",
  },
  {
    id: 5,
    title: "Golden Desert",
    description: "Warm sands and endless dunes to spark wanderlust.",
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8CblleHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsgNoi9OJruRqQFlFiVlmgTLlJIRGT-635rHtJsVdGaGY_Q2QaK2fBbvGAdA_aem_QRu7M0M2nPXi3J7mvwknKw",
    tag: "Travel",
  },
  {
    id: 6,
    title: "Cozy Reading",
    description: "Soft light, hot tea, and your favorite book.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&fbclid=IwY2xjawN8Cd9leHRuA2FlbQIxMABicmlkETFBRjI3Z2hTTFFVWWwzRkZkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs2kkmPD0LNmBSdK4zNa36ER2_zJsWJhna3hIzR4jL1pr-H4DGeMpfjhJURW_aem_opZhiL_rYuU7O1k4Xdsr4g",
    tag: "Lifestyle",
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
function Card({ card }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card">
      <div className="card-media">
        <img src={card.image} alt={card.title} loading="lazy" />
        <span className="badge">{card.tag}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-desc">{card.description}</p>
        <div className="card-actions">
          <button className="btn ghost" onClick={() => setLiked(!liked)}>
            {liked ? "★ Liked" : "☆ Like"}
          </button>
          <button className="btn primary">Open</button>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [searchTextByTitle, setSearchTextByTitle] = useState("");
  const [searchTextByDescription, setSearchTextByDescription] = useState("");

  const [filteredCards, setFilteredCards] = useState(sampleCards);

  useEffect(() => {
    setFilteredCards(sampleCards.filter((card) => card.title.toLocaleLowerCase().includes(searchTextByTitle.toLocaleLowerCase())))
  }, [searchTextByTitle]);

  useEffect(() => {
    setFilteredCards(sampleCards.filter((card) => card.description.toLocaleLowerCase().includes(searchTextByDescription.toLocaleLowerCase())))
  }, [searchTextByDescription]);

  const handleTitleInputChange = (event) => {
    setSearchTextByTitle(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setSearchTextByDescription(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="site-main">
        <div className="container">
          <div className="toolbar">
            <h2 id="explore" className="section-title">
              Explore
            </h2>
            <input
              className="input"
              type="search"
              placeholder="Search cards by title..."
              value={searchTextByTitle}
              onChange={handleTitleInputChange}
            />
            <input
              className="input"
              type="search"
              placeholder="Search cards by description..."
              value={searchTextByDescription}
              onChange={handleDescriptionInputChange}
            />
          </div>
          <div className="grid">
            {filteredCards.map((c) => (
              <Card key={c.id} card={c} />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
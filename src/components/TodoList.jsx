export const TodoList = ({ title, items, selectedItems, onToggleItem }) => {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <ul>
                {items.map((item) => {
                    return (
                        <li
                            className={selectedItems.includes(index) ? "selected" : ""}
                            onClick={() => onToggleItem(index)}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

import Card from './Card';
import styles from './Board.module.css';
import AddCard from './AddCard';

const List = ({ cards, title, listId, dispatch }) => {
    const handleDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        dispatch({
            type: 'moveCard',
            card: { cardId: id, listId },
        })
    };
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    return (
        <div className={styles.list} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h2>{title}</h2>
            <div className="board-items">
                {cards.map(cardProps => (<Card key={cardProps.id} {...cardProps} />))}
            </div>
            <div className="list_toolbar">
                <AddCard listId={listId} dispatch={dispatch} />
            </div>
        </div>
    )
};


export default List;
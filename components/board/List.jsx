import Card from './Card';
import styles from './Board.module.css';
import AddCard from './AddCard';

const List = ({ cards, title, listId, dispatch }) => {

    return (
        <div className={styles.list}>
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
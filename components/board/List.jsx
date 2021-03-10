import Card from './Card';
import styles from './Board.module.css';

const List = ({ cards, title }) => {
    return (
        <div className={styles.list}>
            <h2>{title}</h2>
            <div className="board-items">
                {cards.map(cardProps => (<Card {...cardProps} />))}
            </div>
        </div>
    )
};


export default List;
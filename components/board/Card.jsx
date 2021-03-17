import styles from './Board.module.css';

const Card = ({ id, title }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData('text/plain', id);
    };
    return (
        <div draggable="true" onDragStart={handleDragStart} className={styles.card} id={id}>
            {title}
        </div>
    );
};

export default Card;
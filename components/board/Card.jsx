import styles from './Board.module.css';

const Card = ({ id, title }) => {
    return (
        <div className={styles.card} id={id}>
            {title}
        </div>
    );
};

export default Card;
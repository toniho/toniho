import { useContext } from 'react';
import BoardContext from '../../stores/BoardContext';
import List from './List';
import styles from './Board.module.css';

const Board = () => {
    const boardContext = useContext(BoardContext);
    const lists = boardContext.lists;

    return (
        <div id="trello-board" className={styles.board}> 
            {lists.map(list => {
                const cards = boardContext.getCards(list.listId);
                const listProps = {
                    ...list,
                    cards,
                }
                return <List {...listProps} />; 
            })}
        </div>
    );

};

export default Board;

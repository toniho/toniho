import { useReducer } from 'react';
import { v1 as uuidv1 } from 'uuid';
import List from './List';
import styles from './Board.module.css';

export const boardState = {
    lists: [
        { title: 'Board 1', listId: 1 },
        { title: 'Nuther board', listId: 2 },
    ],
    cards: [
        { id: 'card1',  title: 'The lone rangecard', listId: 1 },
        { id: 'card2',  title: 'Number 2 with a bullet', listId: 2 },
        { id: 'card3',  title: '3 times charmin', listId: 1 },
    ],
    getCards(listId) {
        return this.cards.filter(card => card.listId === listId);
    },
};

const getInitialState = () => {
    return { ...boardState };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCard': 
            console.log('pasten', action);
            return {
                ...state,
                cards: [
                    ...state.cards,
                    { 
                        id: uuidv1(),
                        ...action.card,
                    }
                ]
            }
        case 'moveCard':
            const cards = [ ...state.cards];
            const cardIndex = cards.findIndex(c => c.id === action.card.cardId);
            if (cardIndex !== -1) {
                cards[cardIndex].listId = action.card.listId;
            }
            return {
                ...state,
                cards
            }
        default:
            return state;
    };
};

const Board = () => {
    const initialState = getInitialState();
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const lists = state.lists;

    return (
        <div id="trello-board" className={styles.board}> 
            {lists.map(list => {
                const cards = state.getCards(list.listId);
                const listProps = {
                    ...list,
                    cards,
                    dispatch,
                }
                return <List key={list.lisId} {...listProps} />; 
            })}
        </div>
    );

};

export default Board;

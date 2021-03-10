import { createContext } from 'react';
import { v1 as uuidv1 } from 'uuid';

const BoardContext = createContext({});

export default BoardContext;
export const BoardProvider = BoardContext.Provider;
export const BoardConsumer = BoardContext.Consumer;

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
    addCard(listId, title) {
        this.cards.push({ id: uuidv1(), title, listId })
    },
    moveCard(cardId, listId) {
        const card = this.cards.find(c => c.id === cardId);
        if (card) {
            card.listId = listId;
        }
    },
};

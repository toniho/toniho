import { useState, useRef, useContext } from 'react';
import BoardContext from '../../stores/BoardContext';

export const AddCard = ({ onSubmit = () => {},  }) => {
    let [isOpen, setIsOpen] = useState(false);
    let [value, setValue] = useState('');
    const textAreaElement = useRef();
    const toggleNewCardClick = () => {
        setIsOpen(!isOpen);
        setValue=('');
    };
    const handleSubmit = () => {
        const value = textAreaElement.current.value;
        console.log(value);
        onSubmit(value);
        setIsOpen(false);
    }
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }
    const AddCardDetails = () => {
        return (
            <div className="add-card-edit">
                <textarea key="shek" ref={textAreaElement} />
                <div>
                <button onClick={handleSubmit}>✔️</button> 
                <button onClick={toggleNewCardClick}>✖️</button> 
                </div>
            </div>
        );
    }
    return (
        <div>
            {!isOpen && <button onClick={toggleNewCardClick}>+ Add new card</button>}
            {isOpen && <AddCardDetails />}
        </div>
    );
    
};

const ConnectedAddCard = ({ listId }) => {
    const boardContext = useContext(BoardContext);
    console.log(boardContext);
    const handleSubmit = value => {
        boardContext.addCard(listId, value);
    }
    return <AddCard onSubmit={handleSubmit} />;
};

export default ConnectedAddCard;
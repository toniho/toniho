import { useState, useRef } from 'react';

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
        onSubmit(value);
        setIsOpen(false);
    }
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }
    if (isOpen && textAreaElement) {
        setTimeout(() => textAreaElement.current.focus());
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

const ConnectedAddCard = ({ listId, dispatch }) => {
    const handleSubmit = value => {
        console.warn('milo', value);
        dispatch({
            type: 'addCard',
            card: { listId, title: value },
        });
    }
    return <AddCard onSubmit={handleSubmit} />;
};

export default ConnectedAddCard;
import { Fragment } from 'react';
import { BoardProvider, boardState } from '../../stores/BoardContext';

const BoardPage = () => {
    return (
        <Fragment>
            <h1>Trello Board</h1>
            <div>
                <BoardProvider value={boardState}>
                    <p>bla</p>
                </BoardProvider>
            </div>
        </Fragment>
    )
};


export default BoardPage;
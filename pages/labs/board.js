import { Fragment } from 'react';
import { BoardProvider, boardState } from '../../stores/BoardContext';
import Board from '../../components/board/Board';

const BoardPage = () => {
    return (
        <Fragment>
            <h1>Trello Board</h1>
            <div>
                <BoardProvider value={boardState}>
                    <Board />
                </BoardProvider>
            </div>
        </Fragment>
    )
};


export default BoardPage;
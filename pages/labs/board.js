import { Fragment } from 'react';
import { BoardProvider, boardState } from '../../stores/BoardContext';
import Board from '../../components/board/Board';

const BoardPage = () => {
    return (
        <Fragment>
            <h1>Trello Board</h1>
            <Board />
        </Fragment>
    )
};


export default BoardPage;
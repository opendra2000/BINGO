import './popup.scss';
import shuffled from './popup.utils';
import $ from 'jquery';
import RepeatIcon from '@material-ui/icons/Repeat';
import ReplayIcon from '@material-ui/icons/Replay';

function playAgain() {
  $('#announce-bingo').addClass('inactive');
  $('#bingo-options').addClass('inactive');
  $('#bingo-win').addClass('inactive');
}

function shuffleBoard() {
  $('#announce-bingo').addClass('inactive');
  $('#bingo-options').addClass('inactive');
  $('#bingo-win').addClass('inactive');
  shuffled();
}

export default function WinModal() {
  return (
    <div className={'win-choose'}>
      <button
        className={'play-again win-option'}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        onClick={() => {
          playAgain();
        }}
      >
        <ReplayIcon className={'play-icon'} />
        <h3 className={'play-option'}>Continue</h3>
      </button>
      <button
        className={'shuffle win-option'}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        onClick={() => {
          shuffleBoard();
        }}
      >
        <RepeatIcon className={'play-icon'} />
        <h3 className={'play-option'}>New Board</h3>
      </button>
    </div>
  );
}

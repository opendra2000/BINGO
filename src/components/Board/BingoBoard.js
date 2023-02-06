// imports
import React from 'react';
import PopUpWin from '../BingoPop/popup';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import './BingoBoard.scss';
import { BingoTexts } from '../BingoTexts/bingos.enum';
import { selectRow, onEvent } from './BingoBoard.utils';

function Row(props) {
  const bingoTop = classNames('bingo-square');
  const bingoBottom = classNames('bingo-square');

  return (
    <React.Fragment>
      {[0, 1, 2, 3, 4].map((value) => {
        // generating unique id for each block
        let eachboxName = props.row + 'C' + (value + 1);

        if (props.row === 'R1' && value === 4) {
          return (
            <Grid key={'C' + (value + 1)} item xs={2}>
              <div
                className={bingoTop}
                id={eachboxName.toLowerCase()}
                onClick={() => {
                  props.boardState(
                    selectRow(
                      props.row,
                      eachboxName.toLowerCase(),
                      props.currentBoard
                    )
                  );
                }}
              >
                {/* box text value */}
                <h6>{props.details[value]}</h6>
              </div>
            </Grid>
          );
        } else if (props.row === 'R5' && value === 4) {
          return (
            <Grid key={'C' + (value + 1)} item xs={2}>
              <div
                className={bingoBottom}
                id={eachboxName.toLowerCase()}
                onClick={() => {
                  props.boardState(
                    selectRow(
                      props.row,
                      eachboxName.toLowerCase(),
                      props.currentBoard
                    )
                  );
                }}
              >
                {' '}
                {/* box text value */}
                <h6>{props.details[value]}</h6>
              </div>
            </Grid>
          );
        } else {
          return (
            <Grid key={'C' + (value + 1)} item xs={2}>
              <div
                className={'bingo-square'}
                id={eachboxName.toLowerCase()}
                onClick={() => {
                  props.boardState(
                    selectRow(
                      props.row,
                      eachboxName.toLowerCase(),
                      props.currentBoard
                    )
                  );
                }}
              >
                {' '}
                {/* box text value */}
                <h6>{props.details[value]}</h6>
              </div>
            </Grid>
          );
        }
      })}
    </React.Fragment>
  );
}

export default function BingoBoard() {
  //for the middle box in center
  let centerBox = new Set();
  centerBox.add('r3c3');

  let [boardMatrix, setBoard] = React.useState({
    R1: new Set(),
    R2: new Set(),
    R3: centerBox,
    R4: new Set(),
    R5: new Set(),
    active: 'brown',
    inactive: 'black',
    bingoWins: [],
    winState: false,
    centerBox: 'r3c3',
  });

  const stateRef = React.useRef();
  stateRef.current = boardMatrix;

  React.useEffect(() => {
    window.addEventListener('click', (event) => {
      onEvent(stateRef.current);
    });
  });

  return (
    <section className={'main-board'}>
      <canvas id={'bingo-win'}></canvas>
      <h1 id={'announce-bingo'} className={'bingo-announcement inactive'}>
        Bingo
      </h1>
      <div id={'bingo-options'} className={'inactive'}>
        <PopUpWin></PopUpWin>
      </div>{' '}
      <Grid container>
        <Grid item xs={12} id={'grid-container'}>
          {[1, 2, 3, 4, 5].map((value) => (
            <Grid justify={'center'} container key={'R' + value}>
              <Row
                currentBoard={stateRef.current}
                boardState={setBoard}
                row={'R' + value}
                details={Object.values(BingoTexts).slice(
                  (value - 1) * 5,
                  value * 5
                )}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  );
}

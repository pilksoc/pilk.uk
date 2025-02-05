import classNames from "classnames";
import * as React from "react";
import { MouseEventHandler, TouchEventHandler, useState, useRef } from "react";
import * as styles from "./pinTheSemicolonOnTheCode.module.scss";
import drumroll from "./sounds_drumroll.mp3";
import success from "./sounds_success.mp3";
import { SiteSEO } from "../../../components/site/SiteSEO/SiteSEO";

enum GameState {
  HOMEPAGE = "homepageMode",
  GAME = "gameMode",
  SCORE = "scoreMode",
}

enum ClickState {
  NOT_CLICKED = "not_clicked",
  CLICKED = "clicked",
  RELEASED = "released",
}

const PinTheSemicolonOnTheCode = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.HOMEPAGE);
  const [clickState, setClickState] = useState<ClickState>(
    ClickState.NOT_CLICKED
  );
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: NaN,
    y: NaN,
  });
  const [score, setScore] = useState<number>(0);
  const drumrollRef = useRef<HTMLAudioElement>(null);
  const successRef = useRef<HTMLAudioElement>(null);
  const targetSemicolonRef = useRef<HTMLSpanElement>(null);
  const cursorSemicolonRef = useRef<HTMLSpanElement>(null);

  const onGameStart = () => {
    setGameState(GameState.GAME);
    setClickState(ClickState.NOT_CLICKED);
  };
  const resetGame = () => {
    setGameState(GameState.HOMEPAGE);
    setClickState(ClickState.NOT_CLICKED);
    setMousePos({ x: NaN, y: NaN });
  };
  const onPointerDown = () => {
    if (gameState !== GameState.GAME) return;
    if (clickState !== ClickState.NOT_CLICKED) return;

    setClickState(ClickState.CLICKED);

    const drumElement = drumrollRef.current;
    const successElement = successRef.current;

    if (drumElement) {
      drumElement.currentTime = 0;
      drumElement.play();
    }
    if (successElement) {
      successElement.pause();
    }
  };
  const onPointerUp = () => {
    if (gameState !== GameState.GAME) return;
    if (clickState !== ClickState.CLICKED) return;

    setClickState(ClickState.RELEASED);

    const drumElement = drumrollRef.current;
    const successElement = successRef.current;

    if (drumElement) {
      drumElement.pause();
    }
    if (successElement) {
      successElement.currentTime = 0;
      successElement.play();
    }

    setTimeout(() => {
      setGameState(GameState.SCORE);
    }, 500);
  };
  const onMouseMove: MouseEventHandler | TouchEventHandler = (e) => {
    const cursorSemicolonElement = cursorSemicolonRef.current;
    const targetSemicolonElement = targetSemicolonRef.current;
    if (!cursorSemicolonElement) return;
    if (!targetSemicolonElement) return;
    if (clickState === ClickState.RELEASED) return;

    const curBound = cursorSemicolonElement.getBoundingClientRect();
    const destBound = targetSemicolonElement.getBoundingClientRect();
    setMousePos({
      x: e.clientX - curBound.width / 2,
      y: e.clientY - curBound.height / 2,
    });
    setScore(
      Math.sqrt(
        Math.abs(curBound.x - destBound.x) ** 2 +
          Math.abs(curBound.y - destBound.y) ** 2
      )
    );
  };

  return (
    <div className={styles.page}>
      <div
        className={classNames(styles.homepage, {
          [styles.homepageMode]: gameState === GameState.HOMEPAGE,
        })}
      >
        <div className={styles.rays}></div>
        <span className={styles.topText}>Pin the semicolon</span>
        <span className={styles.semicolonText}>;</span>
        <span className={styles.bottomText}>on the Donkey</span>
        <span className={styles.aboutText}>
          Another useless invention by Pilksoft Interactive Online
          <br />
          Audio files from github.com/bibixx/drumroll
        </span>
        <button className={styles.playButton} onClick={onGameStart}>
          Play
        </button>
      </div>

      <div
        className={classNames(styles.game, {
          [styles.gameMode]:
            gameState === GameState.GAME || gameState === GameState.SCORE,
        })}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onMouseMove={onMouseMove}
        onTouchMove={onMouseMove}
      >
        <pre className={styles.codeContainer}>
          #include &lt;stdio.h&gt;
          <br />
          int main() &#123;
          <br />
          {"    "}printf(&quot;Hello, World!&quot;)
          <span ref={targetSemicolonRef} className={styles.targetSemicolon}>
            ;
          </span>
          <br />
          {"    "}return 0;
          <br />
          &#125;
        </pre>
        <span
          className={classNames(styles.score, {
            [styles.mouseDown]: clickState !== ClickState.NOT_CLICKED,
          })}
        >
          {score.toFixed(2)} pixels
        </span>
        <code>
          <span
            ref={cursorSemicolonRef}
            className={classNames(styles.cursorSemicolon, {
              [styles.mouseDown]: clickState !== ClickState.NOT_CLICKED,
            })}
            style={{ left: mousePos.x, top: mousePos.y }}
          >
            ;
          </span>
        </code>
        <button
          onClick={resetGame}
          className={classNames(styles.resetGame, {
            [styles.scoreMode]: gameState === GameState.SCORE,
          })}
        >
          Home
        </button>
      </div>

      <div className={styles.audio}>
        <audio ref={drumrollRef} controls loop>
          <source src={drumroll} type="audio/mpeg" />
        </audio>
        <audio ref={successRef} controls>
          <source src={success} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default PinTheSemicolonOnTheCode;

export const Head = () => (
  <SiteSEO options={{ description: "Pin the Semi-Colon on the Donkey!" }} />
);

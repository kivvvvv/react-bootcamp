import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./words";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    if (this.isOver()) {
      return this.state.answer;
    }

    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    if (this.isOver()) {
      return <p className="Hangman-over">You lose</p>;
    }

    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  isOver() {
    return this.state.nWrong >= this.props.maxWrong;
  }

  reset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** render: render game */
  render() {
    const { images, maxWrong } = this.props;
    const { nWrong } = this.state;
    return (
      <section className="Hangman">
        <h1>Hangman</h1>
        <main>
          <div className="Hangman-img">
            <img
              src={images[nWrong]}
              alt={`${nWrong}/${maxWrong} wrong guesses`}
            />
          </div>
          <div className="Hangman-console">
            <p className="Hangman-wrong-guesses">{`Wrong guesses: ${nWrong}`}</p>
            <p className="Hangman-word">{this.guessedWord()}</p>
            <p className="Hangman-btns">{this.generateButtons()}</p>
            <div>
              <button className="Hangman-reset" onClick={this.reset}>
                RESET
              </button>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Hangman;

import { useState, useEffect } from "react";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [text, setText] = useState([]);
  const [clicked, setClicked] = useState(false);

  const fetchAdviceAndSpin = async () => {
    setClicked(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setText(data);
    setClicked(false);
  };

  useEffect(() => {
    fetchAdviceAndSpin();
  }, []);

  return (
    <>
      <section>
        <main>
          {text.slip && (
            <>
              <h1>Advice #{text.slip.id}</h1>
              <p>"{text.slip.advice}"</p>
            </>
          )}
          <picture>
            <source srcSet={pauseMobile} media='(max-width: 575px)' />
            <img src={pauseDesktop} alt='pause' />
          </picture>
          <button
            className={clicked ? "spin" : ""}
            onClick={fetchAdviceAndSpin}
          >
            <img src={dice} alt='roll the dice' />
          </button>
        </main>
      </section>
      <footer>
        <p className='attribution'>
          Challenge by{" "}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href='https://vjones.dev' target='_blank' rel='noreferrer'>
            Valerie Jones
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;

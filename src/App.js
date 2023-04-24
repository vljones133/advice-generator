// import './App.css';
import { useState, useEffect } from "react";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    setText(data);
  };

  useEffect(() => {
    fetchAdvice();
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
          <figure>
            <img src={pauseDesktop} alt='pause' />
          </figure>
          <button onClick={fetchAdvice}>
            <img src={dice} alt='roll the dice' />
          </button>
        </main>
      </section>
      <footer>
        <div className='attribution'>
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
        </div>
      </footer>
    </>
  );
}

export default App;

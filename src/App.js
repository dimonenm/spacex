import React from 'react';
import logo from './logo.svg';
import './style.css';

// const app = React.createElement('div', { class: 'App' }, 'hello world!'); // неудобный вариант добавления элементов

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <img src={logo} alt="Logo Space X" className="logo" />
        <nav className="main-nav nav">
          <ul className="list">
            <li className="item">
              <a href="/" className="item-link">Falcon 1</a>
            </li>
            <li className="item">
              <a href="/" className="item-link">Falcon 9</a>
            </li>
            <li className="item">
              <a href="/" className="item-link">Falcon Heavy</a>
            </li>
            <li className="item">
              <a href="/" className="item-link">Updates</a>
            </li>
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <a href="/" className="item-link">Home</a>
            </li>
            <li className="item">
              <a href="calendar.html" className="item-link">Calendar</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="main">
        <h1 className="title">Falcon 1</h1>
        <div className="video-container">
          <video className="video" autoPlay loop muted src="./video/moon.mp4"></video>
        </div>
      </section>

    </React.Fragment>
  );
}

export default App;

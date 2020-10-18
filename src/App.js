import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './style.css';

// const app = React.createElement('div', { class: 'App' }, 'hello world!'); // неудобный вариант добавления элементов

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main/>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';
import './style.css';

// const app = React.createElement('div', { class: 'App' }, 'hello world!'); // неудобный вариант добавления элементов

// function App() {
//   return (
//     <React.Fragment>
//       <Header />
//       <Main />
//       <Features />
//       <Footer />
//     </React.Fragment>
//   );
// }

class App extends React.Component {

  state = {
    rocket: 'Falcon 1',
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

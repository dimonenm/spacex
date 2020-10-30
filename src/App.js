import React from 'react';
import { BrowserRouter, Route, /*Link*/ } from "react-router-dom";

import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import FetchData from './service/FetchData.js';

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

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    // this.fetchData.getCompany().then(data => console.log(data));
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      }); // == .then(features => this.setState({rocketFeatures: features}))      
  }

  cangeRocket = (rocket) => {
    this.setState({ rocket }, this.updateRocket);
  }

  updateCompany = () => {
    this.fetchData.getCompany().then(data => this.setState({company: data}))
  }

  render() {
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} cangeRocket={this.cangeRocket} />

        <Route exact path='/'>
          
          {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        </Route>

        <Route exact path='/calendar' component={Calendar}/>
        <Route exact path='/details/:id' component={Details}/>

        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    );
  }
}

export default App;

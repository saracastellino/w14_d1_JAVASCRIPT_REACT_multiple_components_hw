import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UpcomingFilms from './containers/UpcomingFilmTable'


class App extends Component {
  render() {
    return (
      <>
       <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <UpcomingFilms />
      <a
          className="App-link"
          href="https://www.imdb.com/calendar/?region=gb"
          target="_blank"
          rel="noopener noreferrer"
        >
       View more upcoming releases!
        </a>
      </div>
      </>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
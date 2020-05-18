import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UpcomingFilms from './containers/UpcomingFilmTable'


class App extends Component {
  render() {
    return (
      <>
       <div className="App">
          <div className="Body">
          <h1 className="App-logo" alt="logo">IMDb</h1>
          <UpcomingFilms />
          <a
              className="App-link"
              href="https://www.imdb.com/calendar/?region=gb"
              target="_blank"
            >
          View more upcoming releases!
            </a>
        </div>
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
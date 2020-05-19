import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import UpcomingFilms from './containers/UpcomingFilmTable'


class App extends Component {
  render() {
    return (
      <>
       <div className="App">
          <div className="Body">
          <h1 className="App-logo" alt="logo">🍕</h1>
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
      </div>
      </>
    );
  }
}

export default App;

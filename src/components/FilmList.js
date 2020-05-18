import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{

    // constructor(props){
    //     super(props);
    //         this.openUrl = this.openUrl.bind(this);
    // }
    
    // openUrl() {
    //     window.open(this.film.url);
    // }
    
    render() {
        const filmList = this.props.films.map(film => {
            return (
                // <Film url={film.url} key={film.id} onclick={openUrl}>{film.name}</Film>
                <Film><a href={film.url} key={film.id} target="_blank">{film.name}</a></Film>
             


            )
        })
        return (
            <>
            {filmList}
            </>
        );
    }
}

export default FilmList;

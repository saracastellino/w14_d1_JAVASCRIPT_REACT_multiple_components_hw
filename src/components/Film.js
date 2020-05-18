import React, {Component} from 'react';

class Film extends Component {

    render() {
        return (
        <>
            <h1>{this.props.children}</h1>

        </>
        )
    }

}

export default Film;


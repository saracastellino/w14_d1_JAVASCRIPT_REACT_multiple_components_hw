import React, {Component} from 'react';

class Film extends Component {

    render() {
        return (
        <>
            <h4>{this.props.children}</h4>
        </>
        )
    }
}

export default Film;


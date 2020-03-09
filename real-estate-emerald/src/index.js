import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Hero from './components/Hero'

class Home extends Component {
    render() {
        return (
            <Hero />
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));
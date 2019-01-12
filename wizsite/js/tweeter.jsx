import React from 'react';
import PropTypes from 'prop-types';

class Tweeter extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        // Render Blog entry
        return (
        <div id="tweeter" className="col-md-6">
            <a class="twitter-timeline" data-height="800" data-theme="dark" 
                    href="https://twitter.com/robwiztv?ref_src=twsrc%5Etfw">
                    Tweets by robwiztv
            </a> 
        </div>
        )
    }
};

// Tweeter.propTypes = {

// };

export default Tweeter;
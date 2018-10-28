import React from 'react';
import PropTypes from 'prop-types';


class Index extends React.Component {
    /* Displays main index of website */

    constructor(props){
        super(props);
        this.state = {
            test: "",
        };
    }

    componentDidMount() {
        //call to api
        fetch(this.props.url, {credentials: 'same-origin'})
        .then((response) => {
            if (!response.ok) throw Error (response.statusText);
            return response.json();
        })
        .then((data) => {
            this.setState({
                test: data.test
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        // Render index
        return (
            <div className="index">
                <p>props url {this.props.url}</p>
                <p>api tidbit {this.state.test}</p>
            </div>
        )
    }
}


Index.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Index;



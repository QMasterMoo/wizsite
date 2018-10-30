import React from 'react';
import PropTypes from 'prop-types';
import RecentBlog from './recentblog';


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
                <section id="content" className="container-fluid"><br />
                <div id="content" className="row">
                {/* <Tweeter /> */}
                <RecentBlog url={this.props.url + 'blogs/'}/>
                </div>
                </section>
            </div>
        )
    }
}


Index.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Index;



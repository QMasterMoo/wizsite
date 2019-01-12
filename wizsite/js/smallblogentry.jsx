import React from 'react';
import PropTypes from 'prop-types';

class SmallBlogEntry extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        // Render Blog entry
        return (
        <div id="blog" className="col-md-12">
            <div id="blog-title" className="card lead mb-2 bg-dark">
                 {this.props.title}
            </div>
            <div className="card mb-1 bg-dark">
                <div className="card-header">
                    <h6 className={"card-subtitle text-muted"}>{this.props.author}</h6>
                </div>
                <div className="card-body">
                    {this.props.content}
                </div>
                <div className="card-footer text-muted small text-right">
                    {this.props.posted}
                </div>
            </div>
            <br />
        </div>
        )
    }
};

SmallBlogEntry.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default SmallBlogEntry;
import React from 'react';
import PropTypes from 'prop-types';


class RecentBlog extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
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
                posts: data.posts
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        // Render Recent Blog posts
        const blogposts = [];
        if ("posts" in this.state){
            this.state.posts.forEach((post) => {
                blogposts.push(
                    <SmallBlogEntry 
                        author={post['author']}
                        title={post['title']}
                        content={post['content']}
                        posted={post['posted']}
                    />
                );
            })
        }

        return (
            <div id="blog" className="col-md-6">
            <div id="blog-title" className="card lead mb-2 bg-dark">
                <div className="card-header">Latest Posts</div>
                {blogposts}
            </div>

            <br />
        </div>
        )
    }
};

RecentBlog.propTypes = {
    url: PropTypes.string.isRequired,
};

class SmallBlogEntry extends React.Component {

    constructor(props){
        super(props);
    }
    // TODO multiple classnames?
    render() {
        // Render Blog entry
        return (
        <div id="blog" className="col-md-6">
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



export default RecentBlog;
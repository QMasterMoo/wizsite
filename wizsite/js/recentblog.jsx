import React from 'react';
import PropTypes from 'prop-types';

import SmallBlogEntry from './smallblogentry';


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
            let key = 0;
            this.state.posts.forEach((post) => {
                blogposts.push(
                    <SmallBlogEntry key={key}
                        author={post['author']}
                        title={post['title']}
                        content={post['content']}
                        posted={post['posted']}
                    />
                );
                // TODO: figure out js way to do this proper (map?)
                key += 1;
            })
        }

        const tweets = [];

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




export default RecentBlog;
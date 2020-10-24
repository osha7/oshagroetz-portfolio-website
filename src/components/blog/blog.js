import React from 'react';
import '../../css/blog.css';
import moment from 'moment';

export default class Blog extends React.Component {

    state = {
        url: '',
        title: '',
        image: '',
        blogs: []
    }

    componentDidMount = () => {
        let blogUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ogroetz"
        fetch (blogUrl)
        .then(resp => resp.json())
        // .then(data => {
        //     console.log(data.feed, data.items)
        // })
        .then(data => this.setState({
            url: data.feed.url,
            title: data.feed.title,
            image: data.feed.image,
            blogs: data.items
        }))
    }

    render() {
        console.log(this.state)
        let blogArray = this.state.blogs
        const blogItems = blogArray.map(blog => (
            console.log(blog),
            // console.log(blog, blog.pubDate.split(' ')[0]),
            // console.log(blog, blog.content.split(".")[0], blog.content.split(">")[0].includes('<p')),
            <div className="blog-body"> 
                <div className="blog-post" key={blog.title}>
                    <div className="blog-post__img">
                        <img src={blog.thumbnail} alt={blog.titlte} />
                    </div>
                    <div className="blog-post__info">
                        <div className="blog-post__date">
                            
                            <span>{ moment(blog.pubDate.split(' ')[0]).format('MMMM Do, YYYY')}</span>
                           
                        </div>
                        <h2 className="blog-post__title">{blog.title}</h2>
                        {/* <p>BLOG POST CONTENT</p> */}
                        <a href={blog.link} className="blog-post__cta" target="_blank">Read Article...</a>
                    </div>
                </div>
            </div>
        ))
        return(
        <div className="blog">
            {blogItems}
        </div>
        )
    }
}
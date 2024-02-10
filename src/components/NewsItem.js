import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://images.news18.com/ibnlive/uploads/2023/12/darshans-kaatera-earns-a-record-over-rs-1-crore-in-advance-bookings-27-2023-12-961429cedcc0bc2b0c536890f2a86269-16x9.jpg?impolicy=website&width=1200&height=675"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

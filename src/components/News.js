import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    newsUpdate = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=832abbe157be47f2b9a26604b8840c8e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            totalPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
            loading: false
        })
        // console.log(parsedData.totalResults);x`x`
    }

    async componentDidMount() {
        this.newsUpdate();
    }

    // handlePrev = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.newsUpdate();
    // }

    // handleNext = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.newsUpdate();
    // }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=832abbe157be47f2b9a26604b8840c8e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: false })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
            loading: false
        })
    };

    render() {
        return (
            <>
                <div className='text-center mb-5 display-5 fw-bold' style={{marginTop: '80px'}}>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</div>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.page !== this.state.totalPages}
                    loader={<Spinner />}
                    className='overflow-hidden'
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4 overflow-">
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>}
                {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page === this.state.totalPages} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                    </div> */}

            </>
        )
    }
}

export default News

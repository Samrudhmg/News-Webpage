import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "./newsstyle.css";
import Loadingcomp from "./Loadingcomp";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    console.log("hi this is constructor from new comp");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalfirstletter(this.props.category)}--Newshub`;
  }

  capitalfirstletter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updatecomp(page) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99ecd83952d24644a8e7546b7f079d4f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updatecomp();
  }
  handleonnext = async () => {
    // if(!( this.state.page + 1 > Math.ceil( this.state.totalResults/this.props.pagesize))){

    // console.log("this is next button");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99ecd83952d24644a8e7546b7f079d4f&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     page:this.state.page+1,
    //     articles: parsedData.articles,
    //     loading:false
    // })}
    this.setState({
      page: this.state.page + 1,
    });
    this.updatecomp();
  };
  handleonpre = async () => {
    // console.log("hi this is previous button");
    // console.log("this is next button");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99ecd83952d24644a8e7546b7f079d4f&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     page:this.state.page-1,
    //     articles: parsedData.articles,
    //     loading:false
    // })
    this.setState({
      page: this.state.page - 1,
    });
    this.updatecomp();
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ padding: "10px 10px" }}>
          News-top headlines
        </h1>
        {this.state.loading && <Loadingcomp />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    imageurl={element.urlToImage}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    data={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handleonpre}
            type="button"
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handleonnext}
            type="button"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

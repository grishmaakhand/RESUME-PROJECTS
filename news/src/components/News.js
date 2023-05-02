import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

class News extends Component {
  static defaulProps = {
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      revArticles: [],
      page: 1,
    };
  }
  async commonFun() {
    let url = `https://newsapi.org/v2/top-headlines?country=In&category=${
      this.props.category
    }&apiKey=${this.props.vApiKey}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }`;
    let data = await fetch(url);
    let passData = await data.json();
    this.setState({
      revArticles: passData.articles,
      totalarticles: passData.totalResults,
    });
  }

  async componentDidMount() {
    this.commonFun();
  }

  handlePreClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.commonFun();
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.commonFun();
    }
  };

  render() {
    return (
      <>
        <h1 className="container text-center my-2">News</h1>
        <div className="container my-3 ">
          <Row>
            {this.state.revArticles.map((e) => {
              return (
                <Col className="col-4" key={e.url}>
                  <NewsItem
                    title={e.title}
                    description={e.description}
                    imgurl={e.urlToImage}
                    singleNewUrl={e.url}
                    dateTime={e.publishedAt}
                    authorName={e.author}
                  />
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="container d-flex justify-content-between my-3">
          <Button
            variant="dark"
            onClick={this.handlePreClick}
            disabled={this.state.page <= 1}
          >
            Previous
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalarticles / this.props.pageSize)
            }
            variant="dark"
            onClick={this.handleNextClick}
          >
            Next
          </Button>
        </div>
      </>
    );
  }
}

export default News;

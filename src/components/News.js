import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ddac584e4a8745ba8b3ecf030358a4f4&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    props.setProgress(30);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(parsedData.loading)

    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [updateNews]);


  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ddac584e4a8745ba8b3ecf030358a4f4&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)

  };


  return (
    <>
      <h2 className='mb-3'><center>NewsAdda-Get latest news update</center></h2>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={(element.title ? element.title.slice(0, 45) : 'No title available')} description={(element.description ? element.description.slice(0, 88) : 'No title available')} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name || "unknown"} />
                </div>
              ))
            ) : (<p>No articles available.</p>)}

          </div>
        </div>
      </InfiniteScroll>




    </>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News

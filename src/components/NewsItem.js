import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
  return (
    <div>
      <span className="badge text-bg-secondary">{source}</span>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://www.freep.com/gcdn/authoring/authoring-images/2024/10/01/PDTF/75461280007-lions-093024-kpm-00272.jpg?crop=5327,2997,x0,y200&width=3200&height=1801&format=pjpg&auto=webp" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">Last updated {publishedAt} by {author}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem

import React from 'react'
import { Link } from "react-router-dom";

const NewsItem = (props) =>{

    let { title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://images.indianexpress.com/2023/03/ind-vs-aus-india-vs-australia-live.jpeg "} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown-Source"} on {new Date(date).toGMTString()}</small></p>
            <Link rel="noreferrer" to={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</Link>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
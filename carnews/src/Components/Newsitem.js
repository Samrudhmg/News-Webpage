
import React, { Component } from 'react'
import "./navstyles.css"

export default class Newsitem extends Component {
     
    
    render() {
        let {title, data,imageurl,newsurl,author,date }=this.props;
        return (
            <div className='container1' >
                <div className='card' style={{width:'18rem'}}  >
                <img src={imageurl?imageurl:'noimage.png'} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{data}....</p>
                        <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author} Last updated at {!date?new Date(date).toGTMString:date}</small></p>
                        <a href={newsurl} className="btn btn-primary btn-sm" style={{backgroundColor:'#3085C3'}}>Browse news</a>
                    </div>
                 </div>
            </div>
        )
    }
}

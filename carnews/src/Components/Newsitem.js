import React, { Component } from 'react'

export default class Newsitem extends Component {
     
    
    render() {
        let {title, data,imageurl,newsurl,author,date }=this.props;
        return (
            <div className='container1'>
                <div className='card' style={{width:'18rem'}}  >
                <img src={imageurl?imageurl:'https://media.istockphoto.com/id/1254219019/vector/new-comic-speech-bubble-vector-flat-illustrations-color-phrase-lettering-with-explosive.jpg?s=612x612&w=0&k=20&c=5ohcYYNPS9IoYUSnQxcO0G6lN324dRzU5IKVjuLfxeI='} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{data}...</p>
                        <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author} Last updated at {!date?new Date(date).toGTMString:date}</small></p>
                        <a href={newsurl} className="btn btn-primary btn-sm">Browse news</a>
                    </div>
                 </div>
            </div>
        )
    }
}

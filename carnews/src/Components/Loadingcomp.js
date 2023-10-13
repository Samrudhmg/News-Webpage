import React, { Component } from 'react'
import loading from '../loading.gif'
import './newsstyle.css'


export default class Loadingcomp extends Component {
  render() {
    return (
      <div>
        <img className='loading' src={loading} alt='loading'/>
      </div>
    )
  }
}

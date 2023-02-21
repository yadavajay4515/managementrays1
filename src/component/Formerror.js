import React, { Component } from 'react'

export default class Formerror extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        {(()=>{
                return(
                <div style={{color: 'rgb(255 100 114)'}}>{this.props.errorName}</div>
                )
                   })()}

        
      </div>
    )
  }
}

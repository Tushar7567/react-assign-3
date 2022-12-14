import React, { Component } from 'react'

export default class ResultDisplay extends Component {

  render() {
    return (
       
         <div className='resultPart'>
          <div id='result'>
            
            {this.props.data.map((value,index) => {
              let { name, department, rating } = value;
  
              return(<div key={index} className='innerresult'>
              <span>Name : {name} </span>
              <span>Department : {department} </span>
              <span>Rating : {rating} </span>
              </div>)
            } )}
              
          </div>
          <button className='back' onClick={this.props.dt}>Back</button>  
          </div>
        

    )
  }
}


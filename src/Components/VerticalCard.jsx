import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export  class VerticalCard extends Component {
  constructor(props){
    super();
    this.state={
      id:props.id,
      img:props.img,
      title:props.title,
      details:props.details,
      date:props.date,
      type:props.type
    }
  }
  render() {
    return (
      <NavLink to="/nextPage" className="text-decoration-none text-dark d-flex vertical-card boxx">
        <img src={this.state.img} alt="" height="200px" width="328px" className="card-img"/>
        <div className="ver-box">
           <h3 >{this.state.title}</h3>
           <p className="text-muted lh-sm">{this.state.details} </p>
           <p className="mx-4">
           <span className="fw-bold">{this.state.type} : </span>{this.state.date}
        </p>
      </div>
    </NavLink>
    )
  }
}

class VerticalSmallCard extends Component {
  constructor(props){
    super();
    this.state={
      id:props.id,
      img:props.img,
      title:props.title,
      details:props.details,
      date:props.date,
      type:props.type
    }
  }
  render() {
    return (
      <NavLink  to="/nextPage" className="text-decoration-none text-dark d-flex vertical-sm-card ">
        <img src={this.state.img} alt="" height="200px" width="250px" className="hori-sm-img"/>
        <div className="ver-sm-box">
          <h3 >{this.state.title}</h3>
          <p className="text-muted lh-sm"> {this.state.details} </p>
          
          <p className="mx-4">
            <span className="fw-bold">{this.state.type} : </span>{this.state.date}
         </p>
       </div>
     </NavLink>
    );
  }
}

export default VerticalSmallCard;

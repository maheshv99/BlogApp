import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class HorizontalBigCard extends Component {
  constructor(props){
    super();
    this.state={
      id:props.id,
      img:props.img,
      title:props.title,
      date:props.date,
      type:props.type,
      num:props.num
    }
  }
  render() {
    return (
      <NavLink to="/nextPage"  className=" text-decoration-none text-dark hori-card">
         <img src={this.state.img} alt="" height="200px" width="328px" className="card-img"/>
         <div className="hori-box">
             <h3>{this.state.title} </h3>
             <p className="text-muted lh-sm ">{this.state.details} </p>
             <p className="mt-5 mx-4">
                <span className="fw-bold">{this.state.type} : </span>{this.state.date}
             </p>
         </div>
     </NavLink>
    );
  }
}


export class CardHead extends Component {
  constructor(props){
    super();
    this.state={
      id:props.id,
      img:props.img,
      title:props.title,
      date:props.date,
      type:props.type,
      num:props.num
    }
  }
  render() {
    return (
      <NavLink to="/nextPage" className="text-decoration-none text-dark mt-3 hori-sm-card">
        <div className="d-flex mx-2 align-items-center">
           <img src={this.state.img} alt="" height="80px" width="80px" className="mt-3 me-2"/>
           <h4 className="horizontal-head mt-3">{this.state.title} </h4>
           <span className="num">{this.state.num} </span>
        </div>
        <p className="my-3 mx-2">
           <span className="fw-bold">{this.state.type} </span>
           <span className="text-grey"> / {this.state.date}</span>
        </p>
      </NavLink>
    );
  }
}




export default class HorizontalSmallCard  extends Component {
  constructor(props){
    super();
    this.state={
      id:props.id,
      img:props.img,
      title:props.title,
      date:props.date,
      type:props.type,
      num:props.num
    }
  }
  render() {
    return (
      <div className="hori-sm-card">
      <NavLink to="/nextPage" className=" text-decoration-none text-dark ">
        <img src={this.state.img} alt="" height="200px" width="325px" className="hori-sm-img"/>
        <div className="d-flex  mx-2">
          <h3 className="horizontal-head mt-3 "> {this.state.title} </h3>
          <span className="num"> {this.state.num} </span>
        </div>

        <p className=" mx-2">
          <span className="fw-bold">{this.state.type} </span>
          <span className="text-grey"> / {this.state.date}</span>
        </p>
      </NavLink>
    </div>
    )
  }
}

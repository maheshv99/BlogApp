import React from "react";
import Button from "react-bootstrap/Button";
import logo from '../images/face.png';
import share from '../images/share.png';
import clap from '../images/clap.png';





const NextPage = (props) => {
 
 
  return (
    <>
  
      <div className="container header ">
        <div className="d-flex mt-3">
          <p className="h6 vlogo">The</p>
          <h3 className="head4"> Siren</h3>
        </div>
        <Button variant="outline-primary h-25 mt-3 " >Get Started</Button>
      </div>
      <hr className="hr" />
      <div className="d-flex next-box">
        <div className="share-box">
          <a href="#k" className="d-flex text-decoration-none ">
            <img src={clap} alt=""/>
            <p className="ms-4 text-dark my-3">9.3K</p>
          </a>
          <a href="#ff" className="d-flex mt-3 text-decoration-none">
            <img src={share} alt=""/>
            <p className="ms-4 text-dark my-3">Share this article</p>
          </a>
        </div>
        <div className="box-center">
          <h3 className="my-3 ">{props.title} </h3>
          <div className="d-flex mb-3">
            <img src={logo} alt="" className="circle me-3 "/>
            <div className="logo-detail">
              <h5 className="m-0 mt-1">Dmitry Nozhe</h5>
              <p className="grey-text m-0 text-muted">
                Jan 28, 2019 · 10 min read
              </p>
            </div>
            <a href="#fg" className="mt-3 ms-5">
              <i class="fab fa-facebook text-grey"></i>
              <i class="fab fa-instagram-square ms-1 text-grey"></i>
              <i class="fab fa-twitter ms-1 text-grey"></i>
              <i class="fab fa-youtube ms-1 text-grey"></i>
            </a>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FH1WYEDn9jV1J6rI-AoiTI3PT-NgFwiNPQ&usqp=CAU"
            alt=""
            height="200px"
            width="396px"
            className="card-img"
          />

          <p className="next-para">
            Lorem ipsum dolor sit amet amet amet consectetur adipisicing elit.
            Tenetur numquam voluptatem asperiores rerum iste aliquid omnis minus
            dolores, eius amet.
          </p>

          <div className="resp-share-box ">
          <a href="#k" className="d-flex text-decoration-none">
            <img src={clap} alt="" className="img-res"/>
            <p className="text-dark ">9.3K</p>
          </a>
          <a href="#ff" className="d-flex text-decoration-none">
            <img src={share} alt="" className="img-res"/>
            <p className="text-dark ">Share this article</p>
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default NextPage;
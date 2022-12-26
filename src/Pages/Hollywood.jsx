import React from "react";
import Header from "../Components/Header";
import HorizontalSmallCard, { CardHead } from "../Components/HorizontalCard";
import VerticalSmallCard from "../Components/VerticalCard";
import HollywoodPost, { HollywoodFirstPost, HollywoodTopPost } from "../data/HollywoodData";


export default function Hollywood() {
  return (
    <>
    <Header/>
       <div className="container">
          <div className='d-flex content-box'>
            <div className='content-box-main'>
              <h2 className=' mt-3'>Hollywood</h2>
              <div className="line"></div>
               {HollywoodPost.map((val) => {
              return (
                <>
                   <VerticalSmallCard id={val.id} img={val.img} title={val.title} details={val.details} date={val.date}
                    type={val.type}/>
                    <hr />
                </>
              );
            })}
            </div>
            <div className="content-box-side">
                <h2 className='mt-3'>Top Posts</h2>
                <div className="line mb-4"></div>
                
                {HollywoodFirstPost.map((val) => {
              return (
                <>
                   <HorizontalSmallCard id={val.id} img={val.img} title={val.title} details={val.details} date={val.date}
                    type={val.type}/>
                    <hr />
                </>
              );
            })}
             {HollywoodTopPost.map((val) => {
              return (
                <>
                  <CardHead id={val.id} img={val.img} title={val.title} date={val.date} type={val.type}
                  num={val.num}/>
                  <hr />
                </>
              );
            })}
            </div>
          </div>

      </div>
    </>
  );
}
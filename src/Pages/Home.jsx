import React from 'react'
import Header from '../Components/Header'
import  { HorizontalBigCard } from '../Components/HorizontalCard'
import LgImgOverlay, { SmImgOverlay } from '../Components/ImgOverlay'
import VerticalCard from '../Components/VerticalCard'
import BollywoodPost from '../data/BollywoodData'
import FitnessPost from '../data/FitnessData'
import FoodPost from '../data/FoodData'
import HollywoodPost from '../data/HollywoodData'
import TechnologyPost from '../data/TechnologyData'


export default function Home() {
  return (
    <>
    <Header/>
       <div className="container box">
           <LgImgOverlay/>
           <div className="side-box d-flex">
              <SmImgOverlay/>
              <SmImgOverlay/>
           </div>
       </div>
       <div className="container">
          <h2 className='mt-4 mb-1'>The Latest</h2>
          <div className="line mb-4"></div>
          <div className="cards-container">
              <HorizontalBigCard id={FoodPost[0].id} img={FoodPost[0].img} title={FoodPost[0].title} details={FoodPost[0].details} date={FoodPost[0].date} type={FoodPost[0].type}/>

              <HorizontalBigCard id={FoodPost[1].id} img={FoodPost[1].img} title={FoodPost[1].title} details={FoodPost[1].details} date={FoodPost[1].date} type={FoodPost[1].type}/>

              <HorizontalBigCard id={TechnologyPost[0].id} img={TechnologyPost[0].img} title={TechnologyPost[0].title} details={TechnologyPost[0].details} date={TechnologyPost[0].date} type={TechnologyPost[0].type}/>

              <HorizontalBigCard id={TechnologyPost[1].id} img={TechnologyPost[1].img} title={TechnologyPost[1].title} details={TechnologyPost[1].details} date={TechnologyPost[1].date} type={TechnologyPost[1].type}/>

              <HorizontalBigCard id={FitnessPost[0].id} img={FitnessPost[0].img} title={FitnessPost[0].title} details={FitnessPost[0].details} date={FitnessPost[0].date} type={FitnessPost[0].type}/>

              <HorizontalBigCard id={FitnessPost[1].id} img={FitnessPost[1].img} title={FitnessPost[1].title} details={FitnessPost[1].details} date={FitnessPost[1].date} type={FitnessPost[1].type}/>

              
          </div>

          <h2 className='mt-5 mb-1'>The Latest Article</h2>
          <div className="line"></div>
          <div className="d-flex ver-article ">
            <div>
               <VerticalCard id={BollywoodPost[0].id} img={BollywoodPost[0].img} title={BollywoodPost[0].title} details={BollywoodPost[0].details} date={BollywoodPost[0].date} type={BollywoodPost[0].type}/>

               <hr />

               <VerticalCard id={BollywoodPost[1].id} img={BollywoodPost[1].img} title={BollywoodPost[1].title} details={BollywoodPost[1].details} date={BollywoodPost[1].date} type={BollywoodPost[1].type}/>

               <hr />

               <VerticalCard id={HollywoodPost[0].id} img={HollywoodPost[0].img} title={HollywoodPost[0].title} details={HollywoodPost[0].details} date={HollywoodPost[0].date} type={HollywoodPost[0].type}/>
            </div>

            <div className="side-bar">
                <p className='text-center ad'>Advertisement</p>
                <img src="https://tpc.googlesyndication.com/daca_images/simgad/14781010476110498296" alt="" width="250px" height="720px" className="ad-img"/>
            </div>
            
          </div>
       </div>
    </>
  )
}
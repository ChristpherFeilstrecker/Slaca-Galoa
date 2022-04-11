import { useState } from 'react'
import './works.scss'

export default function Works() {
const [currentSlide, setCurrenSlide]= useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Mobile App",
      desc: "APP mobile para smartfone, responsivo",
      img: "https://image.slidesharecdn.com/planningforthefuture-howthedatastatisticsstrategywillhelpusgettherightdataforourfuturepolicyneeds-100318060341-phpapp01/95/planning-for-the-future-how-the-data-statistics-strategy-will-help-us-get-the-right-data-for-our-future-policy-needs-1-728.jpg?cb=1268892263"
    }
    ,
    {
      id: "2",
      icon: "assets/pc.png",
      title: "Web App",
      desc: "APP web para computador, responsivo",
      img: "https://www.moveoapps.com/blog/wp-content/uploads/2020/07/types-of-web-applications.png"
    },
    {
      id: "3",
      icon: "assets/pcandmobile.png",
      title: "Web/mobile App",
      desc: "APP web para computadore smartfone, responsivo",
      img: "https://www.websiteseveryday.co.uk/wp-content/uploads/2019/03/webuyanyvideo-progressive-web-app-screenshot.png"
    }
    
  ]

  const handleClick= (way)=>{
    way === "left"? setCurrenSlide(currentSlide > 0? currentSlide-1:2):
    setCurrenSlide(currentSlide<data.length -1?currentSlide+1:0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>


        {data.map((d) => (

          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftCon">
                  <div className="imgCon">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Project</span>
                </div>
              </div>
              <div className="rigth">
                <img src="https://image.slidesharecdn.com/planningforthefuture-howthedatastatisticsstrategywillhelpusgettherightdataforourfuturepolicyneeds-100318060341-phpapp01/95/planning-for-the-future-how-the-data-statistics-strategy-will-help-us-get-the-right-data-for-our-future-policy-needs-1-728.jpg?cb=1268892263" alt="" />
              </div>
            </div>
          </div>

        ))}
      </div>
      <img src="assets/white-arrow.png" className="arrow left" alt="left"  onClick={()=>handleClick("left")}/>
      <img src="assets/white-arrow.png" className="arrow right" alt="rigth" onClick={()=>handleClick()}/>
    </div>
  )
}

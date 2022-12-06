import React, { useState } from "react";
import './Slider.css';
import LeftArrow from "../../img/leftArrow.png";
import RightArrow from "../../img/rightArrow.png"

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide =() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const nextSlide =() => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }

    if (slides.length > 1) {
        return(
            <div className="boxStyle">
                
                <button className="leftBtn" onClick={prevSlide}>
                    <img src={ LeftArrow } alt="" className="" />
                </button>
                <button className="rightBtn" onClick={nextSlide}>
                    <img src={ RightArrow } alt="" className="" />
                </button>
                <div className="pictureNbr">{currentIndex +1 }/{slides.length}</div>
                <div className="slider" style={{backgroundImage : `url(${slides[currentIndex]})`}}>
                </div>
            </div>
        ) 
    } else {
        return(
            <div className="boxStyle">
                <div className="pictureNbr">{currentIndex +1 }/{slides.length}</div>
                <div className="slider" style={{backgroundImage : `url(${slides[currentIndex]})`}}>
                </div>
            </div>
        ) 
    }
        
}


export default Slider;
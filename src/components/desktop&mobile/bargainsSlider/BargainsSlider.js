import { React, useState } from 'react'
import styles from './styles.module.css';
import data from '../../../assets/bargains/bargains.json'
import SliderButton from './sliderButton/SliderButton';
import SliderDot from './sliderDot/SliderDot';

export default function BargainsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bargains = data.bargains;
  let imgs = [];

  function handleClick(direction) {
    if (direction === "left") {
      if (currentSlide === 0)
        setCurrentSlide(bargains.length - 1);
      else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    else {
      if (currentSlide === bargains.length - 1)
        setCurrentSlide(0);
      else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  }

  for (let i = 0; i < bargains.length; i++){
    imgs[i] = require(`../../../assets/bargains/${bargains[i].src}`);
  }
  return (
    <div className={styles.bargainsWrapper}>
      <div className={styles.bargainsSlider}>
        <SliderButton direction="left" onClick={handleClick}></SliderButton>
        <img src={imgs[currentSlide]} width="130px" ></img>
        <SliderButton direction="right" onClick={handleClick}></SliderButton>
      </div>
      <div className={styles.dotsWrapper}>
        {bargains.map((bargain, i) => {
          return (
            <SliderDot key={i} id={i} currentSlide={currentSlide}></SliderDot>
          )
        })
        }
      </div>
    </div>
  )
}

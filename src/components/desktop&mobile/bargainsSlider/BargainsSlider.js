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
        setCurrentSlide(data.bargains.length - 1);
      else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    else {
      if (currentSlide === data.bargains.length - 1)
        setCurrentSlide(0);
      else {
        setCurrentSlide(currentSlide + 1);
      }
    }
    console.log(currentSlide)
  }

  for (let i = 0; i < data.bargains.length; i++){
    console.log(bargains[i].src)
    imgs[i] = require(`../../../assets/bargains/${bargains[i].src}`);
  }
  return (
    <div className={styles.bargainsWrapper}>
      <div className={styles.bargainsSlider}>
        <SliderButton direction="left" onClick={handleClick}></SliderButton>
        <img src={imgs[currentSlide]} width="200px" ></img>
        <SliderButton direction="right" onClick={handleClick}></SliderButton>
      </div>
      <div className={styles.dotsWrapper}>
        {data.bargains.map((bargain, i) => {
          return (
            <SliderDot id={i} currentSlide={currentSlide}></SliderDot>
          )
        })
        }
      </div>
    </div>
  )
}

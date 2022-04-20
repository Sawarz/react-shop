import { React, useRef, useEffect } from 'react'
import styles from './styles.module.css'

export default function Matrix(props) {
  const canvasRef = useRef();
  let speed = props.speed;
  
  useEffect(() => {
    canvasRef.current.style.width = props.size + "px";
    canvasRef.current.style.height = props.size + "px";
    let letters = undefined;
    let columnSize;
    let context;
      columnSize = canvasRef.current.width/props.letterSize;
      letters = Array(columnSize).fill(0);
      context = canvasRef.current.getContext("2d");
      function matrixAnimation(){
        context.fillStyle = props.lettersColor;
        context.font = `${props.lettersColor}pt ${props.font}`;
        letters.forEach((y, index)=>{
          const randomLetter = String.fromCharCode(Math.random()*128);
          let x = index * props.letterSize;
          context.fillText(randomLetter, x, y);
          if (y>25 + Math.random()*15000) letters[index] = 0;
          else{
            letters[index] = y + props.letterSize;
          }
        })
        context.fillStyle =`rgba(0,0,0,0.1)`;
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
      const interval = setInterval(()=>{
        matrixAnimation();
      }, speed)
      return () => clearInterval(interval);
    }, [props.font, props.letterSize, props.lettersColor, speed])
    

  return (
    <canvas ref={canvasRef} className={styles.matrix}>Matrix</canvas>
  )
}

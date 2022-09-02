import React from 'react';
import "./bmicalculator.css"
import { useState } from "react";
export default function Bmicalculator() {
    const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
       let temp=height*0.01; 
      let bmi = (weight/(temp * temp));
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi <= 19) {
        setMessage('You are Underweight')
      } else if (bmi >= 19 && bmi < 25) {
        setMessage('You are Normal')
      } 
      else {
        setMessage('You are Overweight')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 19) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 19 && bmi < 25) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }
  return (
    <div className='bg_image'>
    
        <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cms)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
    </div>
  )
}

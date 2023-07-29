import React from 'react';
import './GlowButton.css'

const GlowButton = () => {

  const updateMouseMovement = (e) => {
    for(const button of document.getElementsByClassName("button")) {
      const rect = button.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      (button as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (button as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return(
 <>
  <div className='button' onMouseMove={(e)=>updateMouseMovement(e)}>
   <button className='button-content'>
    <span>Click me!</span>
    </button>
  </div>
 </>
  )
};

export default GlowButton;

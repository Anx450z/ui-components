import React from 'react';
import './GlowCard.css';

const GlowCard = () => {
  const updateMouseMovement = e => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return <>
  <div className='card' onMouseMove={e => updateMouseMovement(e)}>
    <div className='card-content'>
      this
    </div>
  </div>
 </>;
};

export default GlowCard;

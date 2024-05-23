import React from 'react';
import './Briefin.css';

const Briefin = () => {
    

  return (
    <div className='BriefingContainer'>
        <div className='BriefingHeader'>
            <h1>Briefing name</h1>
        </div>
        <div className='BriefingContent'>
            <p>Briefing description </p>  
        </div>
        <div className='BriefingState'>
        <h2>Briefing state</h2>
        </div>
    </div>
  );
}
export default Briefin;
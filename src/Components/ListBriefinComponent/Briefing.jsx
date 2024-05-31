import { useState, useEffect } from 'react';
import './Briefin.css';
import { Link } from 'react-router-dom';

const Briefing = () => {
    
  const [briefings, setBriefings] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/briefins');
        const data = await response.json();
        setBriefings(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='BriefingsListContainer'>
        {briefings.map(briefing => (
          <div key={briefing.id} className='BriefingContainer'>
            <div className='BriefingHeader'>
                <h1>{briefing.nome}</h1>
            </div>
            <div className='BriefingContent'>
                <p>{briefing.descricao}</p>
            </div>
            <div className='BriefingState'>
                <h2>{briefing.estado}</h2>
            </div>
            <div className='BriefingEditButton'>
              <button>
                <Link to={`/edit/${briefing.id}`}>
                  <i className="bi bi-pen"></i>
                </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
);
}
export default Briefing;
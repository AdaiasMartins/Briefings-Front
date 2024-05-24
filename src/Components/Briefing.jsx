import './Briefin.css';

const Briefing = () => {
    

  return (
  <div className='BriefingContainer'>

    <div className='BriefingHeader'>
        <h1>Briefing name</h1>
    </div>
    <div className='BriefingContent'>
        <p>Esta é uma descrição de exemplo para testar o alinhamento do texto</p>
    </div>
    <div className='BriefingState'>
        <h2>Briefing state</h2>
    </div>
    <div className='BriefingEditButton'>
      <button>
        <i className="bi bi-pen"></i>
      </button>
    </div>
  </div>

  );
}
export default Briefing;
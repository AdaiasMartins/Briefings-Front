
import { Link } from 'react-router-dom';
import './App.css'
import AppRoutes from './Routes';

function App() {

  return (
    <>
      <div className='App'>
        <header>
          <h1>Gestor de Briefings</h1>
        </header>
        <AppRoutes/>
      </div>
    </>
  )
}

export default App;

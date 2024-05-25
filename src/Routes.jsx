import Briefing from "./Components/ListBriefinComponent/Briefing"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Briefing />} />
            </Routes>
        </Router>
    )
}
export default AppRoutes;
import EditBriefing from "./Components/EditBriefingsComponent/EditBriefing.jsx";
import Briefing from "./Components/ListBriefinComponent/Briefing"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Briefing />} />
                <Route path="/edit" element={<EditBriefing />} />
            </Routes>
        </Router>
    )
}
export default AppRoutes;
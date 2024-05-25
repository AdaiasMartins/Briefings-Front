import React from "react";
import briefings from "./Components/BriefingsListComponent/Briefing";

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={briefings} />
        </Switch>
    );
    }
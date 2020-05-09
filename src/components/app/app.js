import React from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const App =()=>{
    return(
        <ErrorBoundry>
        <div>Hello</div>
            <ErrorIndicator/>
            <Spinner/>
        </ErrorBoundry>
    )
};
export default App;
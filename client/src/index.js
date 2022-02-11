import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// // You can choose your kind of history here (e.g. browserHistory)
// import { Router, hashHistory as history } from 'react-router';
// import routes from './routes';

// ReactDOM.render(
//   <Router routes={routes} history={history} />,
//   document.getElementById('your-app')
// );

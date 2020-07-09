import React from "react";
import ReactDOM from "react-dom";
import "shared/styles/global-styles.css";
import RootRoutes from "./root-routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<RootRoutes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

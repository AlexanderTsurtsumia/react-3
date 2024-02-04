import React from "react";
import  ReactDOM  from "react-dom/client";
import Functional from "./Functional";


class App extends React.Component {
    render() {
        return (
            <Functional />
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)
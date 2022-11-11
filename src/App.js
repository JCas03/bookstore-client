import React from "react";
import axios from "axios";
import baseUrl from './config'

const App = () => {

    axios.get(`${baseUrl}/api/v1/books`).then(books => {
        console.log(books);
    });

    return <div>React App</div>;
};


export default App;
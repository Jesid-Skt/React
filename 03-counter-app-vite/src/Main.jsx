import React from 'react';
import ReactDom from 'react-dom/client';
import {Feliz, FirstApp} from './FirstApp.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Feliz />
        <FirstApp/>
    </React.StrictMode>
);


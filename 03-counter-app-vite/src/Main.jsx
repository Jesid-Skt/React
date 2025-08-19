import React from 'react';
import ReactDom from 'react-dom/client';
import { CounterApp } from './counterApp'; // Assuming PrimeraApp is a named export from PrimeraApp.js

import './styles.css'; // Assuming you have a styles.css file for styles

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <CounterApp value={'10'} />
    </React.StrictMode>
);
    

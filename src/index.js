
import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Store from './components/Store/Store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}else if(process.env.NODE_ENV === 'development'){
    console.log('Development Mode');
} 

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));




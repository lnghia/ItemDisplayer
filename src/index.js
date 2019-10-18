import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

// for(let i=0; i<Data.length; ++i){
//     ReactDOM.render(
//         <ItemDisplayer link={Data[i].link} image={Data[i].image} name={Data[i].name} price={Data[i].price} />,
//         document.getElementById('root')
//     );
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')  
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

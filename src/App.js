import React from 'react';
import Data from './Untitled-1.json';
import './ItemDisplayer';
import ItemDisplayer from './ItemDisplayer';
import './App.css'

function App(){
    return(
        <div className="app">
            <ItemDisplayer item={Data[0]} />
            <ItemDisplayer item={Data[1]} />
            <ItemDisplayer item={Data[2]} />
            <ItemDisplayer item={Data[3]} />
            <ItemDisplayer item={Data[4]} />
        </div>
    );
}

export default App;
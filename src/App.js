import React from 'react';
import Data from './Untitled-1.json';
import './ItemDisplayer';
import ItemDisplayer from './ItemDisplayer';
import './App.css'

function App(){
    let items=[];

    for(let i of Data){
        items.push(<ItemDisplayer item={i} />);
    }

    return(
        <div className="app">
            {/* <ItemDisplayer item={Data[0]} />
            <ItemDisplayer item={Data[1]} />
            <ItemDisplayer item={Data[2]} />
            <ItemDisplayer item={Data[3]} />
            <ItemDisplayer item={Data[4]} /> */}
            {items}
        </div>
    );
}

export default App;
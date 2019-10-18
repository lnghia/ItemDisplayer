import React from 'react';
import './ItemDisplayer.css';
import './ItemImage.css';
import './Title.css';

class ItemDisplayer extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props.item.link);
        return(
            <a href = { this.props.item.link } className = "ItemDisplayer" >
                <div>
                    <img src={this.props.item.image} alt={this.props.item.name} className="ItemImage" />
                </div>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.price}</p>     
            </a >
        );
    }
}



export default ItemDisplayer;
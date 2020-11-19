import React, { Component } from "react";
import './ShopItem.css';

export default class ShopItem extends Component{
    render() {
        const { name, price, color, img } = this.props.item;

        return <div className="item">
            <img src={img} alt={name}/>
            <div>{name}</div>
            <div>{color}</div>
            <div>${price}</div>
            <button>Add to cart</button>
        </div>
    }
}

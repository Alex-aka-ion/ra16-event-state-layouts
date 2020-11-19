import React, { Component } from "react";
import './ShopCard.css';

export default class ShopCard extends Component{
    render() {
        const { name, price, color, img } = this.props.card;

        return <div className="card">
            <div>{name}</div>
            <div>{color}</div>
            <img src={img} alt={name}/>
            <div>
                <div>${price}</div>
                <button>Add to cart</button>
            </div>
        </div>
    }
}

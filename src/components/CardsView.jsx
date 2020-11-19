import React, { Component } from "react";
import ShopCard from "./ShopCard";
import './CardsView.css';

class CardsView extends Component{
    render () {
        return <div className="cardsView">
            {this.props.cards.map((card, index) => <ShopCard key={index} card={card}/>)}
        </div>
    }
}

export default CardsView;

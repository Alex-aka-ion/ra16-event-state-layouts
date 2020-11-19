import React, { Component } from "react";
import ShopItem from "./ShopItem";

class ListView extends Component {
    render () {
        return <div className="listView">
            {this.props.items.map((item, index) => <ShopItem key={index} item={item}/>)}
        </div>
    }
}

export default ListView;

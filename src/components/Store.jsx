import React, {Component} from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";
import './Store.css';

class Store extends Component {
    state = {
        icon: "view_list"
    }

    products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    onSwitch = (e) => {
        console.log(this.state.icon);
        this.setState((state) => this.state.icon === 'view_list' ? {icon: 'view_module'} : {icon: 'view_list'});
    }

    render() {
        return <div className="wrapper">
            <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch}/>
            {this.state.icon === 'view_module' ?
                <ListView items={this.products}/>
            :
                <CardsView cards={this.products}/>
            }
        </div>
    }
}

export default Store;

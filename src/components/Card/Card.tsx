import React,{Component} from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const img_route = "https://backendapi.turing.com/images/products/";

// info del producto
interface Card {
    name: string;
    product_id: number;
    discounted_price: number | null;
    description: string;
    thumbnail: string;
    price: number;
}

const Card = function ({ name, product_id, discounted_price, description, thumbnail, price }: Card) {

    // si el valor del producto es cero, no lo va a mostrar

    if (discounted_price && discounted_price <= 0) discounted_price = null;

    return (

        <div className="card col-4">
            <div className={name}>
                <img src={`${img_route}${thumbnail}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h1 className="card-title">{price}</h1>
                    <p className="card-text">{description}</p>
                    <Link className="btn btn-primary" to={`/store/product/${product_id}`}>See more</Link>
                </div>

            </div>
        </div>

    );
}

export default Card;
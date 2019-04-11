
import React, { Component } from 'react';
import './App.scss';

import storage from '../../storage/storage';
import Card from '../Card/Card';
import { BrowserRouter } from 'react-router-dom';

storage.getDerpartments();
storage.getProducts();

console.log(storage.products);
//map es como un for para pintar.. por cada cosa que encuentre llama al componente y lo pinta
class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="App row">
                {storage.products && storage.products.map((products) => {
                  return (
                    <Card
                      name={products.name}
                      product_id={products.product_id}
                      discounted_price={products.discounted_price}
                      description={products.description}
                      thumbnail={products.thumbnail}
                      price={products.price}
                    ></Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

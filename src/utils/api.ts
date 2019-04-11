import { departmentsArray, categoriesArray, productsArray } from '../storage/storage';

const apiRoot = 'https://backendapi.turing.com';

function getDepartments(callback: (result: departmentsArray) => void){
    fetch(`${apiRoot}/departments`)
    .then((rawInfo) => {
        return rawInfo.json();
    })
    .then((departments) => {
        callback(departments);
    });
}

function getProducts(callback: (result: productsArray) => void){
    fetch(`${apiRoot}/products`)
    .then((rawInfo)=> {
        return rawInfo.json();
    })
    .then((products)=>{
        callback(products.rows);
    });
}


export default {
    getDepartments,
    getProducts
}
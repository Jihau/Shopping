import {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const initialProducts = [{
    id: 0, name: 'Baklava', count: 1,
}, {
    id: 1, name: 'Cheese', count: 5,
}, {
    id: 2, name: 'Spaghetti', count: 2,
}];

export default function ShoppingCart() {
    const [products, setProducts] = useState(initialProducts)

    const handleIncreaseClick = (productId) => setProducts(products.map(product => {
        return (product.id === productId) ? {...product, count: product.count + 1} : product;
    }))

    const handleDecreaseClick = (productId) => {
        let nextProducts = products.map(product => {
            return (product.id === productId) ? {...product, count: product.count - 1} : product;
        })
        nextProducts = nextProducts.filter(p =>
            p.count > 0
        );
        setProducts(nextProducts)
    }
    return (<ul>
        {products.map(product => (<li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={() => {
                handleIncreaseClick(product.id);
            }}>
                +
            </button>

            <button onClick={() => {
                handleDecreaseClick(product.id);
            }}>
                -
            </button>

        </li>))}
    </ul>);
}
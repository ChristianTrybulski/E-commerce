import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ListItem from "./ListItem/ListItem";
import { getProductsByCategoryPromise } from '../../async-mock/products';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProductsByCategoryPromise(categoryId)
          .then((res) => { setProductList(res); console.log("ProductList", res) })
          .catch(() => console.log('hubo un error, intente mas tarde'))
          .finally(() => setLoading(false));
      }, [categoryId]);

    return (
        <div>
            <h3>{greeting}</h3>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                productList.map(producto => <ListItem producto={producto} key={producto.id}></ListItem>)
            )}
        </div>
    );
}
export default ItemListContainer
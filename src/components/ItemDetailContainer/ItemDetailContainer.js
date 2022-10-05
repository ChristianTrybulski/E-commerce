import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import { getProductByIdPromise } from '../../async-mock/products';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductByIdPromise(id)
          .then((res) => setProduct(res))
          .catch(() => console.log('hubo un error, intente mas tarde'))
          .finally(() => setLoading(false));
      }, [id]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>  
                    <h1>Detalle del producto</h1>
                    <div className="card card-product">
                        <img src={product.imagen} className="card-img-top" alt="imagen"></img>
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">Precio: {product.precio}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ItemDetailContainer
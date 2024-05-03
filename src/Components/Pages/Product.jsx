import React, { useContext } from "react"; 
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Product = () => {
  const { custom_products } = useContext(ShopContext);
  const { productid } = useParams();  
  const product = custom_products.find((e)=> e.id === Number(productid));
    return (
        <div>
          <Breadcrum product={product}/> 
          <ProductDisplay product={product}/>
        </div>
    );
}

export default Product;
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const {products} = useLoaderData();
    return (
        <div className="mt-12">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 ">
           {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
           }
           </div>
        </div>
    );
};

export default Products;
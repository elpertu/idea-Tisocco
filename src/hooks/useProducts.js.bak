import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const [loading , setLoading] =  useState(true);

    useEffect(()=> {

        getProducts()
        .then(()=>setLoading(false))
    }, []);

    const getProducts = async ()=> {
        try {
            const result = await productsAPI
            setProducts(result)
        } catch (error) {
            console.log({error});
            
        }finally {
            console.log("finish productsApi");
        }
    };

    return {
        products,
        loading
    };

};

export default useProducts;
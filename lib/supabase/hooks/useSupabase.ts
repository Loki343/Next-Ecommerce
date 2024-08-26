import { useState, useEffect } from "react";
import { supabase } from "../products";

export const useSupabase = () => {
    //for get all data
    const [products, setProducts] = useState<any>([]);
    const getProducts = async () => {
        let { data, error } = await supabase.from("products").select("*");
        if (data) {
            setProducts(data);
        }
        if (error) {
            console.log(error);
        }
    };
    //for get only query search data
    const [filteredData, setFilteredData] = useState<any>([]);
    const getFilteredData = async (query: string) => {
        let { data, error } = await supabase.from("products").select("*").or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
        if (data) {
            setFilteredData(data);
        }
        if (error) {
            console.log(error);
        }
    };
    //for get single product
    const [singleProduct, setSingleProduct] = useState<any>([]);
    const getSingleProduct = async (id: number) => {
        let { data, error } = await supabase.from("products").select("*").eq('id', id)
        if (data) {
            setSingleProduct(data);
        }
        if (error) {
            console.log(error);
        }
    };

    return {
        products,
        getProducts,
        filteredData,
        getFilteredData,
        singleProduct,
        getSingleProduct
    };
};

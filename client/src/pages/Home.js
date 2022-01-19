import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_PRODUCTS } from "../utils/queries";
import NewProduct from "../components/NewProduct"

const Home = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS)

    return (
        <main>
            <NewProduct />
            <div>========================================================================</div>
            <div>Input product list here</div>
        </main>
    )

}

export default Home;
import React from "react";
import Link from 'next/link';
import ItemList from "./item-list";

const Page = () => {
    return (
        <h1>Shopping List 📝
            <ItemList />
        </h1>
    )
}

export default Page;
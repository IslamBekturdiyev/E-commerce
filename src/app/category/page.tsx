import FilterBar from '@/components/FilterBar'
import Product from '@/components/product';
import { ProductType } from '@/interface';
import React from 'react'

export default async function Category({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined | any }
}) {

    const selectedCategory = searchParams.category;
    const query: any = searchParams.search ? searchParams.search.toLowerCase() : '';
    const min_price = Math.floor(searchParams.min_price);
    const max_price = searchParams.max_price;


    const res = await fetch('https://fakestoreapi.com/products/');
    let products: ProductType[] = await res.json();

    if (selectedCategory) {
        products = products.filter(items => {
            return items.category == selectedCategory;
        })
    } if (query) {
        products = products.filter(items => {
            const lowercased = items.title.toLowerCase();
            return lowercased.includes(query);
        });
    } if (min_price) {
        products = products.filter(items => {
            return items.price > min_price
        })
    } if (max_price) {
        products = products.filter(items => items.price < max_price);
    }

    

    return (
        <div className='container px-5 py-24 mx-auto w-full'>
            <div className='inline-block w-3/12'>
                <FilterBar />
            </div>

            <div className='inline-block w-3/4'>
                <div className="grid grid-cols-1 px-4 gap-y-10 gap-x-6 pb-20 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}


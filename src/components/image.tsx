'use client'

import { ProductType } from "@/interface"
import { FC, useState } from "react"
import Image from "next/image"

interface Props{
    product: ProductType;
    fill?: boolean;
}

const Imager: FC<Props> = ({product, fill}) => {
const [isLoading, setLoading] = useState(true)
  return (
    <>
    {
        fill ? (
            <Image 
                src={product.image} 
                alt={product.title} 
                priority={true}
                sizes="100%"
                fill 
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                    isLoading 
                     ? 'scale-110 blur-2xl grayscale'
                     : 'scale-100 blur-0 grayscale-0'
                }`}
                onLoadingComplete={() => setLoading(false)}
            />
        ): (
            <Image 
            src={product.image} 
            alt={product.title} 
            priority={true}
            sizes=""
            width={300}
            height={400}
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                isLoading 
                 ? 'scale-110 blur-2xl grayscale'
                 : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setLoading(false)}
        />
        )
    }
    </>
    
  )
}

export default Imager
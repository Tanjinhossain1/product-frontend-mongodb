import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cloth').then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl'>This is home</h1>
            <div className='grid grid-cols-3 '>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};
const Product = ({ product }) => {
    const { title, image, description, price } = product;
    return (
        <div className='border p-4 rounded-2xl m-8 hover:shadow-2xl relative h-[600px]'>
            <div className='relative'>
                <img className='w-50 mx-auto relative' width={170} src={image} alt="" />
            </div>
            <div className=' bottom-0 absolute'>
                <h4 className='text-3xl'>Title: {title}</h4>
                <h3 className='text-xl'>Price: {price}</h3>
                <p>Description: {description.slice(0, 100)}</p>
                <div className='flex justify-between'>
                    <button className='border py-3 px-8 bg-red-600 text-white font-semibold rounded-full mb-2 mt-2'>Delete</button>
                    <button  className='border py-3 px-8 bg-green-600 text-white font-semibold rounded-full mb-2 mt-2 mr-4'>Update</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
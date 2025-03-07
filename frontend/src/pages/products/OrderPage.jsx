import React from 'react';
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi';
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

    if (isLoading) return <div className='flex justify-center items-center h-screen text-xl font-sans'>Loading...</div>;
    if (isError) return <div className='flex justify-center items-center h-screen text-xl text-red-500 font-sans'>Error getting orders data</div>;

    return (
        <div className='max-w-4xl mx-auto p-6 font-sans'>
            <h2 className='text-3xl font-bold text-center mb-6'>Your Orders</h2>
            {orders.length === 0 ? (
                <div className='text-center text-gray-600'>No orders found!</div>
            ) : (
                <div className='space-y-6'>
                    {orders.map((order, index) => (
                        <div key={order._id} className='border border-gray-300 shadow-lg rounded-lg p-6 bg-white'>
                            <div className='flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-t-md'>
                                <span className='text-lg font-semibold'>Order #{index + 1}</span>
                                <span className='text-sm'>Order ID: {order._id}</span>
                            </div>
                            <div className='p-4 space-y-2'>
                                <p><span className='font-semibold'>Name:</span> {order.name}</p>
                                <p><span className='font-semibold'>Email:</span> {order.email}</p>
                                <p><span className='font-semibold'>Phone:</span> {order.phone}</p>
                                <p><span className='font-semibold'>Total Price:</span> ${order.totalPrice}</p>
                                <div className='mt-2'>
                                    <h3 className='font-semibold'>Address:</h3>
                                    <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                </div>
                                <div className='mt-2'>
                                    <h3 className='font-semibold'>Products ID:</h3>
                                    <ul className='list-disc list-inside'>
                                        {order.productIds.map((productId) => (
                                            <li key={productId} className='text-gray-700'>{productId}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderPage;

"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const { itemId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await axios.get(`/api/orders`);
                const foundOrder = res.data.data.foods.find(item => item.id == itemId);
                if (foundOrder) {
                    setOrder(foundOrder);
                } else {
                    setError('Menu item not found');
                }
            } catch (err) {
                setError('Failed to fetch menu item details');
                console.error('Error fetching menu item:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [itemId]);

    if (loading) return <div className="p-4">Loading menu item...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!order) return <div className="p-4">No menu item found</div>;

    return (
        <div className="p-4">
            <div className="mb-4">
                <Link href="/menu" className="text-blue-600 hover:underline">
                    ← Back to Menu
                </Link>
            </div>
            
            <div className="border rounded p-4 bg-black">
                <h1 className="text-2xl font-bold mb-2">{order.name}</h1>
                <div className="text-sm text-gray-600 mb-3">
                    {order.category} • {order.type}
                </div>
                <div className="mb-4">
                    <span className="font-medium">₹{order.price}</span>
                    <span className="ml-2 text-gray-500">{order.calories} cal</span>
                </div>
                
                {order.description && (
                    <div className="mb-4 p-3 bg-gray-50 rounded">
                        <h3 className="font-semibold mb-1">Description:</h3>
                        <p className="text-sm">{order.description}</p>
                    </div>
                )}
                
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Page;
"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MenuPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data.data?.foods || []);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading menu items...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="space-y-2">
        {orders && orders.length > 0 ? (
          orders.map(order => (
            <li key={order.id} className="p-2 border rounded hover:bg-gray-50">
              <div className="font-medium">{order.name}</div>
              <div className="text-sm text-gray-600">
                {order.category} • {order.type}
              </div>
              <div className="text-sm">
                <span className="font-medium">₹{order.price}</span>
                <span className="ml-2 text-gray-500">{order.calories} cal</span>
              </div>
            </li>
          ))
        ) : (
          <li>No menu items available</li>
        )}
      </ul>
    </div>
  );
};

export default MenuPage;
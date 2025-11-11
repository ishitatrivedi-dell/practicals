import { FoodMenuData } from "../../data/food";
import { NextResponse } from 'next/server';
import { ordersStore } from '../../../utils/ordersStore';

export async function GET() {
    return NextResponse.json({ data: FoodMenuData });
}

export async function POST(request) {
    try {
        const orderData = await request.json();
        
        // Basic validation
        if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
            return NextResponse.json(
                { error: 'Order must contain at least one item' },
                { status: 400 }
            );
        }

        // Calculate total price from food items
        const total = orderData.items.reduce((sum, item) => {
            const foodItem = FoodMenuData.find(food => food.id === item.id);
            return sum + (foodItem ? foodItem.price * item.quantity : 0);
        }, 0);
        
        const newOrder = { 
            id: Date.now().toString(),
            ...orderData,
            total,
            status: 'pending',
            createdAt: new Date().toISOString() 
        };
        
        // Add order to the shared store
        ordersStore.addOrder(newOrder);
        
        return NextResponse.json(
            { 
                message: 'Order created successfully', 
                order: newOrder 
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json(
            { 
                error: 'Failed to process order',
                details: error.message 
            },
            { status: 500 }
        );
    }
}
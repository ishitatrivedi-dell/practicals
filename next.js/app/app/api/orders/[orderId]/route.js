import { NextResponse } from 'next/server';
import { ordersStore } from '../../../../utils/ordersStore';

export async function GET(request, { params }) {
    try {
        const { orderId } = params;
        
        if (!orderId) {
            return NextResponse.json(
                { error: 'Order ID is required' },
                { status: 400 }
            );
        }

        const order = ordersStore.getOrder(orderId);
        
        if (!order) {
            return NextResponse.json(
                { error: `Order with ID ${orderId} not found` },
                { status: 404 }
            );
        }
        
        return NextResponse.json({ data: order });
    } catch (error) {
        console.error('Error fetching order:', error);
        return NextResponse.json(
            { error: 'Failed to fetch order details', details: error.message },
            { status: 500 }
        );
    }
}

export async function PATCH(request, { params }) {
    try {
        const { orderId } = params;
        const updates = await request.json();
        
        // In a real app, you would update the order in the database here
        // For this example, we'll just return the updates
        
        return NextResponse.json({ 
            message: 'Order updated successfully',
            data: { id: orderId, ...updates }
        });
    } catch (error) {
        console.error('Error updating order:', error);
        return NextResponse.json(
            { error: 'Failed to update order', details: error.message },
            { status: 500 }
        );
    }
}
// In-memory storage for orders
let orders = [];

export const ordersStore = {
    getOrders: () => [...orders],
    getOrder: (id) => orders.find(order => order.id === id),
    addOrder: (order) => {
        const newOrder = { ...order, id: Date.now().toString() };
        orders.push(newOrder);
        return newOrder;
    },
    // For testing/reset purposes
    _clear: () => { orders = []; }
};

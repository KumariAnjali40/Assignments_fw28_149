
const orderService = require('../services/orderService');

exports.placeOrder = async (req, res) => {
    try {
        const order = await orderService.placeOrder(req.user, req.body.products);
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
};


const orderQueue = require('../queues/orderQueue');

exports.placeOrder = async (req, res) => {
    try {
        const order = await orderService.placeOrder(req.user, req.body.products);
        await orderQueue.add('processOrder', { orderId: order._id, userId: req.user, products: req.body.products });
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const orderCancellationQueue = require('../queues/orderCancellationQueue');

exports.cancelOrder = async (req, res) => {
    try {
        const order = await orderService.cancelOrder(req.params.orderId);
        await orderCancellationQueue.add('cancelOrder', { orderId: order._id });
        res.json({ message: 'Order cancellation request successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const Order = require('../models/order');
const Product = require('../models/product');

exports.placeOrder = async (userId, productIds) => {
    const products = await Product.find({ _id: { $in: productIds } });
    const totalAmount = products.reduce((acc, product) => acc + product.price, 0);
    const order = new Order({ user: userId, products, totalAmount });
    return await order.save();
};

exports.getAllOrders = async () => {
    return await Order.find().populate('user').populate('products');
};



exports.processOrder = async (orderId, userId, products) => {
    try {
       
        const order = await Order.findById(orderId).populate('products');
        if (!order) throw new Error('Order not found');
        
        // Update product quantities
        for (const product of order.products) {
            await productService.updateProductQuantity(product._id, product.quantity - 1); 
        }

        // Deduct order amount from user's wallet
        const totalAmount = order.products.reduce((acc, product) => acc + product.price, 0);
        await userService.deductFromWallet(userId, totalAmount);

        return order;
    } catch (error) {
        throw error;
    }
};


exports.cancelOrder = async (orderId) => {
    try {
        const order = await Order.findById(orderId);
        if (!order) throw new Error('Order not found');


        const timeDifference = new Date() - order.createdAt;
        if (timeDifference > 20 * 60 * 1000) {
            throw new Error('Order cannot be canceled after 20 minutes');
        }

        order.status = 'canceled';
        return await order.save();
    } catch (error) {
        throw error;
    }
};

exports.processOrderCancellation = async (orderId) => {
    try {
        const order = await Order.findById(orderId).populate('products');
        if (!order) throw new Error('Order not found');

        for (const product of order.products) {
            await productService.updateProductQuantity(product._id, product.quantity + 1); // Assuming 1 quantity per product
        }

    
        await userService.addToWallet(order.user, order.totalAmount);

        // Update order status to canceled
        order.status = 'canceled';
        await order.save();
    } catch (error) {
        throw error;
    }
};
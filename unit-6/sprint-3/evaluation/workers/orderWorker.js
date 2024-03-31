const { Worker } = require('bullmq');
const Redis = require('ioredis');
const config = require('../config/config');
const orderService = require('../services/orderService');
const productService = require('../services/productService');
const userService = require('../services/userService');

const connection = new Redis(config.redisOptions);

const orderWorker = new Worker('orderQueue', async (job) => {
    const { orderId, userId, products } = job.data;

    try {
        // Process the order
        const order = await orderService.processOrder(orderId, userId, products);
        return order;
    } catch (error) {
        console.error('Error processing order:', error.message);
        throw error;
    }
}, { connection });

orderWorker.on('completed', async (job) => {
    console.log('Order processed successfully:', job.returnvalue);
});

orderWorker.on('failed', (job, error) => {
    console.error('Order processing failed:', error.message);
});
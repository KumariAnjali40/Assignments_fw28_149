const { Worker } = require('bullmq');
const Redis = require('ioredis');
const config = require('../config/config');
const orderService = require('../services/orderService');
const userService = require('../services/userService');

const connection = new Redis(config.redisOptions);

const orderCancellationWorker = new Worker('orderCancellationQueue', async (job) => {
    const { orderId } = job.data;

    try {
        // Process order cancellation
        await orderService.processOrderCancellation(orderId);
    } catch (error) {
        console.error('Error processing order cancellation:', error.message);
        throw error;
    }
}, { connection });

orderCancellationWorker.on('completed', async (job) => {
    console.log('Order cancellation processed successfully');
});

orderCancellationWorker.on('failed', (job, error) => {
    console.error('Order cancellation processing failed:', error.message);
});
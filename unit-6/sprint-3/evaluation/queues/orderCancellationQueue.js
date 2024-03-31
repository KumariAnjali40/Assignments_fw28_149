const { redisOptions } = require('../config/config');
const { Queue } = require('bullmq');
const Redis = require('ioredis');

const redis = new Redis(redisOptions);

const orderCancellationQueue = new Queue('orderCancellationQueue', { connection: redis });

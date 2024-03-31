const {Queue}=require('bullmq');
const Redis=require('ioredis');
const express=require('express');

const app=express();
const connection = new Redis({
    port: 13881,
    host: 'redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com',
    password: 'iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu'
});
const emailQueue = new Queue('emailQueue', { connection });


// Function to add email notification jobs to the queue with advanced features
async function addEmailJob(email, message, options = {}) {
    try {
        const job = await emailQueue.add('sendEmail', { email, message }, options);
        console.log(`Email job added: ${job.id}`);
    } catch (error) {
        console.error(`Error adding email job: ${error.message}`);
    }
}

// 1. Prioritization wala code.
addEmailJob('urgent@example.com', 'Urgent email!', { priority: 1 });

// 2. delay wala code
addEmailJob('future@example.com', 'Email for the future!', { delay: 5000 }); // 5 seconds delay diya hai

// 3. Repeatable jobs for daily digests wala code
addEmailJob('daily@example.com', 'Daily digest email!', { repeat: { cron: '0 0 * * *' }});

// 4. Job dependencies wala code.
const job1 =  addEmailJob('BSaha.com', 'Email with dependency 1');
const job2 =  addEmailJob('Bsaha.com', 'Email with dependency 2', { dependencies: [job1.id] });
const {Queue , Worker}=require('bullmq');
const Redis=require('ioredis');


const connection = new Redis({
    port: 13881,
    host: 'redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com',
    password: 'iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu'

},{
    maxRetriesPerRequest:null
});

const emailWorker = new Worker('emailQueue', async (job) => {
    try {
       
        console.log(`Sending email to ${job.data.email} with message: ${job.data.message}`);
        
    } catch (error) {
       
        console.error(`Error sending email: ${error.message}`);
        throw error; 
    }
}, { connection });


emailWorker.on('completed', (job) => {
    console.log(`Email job for ${job.data.email} completed successfully.`);
});


emailWorker.on('failed', (job, error) => {
    console.error(`Email job for ${job.data.email} failed with error: ${error.message}`);
});

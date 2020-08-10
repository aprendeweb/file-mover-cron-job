const path = require('path');
const CronJob = require('cron').CronJob;
require('dotenv').config({ path: path.join(__dirname, './.env') });
const { job } = require('./job');

let isRunning = false;

const fileMover = new CronJob(process.env.CRON_TIME, async () => {
  if (!isRunning) {
    isRunning = true;
    await job();
    isRunning = false;
  }
});
fileMover.start();

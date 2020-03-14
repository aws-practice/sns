const express = require('express');
const AWS = require('aws-sdk');
const app = express();

const AWS_ACCESS_KEY_ID = '@@@@@@@@@@@@@@@@';
const AWS_SECRET_ACCESS_KEY = '#################################';

AWS.config.update({
    region: '<region>',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});

const checkIfTopicExists = require('./checkIfTopicExists');
const createTopic = require('./createTopic');
const publishToTopic = require('./publishToTopic');

app.get('/', async (req, res) => {
    const ifTopicExists = await checkIfTopicExists(AWS, 'ON_POST_CREATED');

    if (!ifTopicExists) {
        let topicARN = await createTopic(AWS, 'ON_POST_CREATED');
        topicARN = topicARN;
        res.send(topicARN);
    } else {
        res.send(ifTopicExists);
    }
});

app.get('/publish', async (req, res) => {
    const ifTopicExists = await checkIfTopicExists(AWS, 'ON_POST_CREATED');

    if (!ifTopicExists) {
        let messageid = await publishToTopic(
            AWS
        );

        res.send(messageid)
    }
});

app.listen(3004, () => {
    console.log('Server is running in port 3004')
})

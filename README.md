
# to run this project
Steps:
1. Create SNS User > Assign a Group/ Create a Group > Attach FullSNSAccess policy
2. Create a Topic by running the application and hitting '/' endpoint
3. Create a subscription using the topic-arn generated in step 2
5. re-run the application and hit /publish endpoint


- create an SNS user > add it to a group which has Full SNS Access
- capture the ACCESS ID and SECRET

- set AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY constants in app.js1
- change region whatever your reigon is
- below is the code snippet you need to udpate
```const AWS_ACCESS_KEY_ID = 'ID from SNS user creation';
const AWS_SECRET_ACCESS_KEY = 'SESCRET from SNS user creation';

AWS.config.update({
    region: 'your region',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
```


- run the app 'node app.js'
- and hit '/' endpoint in browser, you will see the topic arn both in browser and in console
- capture the arn and put it in publish endpoint
- below is the code snippet you need to update
```file : publishToTopic.js
var params = {
        Message: 'MESSAGE_TEXT', /* required */
        TopicArn: 'topic-arn from console'
      };
```
- now re-run the application and hit the endpoint, you will receive the notification on channel specified in subscription

module.exports = (AWS) => {
    var params = {
        Message: 'MESSAGE_TEXT', /* required */
        TopicArn: 'arn:aws:sns:region:@@@@@@@@@@@@@@@@@@@@@@' // Topic ARN created by hitting '/' endpoint
      };

    return new Promise((resolve, reject) => {
        try {
            const publishToTopic = new AWS.SNS({ apiVersion: '2010-03-31'})
                .publish(params)
                .promise();

                publishToTopic
                .then(data => {
                    console.log(`Message ${params.Message} send sent to the topic ${arn}`);
                    console.log("MessageID is " + data.MessageId);
                })
                .catch(err => {
                    throw err;
                });
        }catch(e) {
            reject(e)
        }
    });
};

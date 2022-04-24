const tableName = process.env.SAMPLE_TABLE;

const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

exports.getAllItemsHandler = async (event) => {

    const method = event.requestContext.http.method

    if (method !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${method}`);
    }


    var params = {
        TableName : tableName
    };
    const data = await docClient.scan(params).promise();
    const items = data.Items;

    const response = {
        statusCode: 200,
        body: JSON.stringify(items),
        headers: {
          'X-Total-Count': items.length}
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}

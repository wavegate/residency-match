import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-2",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = "Specialty-ygjqfaytnjel5j7xzjvm3w7uce-NONE";

const item = {
  acgmeSpecialtyCode: "140",
  name: "Internal Medicine",
  sortType: "Specialty",
};

const addItemToDynamoDB = async (item) => {
  const params = {
    TableName: tableName,
    Item: item,
  };

  try {
    await dynamodb.put(params).promise();
    console.log("Item successfully added:", item);
  } catch (error) {
    console.error("Error adding item to DynamoDB:", error);
  }
};

addItemToDynamoDB(item);

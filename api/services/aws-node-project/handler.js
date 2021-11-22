//'use strict';

//import s3 from "../../libs/s3-lib";

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.uploadToS3 = async (event) => {
  console.log("Event:", event);
  const body = JSON.parse(event.body);
  console.log(body);
  const { repository } = body;

  const repo = repository.name;

  const params = {
    Bucket: "github-webhook-branch-name",
    Body: repo,
    Key: "repo-1",
  };

  try {
    await s3.upload(params).promise();
    return "Success";
  } catch (e) {
    console.log("Error Message:", e.message);
    return "Failure";
  }
};

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

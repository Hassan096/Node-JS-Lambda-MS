import AWS, { S3 } from "aws-sdk";

const s3 = new AWS.S3();

export default {
  upload: (params) => s3.upload(params).promise(),
};

'use strict';


const s3ApiCalls = require('aws-sdk/apis/s3-2006-03-01.min.json');
const sqsApiCalls = require('aws-sdk/apis/sqs-2012-11-05.min.json');
const cftApiCalls = require('aws-sdk/apis/cloudformation-2010-05-15.min.json');
const ec2ApiCalls = require('aws-sdk/apis/ec2-2016-11-15.min.json');


function printApiCalls(serviceApis){
  console.log(serviceApis.metadata.serviceFullName);
  Object.keys(serviceApis.operations).forEach(function(operationName) {
    console.log(`   -${operationName}`);  
  }, this);
}

printApiCalls(s3ApiCalls);
printApiCalls(sqsApiCalls);
printApiCalls(cftApiCalls);
printApiCalls(ec2ApiCalls);
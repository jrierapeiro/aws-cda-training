#!/bin/bash

# Region - Ireland
REGION='eu-west-1'
BUCKET_1=$1
BUCKET_2=$2


# create bucket
aws s3 mb s3://$BUCKET_1 --region $REGION
aws s3 mb s3://$BUCKET_2 --region $REGION




# list buckets
aws s3 ls --region $REGION

# list prefixes in a bucket 
aws s3 ls s3://$BUCKET_1

# clean up

# remove empty bucket
aws s3 rb s3://$BUCKET_1 --region $REGION

# force remove non empty bucket
aws s3 rb s3://$BUCKET_2 --force --region $REGION


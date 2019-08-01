aws s3 cp ./Dockerrun.aws.json \
  s3://elasticbeanstalk-us-east-1-124429370407/beparty/Dockerrun.aws.json

aws elasticbeanstalk create-application-version \
  --application-name "beparty" \
  --version-label ebparty \
  --source-bundle S3Bucket="elasticbeanstalk-us-east-1-124429370407",S3Key="beparty/Dockerrun.aws.json" \
  --auto-create-application

aws elasticbeanstalk update-environment \
  --application-name "beparty" \
  --environment-name "beparty-env" \
  --version-label beparty

function resetProperties() {
  PropertiesService.getDocumentProperties().setProperties({
    bucketName: "",
    path: "",
    file_format: "",
     awsAccessKeyId: "",
    awsSecretKey: "",
  });
}

function test() {
  Logger.log(PropertiesService.getDocumentProperties().getProperties());
}
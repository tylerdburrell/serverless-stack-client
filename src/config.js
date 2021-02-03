const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-file-uploads-4545",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://3z5ao5pw46.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_auLAVoI3P",
      APP_CLIENT_ID: "6n3fg12d4aikmfn8rbgi2kd58s",
      IDENTITY_POOL_ID: "us-east-2:b6b69241-e8a5-4d75-8d40-9af5dfe7ae42",
    },
  };
  
  export default config;
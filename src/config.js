const dev = {
  STRIPE_KEY: "pk_test_51IDDYFDccUIzTx86bbGsTb9nLKEp0VPhS4M1BNYtDrumKj6mh2QR3Ox7WbPC8f73VkTHHttLeXBmkdnzCIYLJeZ300p3YtSqyj",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-file-uploads-4545",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://dcscwhssl4.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_6xg9eKvpd",
      APP_CLIENT_ID: "556velh262b02fbuhbv93t72bo",
      IDENTITY_POOL_ID: "us-east-2:35d6b450-c84a-4776-a2b4-c19e148622cb",
    }
  };

const prod = {
  STRIPE_KEY: "pk_test_51IDDYFDccUIzTx86bbGsTb9nLKEp0VPhS4M1BNYtDrumKj6mh2QR3Ox7WbPC8f73VkTHHttLeXBmkdnzCIYLJeZ300p3YtSqyj",
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
      USER_POOL_ID: "us-east-2_pHDmEJuAJ",
      APP_CLIENT_ID: "1kaf8ui4nt1gusdfekl10s2np",
      IDENTITY_POOL_ID: "us-east-2:d07ba6cc-51df-41c5-afd8-a97e3d9f869a",
    }
  };
  

  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;
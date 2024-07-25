import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

// const identity =
//   process.env.NODE_ENV === "production"
//     ? `${process.env.COGNITO_IDENTITY_POOL_ID_PRODUCTION}`
//     : `${process.env.COGNITO_IDENTITY_POOL_ID_STAGING}`;

export const ddbClient = new DynamoDBClient({
  region: "ap-southeast-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "ap-southeast-1" },
    identityPoolId: `${process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID_STAGING}`,
  }),
});

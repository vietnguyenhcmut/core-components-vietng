import { PubSub } from "@aws-amplify/pubsub";

export const pubsub = new PubSub({
  region: "ap-southeast-1",
  endpoint: `${process.env.PUBSUB_MQTT_BROKER_ENDPOINT}`,
});

import * as PushAPI from "@pushprotocol/restapi";

import useWeb3 from "./useWeb3";
export default async function PushNotifications() {
  const { userAccount, Moralis, isWeb3Enabled, web3 } = useWeb3();
  const provider = Moralis.enableWeb3();
  const _signer = new provider.getSigner();
  // subscibe user to the DAO channel
  async function enableSubscription(channelAddress) {
    await PushAPI.channels.subscribe({
      signer: _signer,
      channelAddress: `eip155:5:${channelAddress}`, // channel address in CAIP
      userAddress: `eip155:5:${userAccount}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  }
  //get notifications for users
  const getNotifications = await PushAPI.user.getFeeds({
    user: `eip155:42:${userAccount}`,
    env: "staging",
  });
  //send notification to track the DAO's proposals progress
  async function sendNotification(channelAddress, notificationContent) {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `DatAgent DAO notification TITLE:`,
        body: `DatAgent DAO notification BODY`,
      },
      payload: {
        title: `DatAgent DAO payload title`,
        body: notificationContent,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${userAccount}`, // recipient address
      channel: `eip155:5:${channelAddress}`, // your channel address
      env: "staging",
    });
    return { apiResponse };
  }
  return { getNotifications, sendNotification, enableSubscription };
}

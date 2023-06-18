import Beryx from "@zondax/beryx";
const jwt = process.env.ZONDAX_JWT_TOKEN;
const client = new Beryx.Filecoin({ jwt, network: "mainnet" });

async function getTransactionInfo() {
  const response1 = await client.data.getTipset(1);
  const response2 = await client.tools.convertHash(
    "bafy2bzacedl33v7jst5b52byccfyz25gjeg2eux4h7d43aiota6td5xcbzrtw",
    "fil"
  );
}
// getTransactionInfo();
export default getTransactionInfo;

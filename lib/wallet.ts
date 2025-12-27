import { ethers } from "ethers";

export async function getProvider() {
  if (!window.ethereum) {
    throw new Error("No wallet found");
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  return provider;
}

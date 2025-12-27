import { BrowserProvider } from "ethers";

export async function getProvider() {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No wallet found");
  }

  const provider = new BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  return provider;
}

import { ethers } from "ethers";
import {
  VAULT_ADDRESS,
  USDC_ADDRESS,
  VAULT_ABI,
  ERC20_ABI
} from "./constants";

export function getVault(signer: ethers.Signer) {
  return new ethers.Contract(VAULT_ADDRESS, VAULT_ABI, signer);
}

export function getUSDC(signer: ethers.Signer) {
  return new ethers.Contract(USDC_ADDRESS, ERC20_ABI, signer);
}

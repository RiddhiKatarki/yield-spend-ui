export const VAULT_ADDRESS = "0xYOUR_VAULT_ADDRESS";

export const USDC_ADDRESS =
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";

export const VAULT_ABI = [
  "function deposit(uint256)",
  "function pay(address,uint256)",
  "function withdraw(uint256)",
  "function spendableBalance() view returns (uint256)",
  "function authorized(address) view returns (bool)"
];

export const ERC20_ABI = [
  "function approve(address,uint256)",
  "function allowance(address,address) view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

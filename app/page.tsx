"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { getProvider } from "@/lib/wallet";
import { getVault, getUSDC } from "@/lib/contracts";

export default function Home() {
  const [signer, setSigner] = useState<any>();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  async function connect() {
    const provider = await getProvider();
    const s = provider.getSigner();
    setSigner(s);
    setAddress(await s.getAddress());
  }

  async function approve() {
    const usdc = getUSDC(signer);
    await usdc.approve(
      getVault(signer).address,
      ethers.MaxUint256
    );
  }

  async function deposit() {
    await getVault(signer).deposit(Number(amount) * 1e6);
  }

  async function pay() {
    await getVault(signer).pay(recipient, Number(amount) * 1e6);
  }

  async function withdraw() {
    await getVault(signer).withdraw(Number(amount) * 1e6);
  }

  return (
    <main className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Yield Spend Vault</h1>

      {!address && (
        <button onClick={connect} className="btn">
          Connect Wallet
        </button>
      )}

      {address && (
        <>
          <p className="text-sm break-all">{address}</p>

          <input
            placeholder="Amount (USDC)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border"
          />

          <button onClick={approve} className="btn w-full">
            Approve USDC
          </button>

          <button onClick={deposit} className="btn w-full">
            Deposit
          </button>

          <input
            placeholder="Recipient address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 border"
          />

          <button onClick={pay} className="btn w-full">
            Pay
          </button>

          <button onClick={withdraw} className="btn w-full">
            Withdraw
          </button>
        </>
      )}
    </main>
  );
}

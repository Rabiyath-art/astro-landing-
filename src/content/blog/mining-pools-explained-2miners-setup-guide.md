---
title: "Mining Pools Explained: 2Miners Setup Guide"
description: "Learn what a crypto mining pool is, why it matters, and how to set up a mining pool using 2Miners with LazyPickaxe."
category: "how"
pubDate: 'Nov 01 2023'
heroImage: '../../assets/blog/mining-pool.webp'
---

## What Is a Mining Pool?

A **mining pool** is a group of miners who combine their computing power (hashrate) to secure the network and find blocks and earn rewards more consistently. <br> Instead of mining alone and waiting a long time for a reward, miners in a pool:

- Pool hashrate  
- Work together to find blocks  
- Receive **smaller but more frequent payouts**

Mining pools are ideal for beginners and professional miners alike.

## How a Mining Pool Works

How multiple miners combine hashrate through a mining pool to submit blocks to the blockchain.

 <img
    src="/assets/pool-working-flow.webp"
    alt="How a mining pool works connecting miners to the blockchain"
    class="rounded-xl w-full"
  />

## Why You Need a Mining Pool

When you are allocated hashrate on LazyPickaxe, your mining power must be connected to a pool.<br>

LazyPickaxe supports **custom pool configuration**

**Recommended Pool: 2Miners**

**2Miners** is a popular and beginner-friendly mining pool that supports multiple algorithms and coins.

<a href="https://2miners.com" target="_blank" rel="noopener noreferrer" class="miners-link block mb-4">
  🌐 Official website: https://2miners.com
</a>

## Step-by-Step: How to Set Up a Pool Using 2Miners

### Step 1: Choose Your Coin & Algorithm

1. Visit 👉 https://2miners.com
2. Select the coin you want to mine  
   (Example: Bitcoin, Litecoin, Kaspa, etc.)
3. Note the **algorithm** used by the coin

Make sure the algorithm matches your LazyPickaxe allocation.

### Step 2: Copy the Pool URL

1. Each coin on 2Miners provides a pool connection URL.
2. Example format: kas.2miners.com:2020
3. Choose the EU server better stability and ping

### Step 3: Prepare Your Wallet Address

You need a wallet address to receive mining rewards.

- Use a supported wallet (e.g. Exodus)
- Make sure the wallet matches the selected coin
- Copy your wallet address

💡 On 2Miners, the **wallet address is usually used as the worker name**.

### Step 4: Add Pool Details on LazyPickaxe

1. Log in to your **LazyPickaxe** account  
2. Go to **Allocation**  
3. Open **Completed Rentals**
4. Click **Configure Pool**

You will be redirected to the **Pools** page.

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-6"> 
   <img src="/assets/pool/configure-pool.webp" alt="Login to LazyPickaxe account" class="rounded-xl w-full border" /> 
   <img src="/assets/pool/add-pool.webp" alt="Go to allocation page" class="rounded-xl w-full border" /> 
   <img src="/assets/pool/add-pool-popup.webp" alt="Open completed rentals" class="rounded-xl w-full border" /> 
   <img src="/assets/pool/pool-added.webp" alt="Click configure pool" class="rounded-xl w-full border" /> 
</div>

### Step 5: Add a New Pool

1. Click **Add Pool**
2. Enter the details copied from 2Miners:

| Field               | Value                               | Example                |
| ------------------- | ------------------------------------| -----------------------|
| **Algorithm**       | Select the correct algorithm        | Kheavyhash             |
| **Pool URL : Port** | From 2Miners                        | kas.2miners.com:2020   |
| **Worker Name**     | Your wallet address                 | Kaspa                  |
| **Password**        | x                                   | x                      |

1. Save the pool

Your pool will now be available for future allocations.

### Step 6: Start Mining

1. Go to **Algorithms**
2. Select your preferred algorithm
3. Choose the pool you added from the pool list
4. Complete payment and confirm
5. Click **Start Mining**
   
LazyPickaxe will automatically connect your allocation to the selected 2Miners pool.

## Track Your Mining Performance

After clicking **Start Mining**, you can monitor the hashrate from the **Allocation** page.

You can view mining statistics and rewards directly on 2Miners:

1. Go to https://2miners.com  
2. Open the same coin page  
3. Paste your **wallet address** into the search bar  

You can view:
- Current hashrate  
- Worker status  
- Shares submitted  
- Payout progress  

⏳ Pool statistics may take a few minutes to update.

## Important Notes

- Hashrate fluctuations are normal  
- Pool dashboards may update with a short delay  
- Rewards are paid **directly by the pool** to your wallet  
- LazyPickaxe does not hold mining rewards  
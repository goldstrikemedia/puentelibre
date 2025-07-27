
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function PirateGuideEN() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ STEP 3: How to Swap Monero to Pirate Chain</h1>
      <p>Buy ARRR on <strong>CoinEx</strong>.</p>
      <ol>
        <li>Create account on <a href={affiliates.coinex}>CoinEx</a>.</li>
        <li>Deposit BTC or XMR.</li>
        <li>Buy ARRR & send to your private wallet.</li>
      </ol>
    </main>
  )
}

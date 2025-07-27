
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function MoneroGuideEN() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ STEP 2: How to Swap Bitcoin to Monero</h1>
      <p>Swap BTC to XMR privately with <strong>FixedFloat</strong> or <strong>SimpleSwap</strong>.</p>
      <ol>
        <li>Go to <a href={affiliates.fixedfloat}>FixedFloat</a></li>
        <li>Or use <a href={affiliates.simpleswap}>SimpleSwap</a> (easy for beginners).</li>
      </ol>
    </main>
  )
}

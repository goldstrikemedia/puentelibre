
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function BTCGuideEN() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ STEP 1: How to Buy Bitcoin</h1>
      <p>Use ATMs like <strong>GetCoins</strong> to buy Bitcoin fast and easy.</p>
      <ol>
        <li>Find an ATM: <a href={affiliates.getcoins}>GetCoins Locator</a></li>
        <li>Scan your Bitcoin wallet QR.</li>
        <li>Insert cash & confirm.</li>
      </ol>
    </main>
  )
}

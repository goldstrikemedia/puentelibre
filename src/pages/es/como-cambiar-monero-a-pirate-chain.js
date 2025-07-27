
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function PirateGuide() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ PASO 3: Cómo Cambiar Monero a Pirate Chain</h1>
      <p>Compra ARRR en <strong>CoinEx</strong>.</p>
      <ol>
        <li>Crea cuenta en <a href={affiliates.coinex}>CoinEx</a>.</li>
        <li>Deposita BTC o XMR.</li>
        <li>Compra ARRR y envíalo a tu wallet privada.</li>
      </ol>
    </main>
  )
}

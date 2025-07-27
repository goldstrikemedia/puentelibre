
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function MoneroGuide() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ PASO 2: Cómo Convertir Bitcoin a Monero</h1>
      <p>Convierte BTC a XMR de forma privada con <strong>FixedFloat</strong> o <strong>SimpleSwap</strong>.</p>
      <ol>
        <li>Ve a <a href={affiliates.fixedfloat}>FixedFloat</a></li>
        <li>O usa <a href={affiliates.simpleswap}>SimpleSwap</a> (fácil para principiantes).</li>
      </ol>
    </main>
  )
}

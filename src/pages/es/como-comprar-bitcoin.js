
import * as React from "react"
import affiliates from "../../config/affiliate.json"

export default function BTCGuide() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd"}>✅ PASO 1: Cómo Comprar Bitcoin</h1>
      <p>Usa ATMs como <strong>GetCoins</strong> para comprar Bitcoin fácil y rápido.</p>
      <ol>
        <li>Encuentra un ATM: <a href={affiliates.getcoins}>GetCoins Locator</a></li>
        <li>Escanea tu wallet Bitcoin.</li>
        <li>Inserta el efectivo y confirma.</li>
      </ol>
    </main>
  )
}

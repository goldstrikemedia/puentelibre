
import * as React from "react"

export default function IndexPage() {
  return (
    <main style={{{"fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem', lineHeight: '1.6'"}}}>
      <h1 style={color:"#0d6efd",fontWeight:"bold"}>Puente Libre</h1>
      <p><strong>Envía dinero de forma privada y segura</strong> usando Bitcoin, Monero y Pirate Chain.</p>
      <h2>✅ PASOS:</h2>
      <ol>
        <li><a href="/es/como-comprar-bitcoin">Compra Bitcoin</a></li>
        <li><a href="/es/como-convertir-bitcoin-a-monero">Cambia a Monero</a></li>
        <li><a href="/es/como-cambiar-monero-a-pirate-chain">Cambia a Pirate Chain</a></li>
      </ol>
      <p><a href="/en">Switch to English</a></p>
    </main>
  )
}

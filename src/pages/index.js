
import * as React from "react"
import { Helmet } from "react-helmet"

export default function IndexPage() {
  return (
    <main style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem"}}>
      <Helmet>
        <title>Puente Libre - Envía dinero privado</title>
      </Helmet>
      <h1 style={{color: "#0d6efd"}}>Puente Libre</h1>
      <p><strong>Aprende a enviar dinero de forma privada y segura</strong> usando Monero y Pirate Chain.</p>
      <ul>
        <li><a href="/monero">Guía: Monero</a></li>
        <li><a href="/piratechain">Guía: Pirate Chain</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </main>
  )
}

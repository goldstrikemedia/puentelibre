
import * as React from "react"
import { Link } from "gatsby"

export default function BlogIndex() {
  return (
    <main style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem"}}>
      <h1>Blog</h1>
      <ul>
        <li><Link to="/blog/como-enviar-criptomonedas-anonimamente">Cómo enviar criptomonedas anónimamente</Link></li>
      </ul>
    </main>
  )
}

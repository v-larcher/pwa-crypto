import React from "react"
import "./App.css"
import Header from "./Header/Header"

function App() {
  const coinsID: Array<string> = ["btc-bitcoin", "eth-ethereum", "usdt-tether", "dot-polkadot"]

  return (
    <div className="App">
      <Header coinsID={coinsID} />
    </div>
  )
}

export default App

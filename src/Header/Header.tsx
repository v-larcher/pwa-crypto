import React, { Component } from "react"

type IProps = {
  coinsID: Array<string>
}

type IState = {
  coins: Array<ICoin>
  items: Array<any>
}

type ICoin = {
  name: string
  symbol: string
}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      coins: [],
      items: [],
    }
  }

  componentDidMount() {
    this.props.coinsID.forEach((id) => {
      fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
        .then((response) => response.json())
        .then((r) => {
          this.state.coins.push({ name: r.name, symbol: r.symbol })
          this.setState({ items: [...this.state.items, r.name] })
        })
    })
  }

  render() {
    const items: Array<any> = []

    this.state.items.forEach((item, index) => {
      items.push(<li key={index}>{item}</li>)
    })

    return (
      <header>
        <ul>{items}</ul>
      </header>
    )
  }
}

export default Header

import React, { Component } from 'react'
import portrate from './ronswanson.jpg'

export default class Header extends Component {
  render() {
    return (
      <section className='Header'>
        <h1>Ron's Steakhouse</h1>
        <img src={portrate} alt='Ron' height="150" width="auto" />
        <p><em>Home of excellent steak</em></p>
      </section>
    )
  }
}

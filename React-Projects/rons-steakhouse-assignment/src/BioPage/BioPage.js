import React, { Component } from 'react'
import portrate2 from './ron-swanson-food.jpg'
import './BioPage.css'

export default class AboutPage extends Component {
  render() {
    return (
      <section className='BioPage'>
        <img src={portrate2} alt='Ron eating steak' height="250" width="auto" />
        <h2>About Ron's Life</h2>
        <p>
          Ron was born to Tamara Swanson and was delivered by his future wife, also known as Tammy 1, a candy striper at the hospital. Ron's birthday has long been a secret kept between him and the people at Baskin-Robbins.
          He cried for the first time when he was 7 when he was hit by a school bus.
        </p>
        <p>
          When Ron was 9 he began work in a sheet metal factory and within two weeks, he was running the floor.
          When he was 11 he was offered a job at the Tannery where he could work with leather, a dream he always had. He tried to do both as well as finish Middle School but he eventually realized he could only do one thing at a time.
          Ron attended prom when he was 12 and (while he enjoyed himself) felt it was unnecessary to go to another one.
          When college came around, his dad, feeling that college wasn't important, dropped Ron off at a metal factory. However, Ron hitchhiked and went to college anyway, where he learned a lot about life.
        </p>
        <p>
          He has four brothers, one of whom is in the Air Force and another shot him in the foot with a nail gun when they were little. His brother's names are Don, Bob, Vaughn, and Lon Swanson, Lon being named after his uncle Lon.
        </p>
        <p>
          Ron opened Ron's Steakhouse in the summer of 2019.
        </p>
      </section>
    )
  }
}

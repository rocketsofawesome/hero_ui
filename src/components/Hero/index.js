import React from 'react'
import PropTypes from 'prop-types'
import './hero.css'

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <h3 className='hero-title'>
        {hero.alias} <br />
        <small>{hero.affiliation}</small>
      </h3>
      {
        hero.superpowers.map((superpower, index) => {
          return <span className='superpower' key={index}>{superpower}</span>
        })
      }
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero

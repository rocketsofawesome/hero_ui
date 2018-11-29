import React from 'react'
import PropTypes from 'prop-types'

const Hero = (hero) => {
  return(
    <div>
      <h1>{ hero.hero.alias }</h1>
      <span>{ hero.hero.affiliation }</span>
      <div>
      { hero.hero.superpowers.map((item) => {
        return(
          <span>{ item.description }<br /></span>
        );
      }) }
      </div>
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero

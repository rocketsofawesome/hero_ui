import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ hero }) => {
  return(
    <div key={hero.alias}>
      <h4>{hero.alias}</h4>
      <div>{hero.affiliation}</div>
      <div>
        {hero.superpowers.map(power => (
          <div key={power}>
            {power}
          </div>
        ))}
      </div>
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero

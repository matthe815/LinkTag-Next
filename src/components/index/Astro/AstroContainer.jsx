import React from 'react'
import propTypes from 'prop-types'

import styles from './AstroContainer.module.css'

function AstroContainer ({ children }) {
  return (
        <>
            <div className={styles.AstroParallax}>
                {children}
            </div>
            <div className={styles.AstroHero}>
                <div className={styles.AstroText}>
                    <div className={styles.AstroBG1} />
                    <div className={styles.AstroBG2} />
                    <div className={styles.AstroBG1} />
                    <div className={styles.AstroBG2} />
                </div>
            </div>
        </>
  )
}

AstroContainer.propTypes = {
  children: propTypes.node.isRequired
}

export default AstroContainer

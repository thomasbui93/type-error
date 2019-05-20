import React from 'react'

export default ({children, isPrimary=true}) => (
    <button className={`button ${isPrimary ? 'is-primary': ''}`}>
        {children}
    </button>
)
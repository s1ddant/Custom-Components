import React from 'react'
import '../css/EmptyPage.css'

const Backdrop = ({children}) => {
  return (
    <div className='emptypage-wrapper'>
      {children}
    </div>
  )
}

export default Backdrop

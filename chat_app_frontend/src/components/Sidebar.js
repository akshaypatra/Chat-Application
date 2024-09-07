import React from 'react'
import withAuthentication from '../utils/withAuthentication'

function Sidebar() {
  return (
    <div className='side-bar'>Sidebar</div>
  )
}

export default withAuthentication(Sidebar)
import React from 'react'
import Order from './order'
import Breadcrumb from './breadcrumb'
import Offers from './offers'
import Services from './services'

function Layout({isMobile}) {
  return (
    <div>
        <Breadcrumb isMobile={isMobile} />
        <Order />
        <Offers isMobile={isMobile}/>
        <Services />
    </div>
  )
}

export default Layout
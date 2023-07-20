import React, { Fragment } from 'react'
import NavbarHeader from './NavbarHeader'
import { Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Fragment>
    
    <NavbarHeader/>
    <Row className='content-justify-center d-flex'>
    <p className='fontContent' >قائمة الطعام</p>    
    </Row>
    <div className='justify-content-center d-flex'>
    <p className='borderDisplay text-center'/>
    </div>

    
    </Fragment>
  )
}

export default Header

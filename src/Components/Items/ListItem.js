import React, { Fragment } from 'react'
import images from '../../images/1.jpg';
import { Row } from 'react-bootstrap';


const ListItem = (props) => {
  return (
    <Fragment>
    <Row className='justify-content-center d-flex m-4 ' >
    <div className="itemPlace" style={{maxWidth: 1200 ,maxHeight:158}}>
  <div className="row g-0">
    <div className="col imageItem">
      <img src={props.item.image} className="img-fluid" style={{maxHeight:158,width:300}} alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <div className='d-flex justify-content-between'>
        <h5 className="card-title fontTitle">{props.item.name}</h5>
        <h5 className="card-title fontTitle">30 جنيها</h5>
        </div>
        <p className="card-text fontDesc">{props.item.descrption}</p>
      </div>
    </div>
  </div>
</div>
</Row>

    </Fragment>
  )
}

export default ListItem

import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'

const CategoryItems = (props) => {

    const onSelectAllHandler = ()=>{
        props.onSelectAll()

    }

    const onSelectCategoryHandler = (name)=>{
        props.onSelectCategory(name)

    }
  return (
    <Fragment>
    <div className='d-flex justify-content-center'>
    <button className='categoryButton d-flex' onClick={onSelectAllHandler}>الكل</button>
    {props.category.map(item=>{
        return(
        <button key={item.id} className='categoryButton d-flex' onClick={()=>onSelectCategoryHandler(item.name)}>{item.name}</button>
        )
    })}
    </div>
    
    </Fragment>
  )
}

export default CategoryItems

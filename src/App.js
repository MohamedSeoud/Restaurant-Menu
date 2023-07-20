import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from "./Components/Items/ListItem";
import CategoryItems from "./Components/Items/CategoryItems";
import { Products } from "./Data/Products";
import {Categories} from './Data/Categories';
import { Fade } from "react-reveal";



function App() {
  const[ProductsItems,setProducts]=useState(Products); 
  const [categoryItems,setCategoryItems] =useState(Categories);

  const onSelectAll= ()=>{
    setProducts(Products);
  }

  const onSelectCategory= (category)=>{
    const Items = Products.filter(item=>item.category===category)
    setProducts(Items);
  }

  return (
    <Fragment>
    <Header/>
    <CategoryItems category={categoryItems} onSelectCategory={onSelectCategory} onSelectAll={onSelectAll}/>
    <Fade left>
    {ProductsItems.map((item)=>{
      return(<ListItem key={item.id} item={item}  />)
    })
    }
    </Fade>
    </Fragment>

  );
}

export default App;

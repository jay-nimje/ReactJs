import React from 'react'
import Card_props from './Card_props'

function Class_props() {
  return (
    <div className='row'>
        <Card_props title="Product 1" desc="Product-1" img="https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Products-for-Oily-Skin.png"/> 
        <Card_props title="Product 2" desc="Product-2" img="https://s3-ap-southeast-1.amazonaws.com/content-platform-production/sephora-content-platform-_d033be62-49f4-440a-9d5d-1afc3bf52642"/> 
        <Card_props title="Product 3" desc="Product-3" img="https://www.simpleskincare.com/sk-eu/content/dam/brands/simple/global_use/1082568-simple-how-to-pick-the-best-micellar-water-for-you-micel.jpg.rendition.380.380.jpg"/>    
    </div>

  )
}

export default Class_props
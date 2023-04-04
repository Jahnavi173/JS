import React from 'react'
import './ProductPage.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';


function ProductPage() {
let {id}=useParams();

let products=[
  {id:1,
    image:"https://cdn.shopify.com/s/files/1/0050/9761/9505/products/perfume-mon-paris-para-mujer-de-yves-saint-laurent-eau-de-parfum-90ml-805540_1200x1200.jpg?v=1603839206",
    name:"Yves Saint Laurent",price:8989,rating:4.1,quantity:90,description:"Women's Libre Eau De Parfum "},

    {
id:2,
image:"https://brandedfragrance.com/wp-content/uploads/2021/06/Versace-Eros-Flame-EDP-M-100ml-1.jpg",
name:"Versace",
price:12999,
description:"Versace Eros Flame De Parfum",
rating:4.8,
quantity:100
},
{
id:3,
image:'https://i5.walmartimages.com/asr/e3a422fc-8bbd-45da-b03c-86b2323e0ab2_1.f35218998d6448f4919eb2fe7d9e3c40.jpeg',
name:"Calvin Klein",
price:3910,
rating:3.8,
quantity:100,
description:'Calvin Klein One Gold EDT'
},
{
id:4,
name:"SKINN",
price:4499,
rating:3.1,
quantity:50,
image:'https://th.bing.com/th/id/R.b78d7c7b674c4bc54239672d9f492c9e?rik=Y%2fJZaoTXcVaGoA&riu=http%3a%2f%2fassets.myntassets.com%2fv1%2fimages%2fstyle%2fproperties%2fSKINN-Titan-Women-Celeste-Perfume_1022a9083fff2a3b268dd95dab5b93e6_images.jpg&ehk=j26Yfxl3vzSiEneZOped1TUBCm3qhsUX5g%2fcBR5P9fM%3d&risl=&pid=ImgRaw&r=0',
description:'Comes With Elegant GlassSpray'
},
{
id:5,
name:"Tom Ford",
price:2339,
rating:4.4,
quantity:20,
image:'https://th.bing.com/th/id/OIP.qrQmoulR0OspAyrXHbFXngHaHa?pid=ImgDet&rs=1',
description:'Tom Ford Libre Eau De Parfum'
},
{
id:6,
name:"Gucci",
price:8759,
rating:4.9,
quantity:50,
image:'https://fimgs.net/images/secundar/o.33564.jpg',
description:'Gucci Flora By Eau EDT Spray'
}
]

let value=products?.filter((it)=>{
  if(it.id==id)
  return it;
})
console.log(id)
useEffect(() => {
  let value=products?.filter((it)=>{
    if(it.id==id)
    return it;
  })

  
}, [1])
let item=value[0];

// console.log(item[0]);

  return (
    <div className="container productPage">
      <div>
    <img src={item?.image} width={"500px"} alt="No image" />
      </div>
      <div className='flex-2 '>
        <h3>Name:{item?.name}</h3>
        <h4>Quantity:{item?.quantity}</h4>
        <h5>Decription:{item?.description}</h5>
        <h6>Rating:{item?.rating}</h6>
        <br />
        <br />
        <h2>Price:{item?.price}</h2>
        <button className="btn btn-primary">Add To Cart</button>
        <br />
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductPage
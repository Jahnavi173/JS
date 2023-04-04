import React from 'react'
import './HomePage.css'
import Card from '../card/Card';
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomePage() {
  const products=[
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
  return (
    <div className='home'>
      <div className=" text">
        Find Your Signature Fragrance...
      </div>
   <Carousel>
      <Carousel.Item interval={1000}>
        <img className='d-block' src="https://s-media-cache-ak0.pinimg.com/736x/0f/1d/d7/0f1dd7287a16247f286dd701f063e7ed.jpg" alt="" width={"100%"} height={"400px"} />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block' src="https://i.pinimg.com/originals/94/91/ce/9491ce7977b92bf61415e4d8263549e6.jpg" alt="" width={"100%"} height={"400px"} />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block' src="https://1.bp.blogspot.com/-5u8FXMMogAQ/XkOOnZpPGVI/AAAAAAAAAL4/Ymt0pSvgGlsMRDlHWgvufy3yf8ozsff5gCLcBGAsYHQ/s1600/banner1-1.jpg" alt="" width={"100%"} height={"400px"} />
      </Carousel.Item>

     </Carousel>

     <div className="container mt-5 ">
      {/* <div className="card">
        <img  className='card-img-top' src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/11/product-photography-tips-14-1.jpg" alt="No Image" />
      
     
      <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Click this</button>
  </div>
  </div> */}
  <div>
    <p className="display-5 para">CRAZY DEALS</p>
  </div>
  <div className="d-flex"> 
  <Link to='/ProductPage/1'>
  <Card  products={products[0]}/>
  </Link>
  <Link to={'/ProductPage/2'}>
  <Card products={products[1]}/>
  </Link>
  <Link to='/ProductPage/3'>
  <Card products={products[2]}/>
  </Link>
  
  </div>

  <div className="d-flex mt-4 mb-5">
  <Link to='/ProductPage/4'>
  <Card products={products[3]}/>
  </Link>
  <Link to='/ProductPage/5'>
  <Card products={products[4]}/>
  </Link>
  <Link to='/ProductPage/6'>
  <Card products={products[5]}/>
  </Link>
  </div>
  </div>


     
    </div>
  )
}

export default HomePage
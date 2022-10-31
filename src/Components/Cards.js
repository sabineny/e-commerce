import React, { useState } from 'react'
import image1 from '../images/pic1.jpeg'
import image3 from '../images/pic3.jpeg'
import image2 from '../images/pic2.jpeg'
import image5 from '../images/pic5.jpeg'
import image6 from '../images/pic6.webp'
import image7 from '../images/pic7.webp'



// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Cards(){


const [items,setItems] = useState ([ {
  image:image1,
  title:"chichen and rice",
  description:"Chicken thigh fillets, white rice, olive oil, hot, garlic powder  with salad and fruit",
  price:"25k"
},

{
  image:image3,
  title:"pizza",
  description:"dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil",
  price:"12k"
},

{
  image:image7,
  title:"burger",
  description:"Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.",
  price:"10k"
},

{
  image:image6,
  title:"chips",
  description:"Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.",
  price:"5k"
},


{
  image:image1,
  title:"chichen and rice",
  description:"Chicken thigh fillets, white rice, olive oil, hot, garlic powder  with salad and fruit",
  price:"25k"
},

{
  image:image3,
  title:"pizza",
  description:"dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil",
  price:"12k"
},

{
  image:image7,
  title:"burger",
  description:"Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.",
  price:"10k"
},

{
  image:image6,
  title:"chips",
  description:"Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.",
  price:"5k"
},
]);


 

  return(
   <div className="allcards">
    {
    items.map(function(card){
     
      return(
        <div className="card">
      
  <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    
    <p className="card-text"> {card.description}</p>
    <h6>{card.price}</h6>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
  </div>
      )
    })
    }
    
  </div>
  
  )
}

  


{/* <>
<div className="all">

</div>     */}

{/* <div className="card" >
  <img src={image3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">pizza</h5>
    <h6>description</h6>
    <p className="card-text"> dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil.</p>
    <h6>price: 15k</h6>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>   

<div className="card" >
  <img src={image2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">burger</h5>
    <h6>description</h6>
    <p className="card-text">Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.</p>
    <h6>price: 15k</h6>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>   

<div className="card" >
  <img src={image5} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">chips</h5>
    <h6>description</h6>
    <p className="card-text">Sink your teeth into a delicious hamburger recipe made from lean beef. To make cheeseburgers.</p>
    <h6>price: 15k</h6>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>  */}

// </div>
//      </>
//   );


export default Cards;
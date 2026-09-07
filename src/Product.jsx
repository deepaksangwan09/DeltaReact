import "./Product.css";
import Price from "./Price";

function Product({title, idx }){
    let oldPrices = ["12,495", "11,900" , "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let Description = [
      ["8,000 DPI", "Programmable buttons"],
      ["intitutive surface", "designed for iPad Pro"],
      ["designed for iPad Pro", "intitutive surface"], 
      ["wireless", "optical orientation"]
    ]
  return(
    <div className="Product" >

      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    
    </div>
  )
}

// import "./Product.css";
// function Product({title, price, features}) {
//    const list = features.map((feature)=> <li>{feature}</li>)
//   return ( 
//     <div className="product">
//       <h1>{title}</h1>
//       <p>Price is : {price}</p>
//       <p>{list}</p>
//     </div>  
//   )
// }

export default Product;
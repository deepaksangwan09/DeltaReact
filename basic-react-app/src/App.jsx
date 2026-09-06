import "./App.css";
import Product from "./Product.jsx";
import ProductTab  from "./ProductTab.jsx";


function App(){
  return(
    <>
      <h2 style={{textAlign : "center"}}>BlockBuster deals | Shop Now</h2>
      <ProductTab/>
    </>

  )
  
}
// function Title(){
//   return <h1>I am the Title</h1>;
// }

// function App(){
//   return (
//     <div>
//       <h1>This is my app component</h1>
//       <p>inside our app component : </p>
//       <Title/>
//     </div>
//   )
// }

export default App;

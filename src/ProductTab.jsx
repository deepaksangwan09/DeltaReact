import Product from "./Product.jsx";

function ProductTab(){
  let styles = {
    display : "flex", 
    flexWrap : "wrap",
    justifyContent : "center", 
    alignItems: "center",
  
  } 
 
  return (
      <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/> 
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2} />
        <Product title="Petronics Toad 23" idx={3}/>
      </div>
    )
}
// function ProductTab(){
//     let options = ["hi-tech", "durable", "fast"]
//     return(
//     <>
//       <Product title="phone" price={30000} features={options} />
//       {/* <Product title="laptop" price={50000} features={options} /> 
//       <Product title="tablet" price={20000} features={options} /> */}
//     </>
//     );
// }



export default ProductTab;
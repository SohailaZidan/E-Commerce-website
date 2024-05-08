import Products from "../container/products";
export default function ProductSection(){
return(
    <div className="p-5 text-center" >
      <h2 className="pb-3"> Featured Products</h2>
      <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
    <div className="d-flex align-items-center justify-content-center gap-1">
        <h5 style={{background:"gray", color:'white',padding:"10px 30px"}} className="bg-secondary">All</h5>
        <h5  style={{background:"gray", color:'white',padding:"10px  30px"}}className="bg-dark"> New Arrivals</h5>
        <h5 style={{background:"gray", color:'white',padding:"10px 30px"}} className="bg-dark"> Hot Sales</h5>
    </div>
    <Products/>
    </div>
)
}
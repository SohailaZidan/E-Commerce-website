import SearchBar from "../component/container/barSearch";
import Products from "../component/container/products";
export default function ShopPage(){
    return(<>
    <div className="d-flex justify-content-center mt-5"><SearchBar/></div>
    <div className="container-fluid mt-5"><Products/></div>
    
    </>)
}
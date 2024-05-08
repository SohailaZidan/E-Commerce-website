import React from "react";
import Button from 'react-bootstrap/Button';
import {XLg} from 'react-bootstrap-icons'
import Table from 'react-bootstrap/Table'
import {useCart} from 'react-use-cart';
export default function CartPage(){

    const {
        isEmpty,
        removeItem,
        items,
        emptyCart,
        cartTotal
       } = useCart();
       
       if(isEmpty) return <p>No product</p>
    return(
     <div >
        <div className="row row-col-2 m-5">
            <div className="col col-8">
                <Table responsive>
                    <tr style={{fontSize:'25px'}}>
                        <th  colSpan={3}>Product</th>
                        <th>price</th>
                    </tr>
                    <tbody>
                        {items.map((item , index)=> {
                    return(
                        <tr key={index}>
                            
                            <td><img src={item.thumbnail} style={{height:'6rem'}}/></td>
                            <td>{item.title}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td> <Button variant="white" className="btn    rounded-circle" onClick={()=> removeItem(item.id)}><XLg/></Button></td>
                        </tr>
                      
                    )
                })}
                    </tbody>
                
                </Table>
                <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>clear</button>
            </div> 
             <div className="col col-lg-4 bg-light p-5" style={{height:'13rem'}} >
                <h4>CART TOTAL</h4>
                <div className="d-flex mt-3 justify-content-between">
                <p>Total </p>
                <p className="text-danger"> $ {cartTotal} </p>
                </div>
                <Button variant="dark">Proceed to checkout</Button>
            </div>

        </div>

        </div>
    )
}
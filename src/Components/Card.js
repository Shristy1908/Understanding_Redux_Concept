import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { useDispatch } from "react-redux";
import {Add} from "../Redux/Actions/action";

function Cards() {

  const [data,setData]=useState(Cardsdata);

  const dispatch=useDispatch();

  const send=(e)=>{
      dispatch(Add(e));
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((data,id)=>{
          
             return (
               <>
                 <Card
                   style={{ width: "22rem", border: "none" }}
                   className="mx-2 mt-4 card_style"
                   key={data.id}
                 >
                   <Card.Img
                     variant="top"
                     src={data.imgdata}
                     style={{ height: "16rem" }}
                     className="mt-3"
                   />
                   <Card.Body>
                     <Card.Title>{data.rname}</Card.Title>
                     <Card.Text>Price: ₹{data.price}</Card.Text>
                     <div className="button_div d-flex justify-content-center">
                       <Button variant="primary" onClick={()=>send(data)} className="col-lg-12">Add to Cart</Button>
                     </div>
                   </Card.Body>
                 </Card>
               </>
             );
          })
        }
       
      </div>
    </div>
  );
}

export default Cards;

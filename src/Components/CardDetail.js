import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Remove } from "../Redux/Actions/action";
import { Add, individualRemove } from "../Redux/Actions/action";


function CardDetail(){

  const [data,setData]=useState([]);
  //console.log(data);

  const {id}=useParams();
  //console.log(id);

  const dispatch=useDispatch();

  const navigate=useNavigate()

  const getdata = useSelector((state) => state.cartreducer.carts);
    //console.log(getdata);

  const compare=()=>{
      let comparedata=getdata.filter((e)=>{
        return e.id == id;
      });
      console.log(comparedata);
      setData(comparedata);
  }

  useEffect(()=>{
    compare();
  },[id])

  const send = (e) => {
    dispatch(Add(e));
  };

  const dlt=(id)=>{
     dispatch(Remove(id));
     navigate("/");
  }

  const dlt_one=(id)=>{
    dispatch(individualRemove(id));
  }

  return (
      <div className="container mt-2">
        <h2 className="text-center">Items Deails Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">

          {
            data.map((data)=>{
              return (
                <>
                  <div className="items_img">
                    <img
                      src={data.imgdata}
                      alt="food"
                      style={{ width: "20rem", height: "16rem" }}
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {data.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹{data.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> :{data.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹{data.price * data.qnty}
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={data.qnty<=1?() => dlt(data) : () => dlt_one(data)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{data.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(data)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {data.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Oder Review : </strong>
                            <span>{data.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <span>
                              <i
                                class="fa fa-solid fa-trash"
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: 20,
                                }}
                                onClick={() => dlt(data.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })
          }
           
          </div>
        </section>
      </div>
    );
}
export default CardDetail;
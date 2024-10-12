import React, {useState} from "react";

function MyComponent2(){

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery")

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }
  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={quantity} onChangeCapture={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction"></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master CArd</option>
        <option value="gift card">gift card</option>
      </select>

      <p>Payment: {payment}</p>

      <label htmlFor="">
        <input type="radio" value="Pick up" 
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}/>
        Pick up
      </label> <br />
      <label htmlFor="">
        <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>


  );
}
export default MyComponent2
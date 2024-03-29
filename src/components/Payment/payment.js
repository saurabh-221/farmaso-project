import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

toast.configure();

function App2() {
  const [product] = React.useState({
    // name: "Tesla Roadster",
    price: 1,
    // description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_y4K7pbMR4MYZLX1bxUff2Qa600c98anK33"
        token={handleToken}
        amount={product.price}
        currency="inr"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
export default App2
// default module.exports = App2
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

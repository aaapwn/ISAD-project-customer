import HomePage from "./HomePage";
import ViewQueue from "./ViewQueue";
import { useState } from "react";

const App = () => {
  const [customer_status, setCustomer_status] = useState(localStorage.getItem("customer_status"))
  if (customer_status === "QUEUE") {
    return <ViewQueue setCustomer_status={setCustomer_status}/>
  } else if (customer_status === "CHECKED_IN") {
    return <HomePage setCustomer_status={setCustomer_status}/>
  }
}

export default App

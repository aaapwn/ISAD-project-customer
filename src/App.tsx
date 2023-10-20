import HomePage from "./HomePage";
import ViewQueue from "./ViewQueue";

const App = () => {
  const customer_status = localStorage.getItem("customer_status");
  if (customer_status === "queue") {
    return <ViewQueue/>
  } else if (customer_status === "customer") {
    return <HomePage/>
  }
}

export default App

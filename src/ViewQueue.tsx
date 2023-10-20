import { Button } from "./components/ui/button"
const ViewQueue = () => {
  return (
    <div>
        <h1>คิวของคุณ : XXXX</h1>
        <p>เหลืออีก XX คิว</p>
        <Button onClick={() => localStorage.setItem("customer_status", "customer")}>Change to Customer</Button>
    </div>
  )
}

export default ViewQueue

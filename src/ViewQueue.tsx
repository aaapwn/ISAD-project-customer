import { Button } from "./components/ui/button"
import { useState, useEffect } from "react";
import { getQueue } from "./api/queue/functions";
import { getCustomerById } from "./api/customer/function";
import { updateStatusCustomer } from "./api/customer/function";

const ViewQueue = ({setCustomer_status}:{setCustomer_status:Function}) => {
  const [leftQueue, setLeftQueue] = useState(0)
  const customer_id = localStorage.getItem("customer_id");

  useEffect(() => {
    getQueue().then((queue) => {
      setLeftQueue(parseInt(customer_id as string) - queue[0].id)
    })
    getCustomerById(parseInt(customer_id as string)).then((customer) => {
      if (customer.status === "CHECKED_IN") {
        setCustomer_status("CHECKED_IN")
        localStorage.setItem("customer_status", "CHECKED_IN")
      }
    })
  }, [])
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-3xl gap-y-4">
        <img src="/logo.webp" alt="" className="w-1/2"/>
        <h1>หมายเลขคิวของคุณ : <b className="underline">{customer_id}</b></h1>
        <p>เหลืออีก { leftQueue } คิว</p>
        <Button onClick={() => {updateStatusCustomer(parseInt(customer_id as string), "CHECKED_IN").then((result) => {localStorage.setItem("customer_status", result.status)}) }}>Change to Customer</Button>
    </div>
  )
}

export default ViewQueue

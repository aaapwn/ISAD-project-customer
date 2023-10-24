import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RiReservedFill } from "react-icons/ri";
import { createQueue } from "./api/queue/functions";

const ReserveQueue = () => {
  const navigate = useNavigate()
  const customer_id = localStorage.getItem("customer_id");
  
  const onReserveHandler = () => {
    createQueue().then((queue) => {
      localStorage.setItem("customer_id", queue.id as string)
      localStorage.setItem("customer_status", "QUEUE")
      navigate(`/${localStorage.getItem("customer_id")}`)
    })
  }

  useEffect(() => {
      if (customer_id) {
        navigate(`/${customer_id}`)
      }
  }, [])
  
  return (
    <div className="w-full h-screen">
      <header className="fixed top-0 px-5 w-full bg-white">
        <div className="border-b-[1.5px] border-[#898989] w-full flex justify-center py-4 ">
          <p className="text-3xl font-medium">สัตว์บกจุ่มน้ำ</p>
        </div>
      </header>
      <div className="w-full h-full flex justify-center items-center flex-col gap-y-10">
        <img src="/logo.webp" alt="" className="w-4/6"/>
        <Button onClick={onReserveHandler} className="bg-primary text-4xl px-10 py-7 flex gap-x-3"><RiReservedFill/> จองคิว</Button>
      </div>
    </div>
  )
}

export default ReserveQueue

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

interface Order {
  id: number;
  status: string;
}

const ViewOrder = () => {
  const customer_id = localStorage.getItem("customer_id");
  const orders: Order[] = [
    {
      id: 1,
      status: "success",
    },
    {
      id: 2,
      status: "waiting",
    },
    {
      id: 3,
      status: "cancel",
    },
  ];
  return (
    <div className="bg-primary h-screen overflow-hidden">
      <div className="flex justify-between items-center py-8 px-4 text-secoundary">
        <h1 className="font-bold text-4xl">Your Order</h1>
        <p>Table no.xx</p>
      </div>
      <div className="bg-white py-5 px-3 rounded-t-3xl relative h-full overflow-auto pb-44">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead><p className="">Order</p></TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={order.id} className="font-semibold text-center">
                  <TableCell><Link to={`/${customer_id}/view-order/${index+1}`} className="underline">{`บิลที่ ${index+1}`}</Link></TableCell>
                  <TableCell className="font-semibold">{order.status === "success" ? <p className="text-green-500">เสิร์ฟแล้ว</p>
                    : order.status === "waiting" ? <p className="text-yellow-400">ยังไม่จัดเสิร์ฟ</p>
                    : <p className="text-red-600">ยกเลิก</p>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
        <Link to={`/${-1}`} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-3xl font-thin"><MdOutlineCancel/></Link>
    </div>
  );
};

export default ViewOrder;

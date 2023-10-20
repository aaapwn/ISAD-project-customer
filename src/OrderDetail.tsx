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
  import { useParams } from "react-router-dom";
  
  interface Order {
    id: number;
    menu: string;
    amount: number;
  }
  
  const OrderDetail = () => {
    const customer_id = localStorage.getItem("customer_id");
    const { order_id } = useParams();
    const orders: Order[] = [
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
      {
        id: 1,
        menu: "เนื้อสไลด์",
        amount: 10,
      },
    ];
    return (
      <div className="bg-primary h-screen overflow-hidden">
        <div className="flex justify-between items-center py-8 px-4 text-secoundary">
          <h1 className="font-bold text-4xl">{`บิลที่ ${order_id}`}</h1>
          <p>Table no.xx</p>
        </div>
        <div className="bg-white py-5 px-3 rounded-t-3xl relative h-full overflow-auto pb-44">
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><p className="">Order</p></TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="font-semibold text-center">
                    <TableCell>{order.menu}</TableCell>
                    <TableCell className="font-semibold">{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
          <Link to={`/${customer_id}/view-order`} className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-3xl font-thin"><MdOutlineCancel/></Link>
      </div>
    );
  };
  
  export default OrderDetail;
  
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { IoIosPaper } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Group {
    id: number;
    name: string;
    menus: Menu[];
}

interface Menu {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: number,
    name: string,
    amount: number
}
import toast from "react-hot-toast";

const menus1: Menu[] = [
    {
        id: 1,
        name: 'เนื้อสไลด์1',
        price: 100
    },
    {
        id: 2,
        name: 'เนื้อสไลด์2',
        price: 100
    }
]
const menus2: Menu[] = [
    {
        id: 3,
        name: 'หมูสไลด์1',
        price: 100
    },
    {
        id: 4,
        name: 'หมูสไลด์2',
        price: 100
    }
]

const groups: Group[] = [
    {
        id: 1,
        name: 'เนื้อ',
        menus: menus1
    },
    {
        id: 2,
        name: 'หมู',
        menus: menus2
    },
]

const OrderMenu = () => {
  const navegate = useNavigate()
  const amount = useRef<any>()
  const [orders, setOrders] = useState<Order[]>([])
  const [orderSuccess, setOrderSuccess] = useState(false)
  const onOrderHandler = (menu:Menu, amount:number) => {
    if (amount < 0) {
        toast.error("กรุณากรอกจำนวนที่ถูกต้อง")
        return;
    }
    const new_order = orders.filter((order:any) => {
        return order.id != menu.id
    })
    if (amount != 0) {
        new_order.push(
            {
                id: menu.id,
                name: menu.name,
                amount: amount
            }
        )
    }
    setOrders(new_order)
  }

  const onSubmitHandler = () => {
    if (orders.length === 0) {
        toast.error("กรุณาเลือกเมนูก่อนสั่ง")
        return;
    }
    console.log(orders)
    setOrderSuccess(false)
    setOrders([])
    navegate("/")
  }
  return (
    <div>
        <div className='flex justify-between w-full bg-primary min-h-[5rem] items-center px-3 sticky top-0 z-50'>
            <Link to={`/`}><BiArrowBack className='text-3xl'/></Link>
            <img src="/logo.webp" alt="" className="h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><p className="">Menu</p></TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {groups.map((group) => (
                    <Fragment key={group.id}>
                        <TableRow>
                            <TableCell className="text-left font-semibold text-lg">หมวดหมู่ : {group.name}</TableCell>
                        </TableRow>

                        {group.menus.map((menu) => (
                            <TableRow key={menu.id} className="font-semibold text-center w-full">
                                <TableCell>
                                    <p className="font-medium">{menu.name}</p>
                                    <p className="font-light">{menu.price} บาท</p>
                                </TableCell>
                                <TableCell className="font-medium">{
                                    <Dialog>
                                        <DialogTrigger asChild className="cursor-pointer">
                                            <p className="cursor-pointer">
                                                {
                                                    orders?.filter((order:any) => {
                                                        return order.id === menu.id
                                                    })[0]?.amount || 0
                                                }
                                            </p>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                            <>
                                                <div className="flex justify-between px-10">
                                                    <p>{menu.name}</p>
                                                    <p>{menu.price} บาท</p>
                                                </div>
                                                <Input type="number" placeholder={`เดิม : ${orders.filter((order:any) => {
                                                        return order.id === menu.id
                                                    })[0]?.amount || 0}`} ref={amount}/>
                                            </>
                                        <DialogFooter className="sm:justify-start">
                                            <DialogClose asChild>
                                                <div className="flex gap-x-3">
                                                    <Button type="button" variant="secondary" className="w-full">
                                                        ยกเลิก
                                                    </Button>
                                                    <Button type="button" variant="secondary" className="bg-primary text-white w-full" onClick={() => onOrderHandler(menu, amount.current.value)}>
                                                        เพิ่ม
                                                    </Button>
                                                </div>
                                            </DialogClose>
                                        </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </Fragment>
                ))}
              </TableBody>
            </Table>
        </div>
        <Dialog open={orderSuccess}>
            <DialogTrigger asChild>
                <Button onClick={() => setOrderSuccess(true)} variant="outline" className="bg-primary text-black text-lg py-6 w-10/12 fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-x-3"><IoIosPaper/> SELECTED ITEMS</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <div className="flex flex-col gap-y-4 max-h-[75vh]">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-semibold">Your Orders</h1>
                        <p>NO.XX</p>
                    </div>
                    <Table className="overflow-y-auto">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Menu</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length > 0 && orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.name}</TableCell>
                                <TableCell>{order.amount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {!(orders.length > 0) && <div className="text-center">ไม่พบเมนู</div>}
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <div className="flex gap-x-3">
                            <Button type="button" variant="secondary" className="w-full" onClick={() => setOrderSuccess(false)}>
                                ยกเลิก
                            </Button>
                            <Button type="button" variant="secondary" className="bg-primary text-white w-full" onClick={onSubmitHandler}>
                                เพิ่ม
                            </Button>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default OrderMenu

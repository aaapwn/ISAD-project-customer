import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

function HomePage({setCustomer_status}:{setCustomer_status: Function}) {
  const [isOpen, setIsOpen] = useState(false);
  const customer_id = localStorage.getItem("customer_id");
  return (
    <div className="w-full h-screen overflow-hidden">
      <header className="fixed top-0 px-5 w-full bg-white z-50">
        <div className="border-b-[1.5px] border-[#898989] w-full flex justify-center py-4 ">
          <p className="text-3xl font-medium">สัตว์บกจุ่มน้ำ</p>
        </div>
      </header>
      <div className="flex flex-col gap-y-10 justify-center items-center overflow-hidden scale-90 h-full">
        {/* order menu */}
        <Link to={`/${customer_id}/order-menu`} className="flex flex-col gap-y-3 justify-center items-center">
          <div className="w-36 h-36 bg-secoundary rounded-full flex justify-center items-center">
            <img src="/order.webp" alt="" className="w-3/5" />
          </div>
          <p className="text-xl font-medium">สั่งอาหาร</p>
        </Link>

        {/* list menu */}
        <Link to={`/${customer_id}/view-order`} className="flex flex-col gap-y-3 justify-center items-center">
          <div className="w-36 h-36 bg-secoundary rounded-full flex justify-center items-center">
            <img src="/view-order.webp" alt="" className="w-3/5" />
          </div>
          <p className="text-xl font-medium">ดูรายการอาหาร</p>
        </Link>

        {/* call staff */}
        <Dialog open={isOpen}>
          <DialogTrigger asChild onClick={() => setIsOpen(true)}>
            <div className="flex flex-col gap-y-3 justify-center items-center cursor-pointer">
              <div className="w-36 h-36 bg-secoundary rounded-full flex justify-center items-center">
                <img src="/call-staff.webp" alt="" className="w-3/5" />
              </div>
              <p className="text-xl font-medium">เรียกพนักงาน</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <div className="flex justify-center items-center py-5">
              <p className="text-lg">คุณต้องการจะเรียกพนักงานใช่หรือไม่</p>
            </div>
            <DialogFooter className="sm:justify-start">
              <div className="flex justify-center gap-x-3">
                <DialogClose asChild className="w-fit">
                  <div className="flex justify-center">
                    <Button type="button" variant="secondary" className="bg-gray-400 px-10" onClick={() => setIsOpen(false)}>
                      NO
                    </Button>
                  </div>
                </DialogClose>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="secondary" className="bg-primary text-white px-10">
                      YES
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <div className="flex justify-center items-center py-5">
                      <p className="text-lg">พนักงานกำลังมา กรุณารอสักครู่ . .</p>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <div className="flex justify-center gap-x-3">
                        <DialogClose asChild className="w-fit">
                          <div className="flex justify-center">
                            <Button type="button" variant="secondary" className="bg-primary text-white px-14" onClick={() => setIsOpen(false)}>
                              Done
                            </Button>
                          </div>
                        </DialogClose>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <footer className="fixed w-full bg-primary bottom-0 text-center py-3 text-lg font-medium text-[#2D2D2D]">
        <p>NO.XX</p>
      </footer>
    </div>
  );
}

export default HomePage;

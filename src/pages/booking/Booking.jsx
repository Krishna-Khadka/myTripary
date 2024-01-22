"use client";

import BookingForm from "@/components/bookingform/BookingForm";
import Checkout from "@/components/checkout/Checkout";
import Receipt from "@/components/receipt/Receipt";

const Booking = () => {
  return (
    <div className="w-full py-10 bg-[#EFEFEF]">
      <div className="container mx-auto">
        <div className="lg:flex">
          <div className="lg:w-8/12 md:w-1/2 sm:w-full">
            <Checkout />
            
            <div className="mt-4">
              <BookingForm />
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 sm:w-full">
            <div className="container mx-auto">
              <Receipt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

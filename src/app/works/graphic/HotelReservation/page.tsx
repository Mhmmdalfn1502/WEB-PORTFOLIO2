export default function graphic() {
    return (
        <div className="mt-14 lg:mt-30 px-4 lg:px-22 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-start py-4 gap-12 w-full">
                <span className="text-[16px] text-[#272727]"><b>Client:</b> Last Project Study Independent</span>
                <span className="text-[16px] text-[#272727]"><b>What i do:</b> Make a Website Hotel Reservation</span>
            </div>
            <hr className="w-[100%] h-[1px] bg-[#272727]" />
            <div className="grid grid-cols-1 gap-4 py-6 lg:py-10">
                <div className="">
                    <img className="" src="/DGraphic/HotelReservation/HomePage.png" alt="" />
                </div>
                <div className="">
                    <img className="" src="/DGraphic/HotelReservation/SignUp.png" alt="" />
                </div>
                <div className="">
                    <img className="" src="/DGraphic/HotelReservation/SignIn.png" alt="" />
                </div>
                <div className="">
                    <img className="" src="/DGraphic/HotelReservation/Booking.png" alt="" />
                </div>
            </div>
        </div>
    )
}
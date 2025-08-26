export default function graphic() {
    return (
        <div className="mt-14 lg:mt-30 px-4 lg:px-22 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-start py-4 gap-12 w-full">
                <span className="text-[16px] text-[#272727]"><b>Client:</b> Sony</span>
                <span className="text-[16px] text-[#272727]"><b>What i do:</b> Redesign Web</span>
            </div>
            <hr className="w-[100%] h-[1px] bg-[#272727]" />
            <div className="grid grid-cols-1 gap-4 py-6 lg:py-10">
                <div className="">
                    <img className="" src="/DGraphic/Sony/Landing Page.png" alt="" />
                </div>
            </div>
        </div>
    )
}
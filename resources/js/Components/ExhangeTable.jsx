import moment from "moment";
import React from "react";

export default function ExhangeTable({ currency }) {
    return (
        <div className="mt-8 max-w-[1000px] mx-auto">
            <div className="bg-sky-700 h-20 py-4 px-4 flex items-center md:px-8">
                <span className="text-white text-xl font-bold">
                    MERCADO INFORMAL DE DIVISAS EN CUBA (TIEMPO REAL)
                </span>
                <div className="ml-auto h-8 w-8">
                    <img
                        src="/logo-table.avif"
                        alt=""
                        height="155"
                        width="108"
                    />
                </div>
            </div>
            <div className="bg-gray-200 pt-2.5 pb-5 px-7">
                <div className="grid grid-cols-2">
                    <div className="border-b border-r border-black border-solid flex items-center p-4">
                        <span>1 EUR</span>
                        <div className="ml-4">
                            <img
                                className="h-10 w-auto"
                                src="/icon-eu.png"
                                height="40"
                                alt="icon-eu"
                            />
                        </div>
                    </div>
                    <div className="border-b border-black border-solid flex items-center p-4 font-semibold">
                        {currency["ecu"]}.00 CUP
                    </div>

                    <div className="border-b border-r border-black border-solid flex items-center p-4">
                        <span>1 USD</span>
                        <div className="ml-4">
                            <img
                                className="h-10 w-auto"
                                src="/icon-usa.png"
                                height="40"
                                alt="icon-usa"
                            />
                        </div>
                    </div>
                    <div className="border-b border-black border-solid flex items-center p-4 font-semibold">
                        {currency["usd"]}.00 CUP
                    </div>

                    <div className="border-b border-r border-black border-solid flex items-center p-4">
                        <span>1 MLC</span>
                        <div className="ml-4">
                            <img
                                className="h-10 w-auto"
                                src="/icon-mlc.png"
                                height="40"
                                alt="icon-mlc"
                            />
                        </div>
                    </div>
                    <div className="border-b border-black border-solid flex items-center p-4 font-semibold">
                        {currency["mlc"]}.00 CUP
                    </div>
                </div>

                <div className="py-5">
                    <div className="mx-auto text-center text-gray-600 text-xl font-semibold italic">
                        {moment().format("d/m/Y h:mm A")}
                    </div>
                </div>
            </div>
        </div>
    );
}

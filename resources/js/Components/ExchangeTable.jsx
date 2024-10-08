import { CURRENCY_NAMES } from "@/Constants";
import moment from "moment";
import React from "react";

export default function ExchangeTable({ currency }) {
    return (
        <div className="mt-8 max-w-[1000px] mx-auto shadow-lg rounded-md">
            <div className=" h-20 py-4 px-4 flex items-center md:px-8 border-b bg-cyan-500">
                <span className="text-xl font-bold">
                    MERCADO INFORMAL DE DIVISAS EN CUBA (TIEMPO REAL)
                </span>
                <img
                    src="/logo.png"
                    alt=""
                    width={40}
                    height={40}
                    className="ml-auto"
                />
            </div>
            <div className=" pt-2.5 pb-5 px-7">
                {Object.keys(CURRENCY_NAMES).map((key) => (
                    <div className="mt-4 flex border border-slate-400 shadow rounded-full">
                        <div className="flex items-center p-4">
                            <span>1 {CURRENCY_NAMES[key]}</span>
                        </div>
                        <div className="ml-2 flex items-center">
                            <img
                                className="h-10"
                                src={`/icon-${key}.png`}
                                height="40"
                                alt="icon-eu"
                            />
                        </div>
                        <div className="flex items-center p-4 font-semibold ml-auto">
                            {currency[key].toFixed(2)} CUP
                        </div>
                    </div>
                ))}

                <div className="py-5">
                    <div className="mx-auto text-center text-gray-600 text-xl font-semibold">
                        {moment().format("D/M/Y h:mm A")}
                    </div>
                </div>
            </div>
        </div>
    );
}

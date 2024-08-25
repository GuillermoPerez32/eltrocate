import moment from "moment";
import React, { useMemo, useState } from "react";

export default function Converter({ currency }) {
    const [convertionValue, setConvertionValue] = useState(1);
    const [selectedCurrency, setSelectedCurrency] = useState("usd");

    const currency_types = ["usd", "ecu", "cup", "mlc"];
    const currency_names = {
        usd: "USD",
        ecu: "EUR",
        cup: "CUP",
        mlc: "MLC",
    };

    const convertions = useMemo(() => {
        let convertions = {};
        currency_types.forEach((type) => {
            if (selectedCurrency === "cup" && type !== "cup") {
                convertions[type] = (convertionValue / currency[type]).toFixed(
                    2
                );
            } else if (type === selectedCurrency) {
                convertions[type] = convertionValue.toFixed(2);
            } else if (type === "cup") {
                convertions[type] = (
                    convertionValue * currency[selectedCurrency]
                ).toFixed(2);
            } else {
                const type_cup_value = convertionValue * currency[type];
                const calc = (
                    type_cup_value / currency[selectedCurrency]
                ).toFixed(2);
                convertions[type] = calc === "NaN" ? (0).toFixed(2) : calc;
            }
        });
        return convertions;
    }, [selectedCurrency, convertionValue]);

    return (
        <div
            id="convertidor"
            className="mt-4 max-w-[900px] mx-auto shadow-sm border border-slate-400 rounded-md"
        >
            <div className=" h-20 py-4 px-4 flex items-center md:px-8 shadow-md">
                <span className="text-xl font-bold ml-4">
                    CONVERTIDOR DE MONEDAS
                </span>
                <img
                    src="/logo.png"
                    alt=""
                    width={40}
                    height={40}
                    className="ml-auto"
                />
            </div>
            <div className="p-4 ">
                <div className="flex">
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        className="w-24 md:w-1/2 p-2 rounded"
                        placeholder="Monto"
                        value={convertionValue}
                        onChange={(e) => {
                            if (!isNaN(+e.target.value)) {
                                setConvertionValue(+e.target.value);
                            }
                        }}
                    />
                    <select
                        name="from"
                        id="from"
                        className="w-24 p-2 rounded ml-auto"
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                    >
                        {currency_types.map((type) => (
                            <option key={type} value={type}>
                                {currency_names[type]}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-1 mt-12 gap-y-6 md:grid-cols-3">
                    {currency_types.map((type) => (
                        <div
                            key={type}
                            className="text-center py-2 font-semibold text-lg border border-black mx-4 rounded"
                        >
                            <span className="text-red-800">
                                {convertions[type]}
                            </span>{" "}
                            {currency_names[type]}
                        </div>
                    ))}
                </div>
                <div className="bg-black h-0.5 w-full my-8" />

                <div className="flex gap-2 px-2 md:px-12">
                    <span className="text-center md:text-xl">
                        <span className="text-gray-700">
                            *Tipo de cambio del mercado informal a las:
                        </span>
                        <span className="font-semibold ml-2">
                            {moment().format("h:mm A")}
                        </span>
                    </span>
                    <div className="ml-auto font-semibold md:text-xl">
                        {moment().format("d/m/Y")}
                    </div>
                </div>
            </div>
        </div>
    );
}

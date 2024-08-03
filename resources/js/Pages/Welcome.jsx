import { Head } from "@inertiajs/react";
import moment from "moment";
import { useMemo, useState } from "react";

export default function Welcome({ posts, currency }) {
    const currency_types = ["usd", "ecu", "cup", "mlc"];
    const currency_names = {
        usd: "USD",
        ecu: "EUR",
        cup: "CUP",
        mlc: "MLC",
    };

    const [convertionValue, setConvertionValue] = useState(1);
    const [selectedCurrency, setSelectedCurrency] = useState("usd");

    const convertions = useMemo(() => {
        let convertions = {};
        currency_types.forEach((type) => {
            if (type === selectedCurrency) {
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
        <>
            <Head>
                <link rel="icon" href="favicon.png" type="image/png" />
            </Head>
            <div className="flex flex-col md:pt-4 md:px-4 md:flex-row">
                <div>
                    <a href={route("posts.show", posts[0].slug)}>
                        <img
                            className="max-w-full h-80 md:h-96 md:w-96 md:max-w-none object-cover"
                            width="1218"
                            height="714"
                            src={posts[0].image}
                            alt=""
                        />
                    </a>
                </div>
                <div className="p-4 flex flex-col justify-between md:p-0 md:pl-10">
                    <a
                        className="hover:text-blue-900"
                        href={route("posts.show", posts[0].slug)}
                    >
                        <h2 className="text-2xl font-semibold">
                            {posts[0].title}
                        </h2>
                    </a>
                    <p className="my-4">{posts[0].abstract}</p>
                </div>
            </div>

            <div className="mt-8 max-w-[1000px] px-4 md:px-12 mx-auto">
                <div className="bg-sky-700 h-20 py-4 px-4 flex items-center md:px-8">
                    <span className="text-white text-xl font-bold">
                        MERCADO INFORMAL DE DIVISAS EN CUBA (TIEMPO REAL)
                    </span>
                    <div className="ml-auto h-8 w-8">
                        <img
                            src="logo-table.avif"
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
                                    src="icon-eu.png"
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
                                    src="icon-usa.png"
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
                                    src="icon-mlc.png"
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

            <div className="my-8 mx-auto px-4 md:px-12 max-w-[900px]">
                <p>
                    Con la siguiente calculadora podrás saber a cuánto equivalen
                    las monedas que tengas con otras denominaciones, según las
                    tasas del mercado informal. Aquí puedes saber no sólo el
                    valor con respecto al USD, al EURO o el MLC, sino también
                    con respecto a otras divisas de uso en el mercado informal
                    cubano, como el dólar canadiense (CAD) la libra esterlina
                    (GBP) o el franco suizo (CHF).
                </p>
                <p>
                    Siempre ten en cuenta que los valores que aparecen deben ser
                    tomados como REFERENCIA, pues el precio final del cambio lo
                    fijarán vendedores y compradores cuando concreten una
                    transacción.
                </p>
            </div>

            <div
                id="convertidor"
                className="mt-4 px-4 md:px-12 max-w-[900px] mx-auto"
            >
                <div className="bg-sky-900 h-20 py-4 px-4 flex items-center md:px-8">
                    <div className="h-8 w-8 flex items-center">
                        <img
                            src="logo-table.avif"
                            alt=""
                            height="155"
                            width="108"
                        />
                    </div>
                    <span className="text-white text-xl font-bold ml-4">
                        CONVERTIDOR DE MONEDAS
                    </span>
                </div>
                <div className="p-4 bg-blue-300">
                    <div className="flex">
                        <input
                            type="text"
                            name="amount"
                            id="amount"
                            className="w-24 md:w-1/2 p-2 rounded"
                            placeholder="Monto"
                            value={convertionValue}
                            onChange={(e) =>
                                setConvertionValue(+e.target.value)
                            }
                        />
                        <select
                            name="from"
                            id="from"
                            className="w-24 p-2 rounded ml-auto"
                            value={selectedCurrency}
                            onChange={(e) =>
                                setSelectedCurrency(e.target.value)
                            }
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

            <div id="posts" className="grid grid-cols-2 mt-8 px-8 md:px-24">
                {posts.map((post) => (
                    <div className="p-4" key={post.id}>
                        <a
                            className="hover:text-blue-900"
                            href={route("posts.show", post.slug)}
                        >
                            <img
                                src={post.image}
                                alt=""
                                height="714px"
                                width="1218px"
                                className="object-cover w-full h-auto"
                            />
                            <h2 className="md:text-xl font-medium">
                                {post.title}
                            </h2>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

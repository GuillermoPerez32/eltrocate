import Converter from "@/Components/Converter";
import ExchangeTable from "@/Components/ExchangeTable";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/react";

export default function Welcome({ posts, currency }) {
    return (
        <AppLayout>
            {posts.length > 0 && (
                <div className="flex flex-col md:pt-4 md:px-4 md:flex-row">
                    <div>
                        <Link href={route("posts.show", posts[0].slug)}>
                            <img
                                className="max-w-full h-80 md:h-96 md:w-96 md:max-w-none object-cover"
                                width="1218"
                                height="714"
                                src={`/storage/${posts[0].image}`}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="p-4 flex flex-col justify-between md:p-0 md:pl-10">
                        <Link
                            className="hover:text-blue-900"
                            href={route("posts.show", posts[0].slug)}
                        >
                            <h2 className="text-2xl font-semibold">
                                {posts[0].title}
                            </h2>
                        </Link>
                        <p className="my-4">{posts[0].abstract}</p>
                    </div>
                </div>
            )}

            <div className="px-4 md:px-12">
                {currency && <ExchangeTable currency={currency} />}
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

            <div className="px-4 md:px-12">
                {currency && <Converter currency={currency} />}
            </div>
            <div id="posts" className="grid grid-cols-2 mt-8 px-8 md:px-24">
                {posts.map((post) => (
                    <div className="p-4" key={post.id}>
                        <Link
                            className="hover:text-blue-900"
                            href={route("posts.show", post.slug)}
                        >
                            <img
                                src={`/storage/${post.image}`}
                                alt=""
                                height="714px"
                                width="1218px"
                                className="object-cover w-full h-auto"
                            />
                            <h2 className="md:text-xl font-medium">
                                {post.title}
                            </h2>
                        </Link>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}

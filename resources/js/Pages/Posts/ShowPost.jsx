import Converter from "@/Components/Converter";
import ExhangeTable from "@/Components/ExhangeTable";
import React from "react";

export default function ShowPost({ post, currency }) {
    return (
        <div className="flex">
            <div className="p-4 w-full">
                <div className="flex justify-center">
                    <img
                        className="w-full md:h-96 md:w-96 md:max-w-none object-cover"
                        width="1218"
                        height="714"
                        src={post.image}
                        alt=""
                    />
                </div>
                <div className="p-0 flex flex-col justify-between md:p-4 md:pl-10">
                    <h2 className="text-2xl font-semibold">{post.title}</h2>
                    <p className="my-4 text-lg">{post.content}</p>
                    <div className="w-full h-0.5 bg-black my-2 block md:hidden" />
                    <div className="py-2 md:hidden">
                        <ExhangeTable currency={currency} />
                        <Converter currency={currency} />
                    </div>
                </div>
            </div>

            <div className="h-auto w-0.5 bg-black my-2 hidden md:block" />

            <div className="hidden py-2 px-4 md:block">
                <ExhangeTable currency={currency} />
                <Converter currency={currency} />
            </div>
        </div>
    );
}

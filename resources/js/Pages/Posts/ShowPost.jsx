import Converter from "@/Components/Converter";
import ExhangeTable from "@/Components/ExhangeTable";
import moment from "moment";
import React from "react";
import Markdown from "react-markdown";

export default function ShowPost({ post, currency }) {
    return (
        <div className="flex">
            <div className="p-4 w-full">
                <div className="flex justify-center">
                    <img
                        className="w-full md:h-96 md:w-96 md:max-w-none object-cover"
                        width="1218"
                        height="714"
                        src={`/storage/${post.image}`}
                        alt=""
                    />
                </div>
                <div className="p-0 flex flex-col justify-between md:p-4 md:pl-10">
                    <h1 className="text-2xl font-semibold">{post.title}</h1>
                    <article className="my-4 prose md:prose-xl">
                        <Markdown>{post.content}</Markdown>
                    </article>

                    <div className="flex items-center w-full">
                        <span className="font-bold text-2xl">Comentarios</span>
                        <div className="w-full h-0.5 bg-black my-2 ml-4" />
                    </div>

                    <div className="pl-4 md:pl-10">
                        {post.comments.map((comment) => (
                            <div key={comment.id} className="flex my-8">
                                <div className="ml-2">
                                    <p className="font-semibold">
                                        {comment.user.name}
                                    </p>
                                    <p className="italic text-slate-500 text-sm">
                                        {moment(comment.created_at).fromNow()}
                                    </p>
                                    <p className="text-slate-800 mt-2">
                                        {comment.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-0.5 bg-slate-700 my-2 block md:hidden" />
                    <div className="py-2 md:hidden">
                        <ExhangeTable currency={currency} />
                        <Converter currency={currency} />
                    </div>
                </div>
            </div>

            <div className="h-auto w-0.5 bg-slate-700 my-2 hidden md:block" />

            <div className="hidden py-2 px-4 md:block">
                <ExhangeTable currency={currency} />
                <Converter currency={currency} />
            </div>
        </div>
    );
}

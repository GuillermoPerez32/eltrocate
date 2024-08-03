import moment from "moment";
import React from "react";

export default function AppLayout({ children }) {
    return (
        <>
            <nav className="py-6 px-4 bg-sky-950">
                <ul>
                    <li>
                        <a className="text-3xl text-white" href={route("home")}>
                            <img
                                className="sm:hidden"
                                src="/tq-logo.avif"
                                alt="logo"
                                width="90"
                                height="20"
                            />
                            <img
                                className="max-sm:hidden"
                                src="/tq-logo.avif"
                                alt="logo"
                                width="205"
                                height="46"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
            {children}

            <footer className="bg-sky-950 py-4 px-4 mt-8 text-white text-center">
                <p>&copy; {moment().year()} El TROCATE</p>
            </footer>
        </>
    );
}

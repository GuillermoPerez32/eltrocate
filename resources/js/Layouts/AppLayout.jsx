import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function AppLayout({ children }) {
    const auth = usePage().props.auth;

    return (
        <>
            <nav className="flex py-6 px-4 bg-sky-950">
                <Link className="text-3xl text-white" href={route("home")}>
                    <ApplicationLogo />
                </Link>
                <div className="ml-auto text-white flex items-center gap-4">
                    {auth.user ? (
                        <>
                            <Link
                                href={route("filament.admin.pages.dashboard")}
                            >
                                Admin
                            </Link>
                            <Link
                                href={route("logout")}
                                as="button"
                                method="post"
                            >
                                Cerrar Sesion
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={route("register")}>Registrarse</Link>
                        </>
                    )}
                </div>
            </nav>
            {children}

            <footer className="bg-sky-950 py-4 px-4 mt-8 text-white text-center">
                <p>&copy; {moment().year()} El TROCATE</p>
            </footer>
        </>
    );
}

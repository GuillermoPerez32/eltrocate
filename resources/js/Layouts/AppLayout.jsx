import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function AppLayout({ children }) {
    const auth = usePage().props.auth;

    return (
        <>
            <nav className="flex py-6 px-4 shadow-md">
                <Link href={route("home")}>
                    <ApplicationLogo />
                </Link>
                <div className="font-medium ml-auto flex items-center gap-4">
                    {auth.user ? (
                        <>
                            <a href={route("filament.admin.pages.dashboard")}>
                                Admin
                            </a>
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

            <footer className="font-bold text-lg py-4 px-4 mt-8 text-center">
                <p>&copy; {moment().year()} El TROCATE</p>
            </footer>
        </>
    );
}

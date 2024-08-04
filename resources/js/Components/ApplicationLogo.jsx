export default function ApplicationLogo() {
    return (
        <>
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
        </>
    );
}

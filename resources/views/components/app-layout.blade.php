<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    @vite('resources/css/app.css')

    <title>{{ $title ?? 'El TROCATE' }}</title>
</head>

<body class="scroll-smooth">
    <nav class="py-6 px-4 bg-sky-950">
        <ul>
            <li>
                <a class="text-3xl text-white" href="{{ route('home') }}">
                    <img class="sm:hidden" src="tq-logo.avif" alt="logo"width="90" height="20">
                    <img class="max-sm:hidden" src="tq-logo.avif" alt="logo"width="205" height="46">
                </a>
            </li>
        </ul>
    </nav>
    {{ $slot }}

    <footer class="bg-sky-950 py-4 px-4 mt-8 text-white text-center">
        <p>
            &copy; {{ now()->year }} El TROCATE
        </p>
    </footer>
</body>

</html>

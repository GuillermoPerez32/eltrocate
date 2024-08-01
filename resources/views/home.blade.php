<x-app-layout>
    <div class="flex flex-col md:pt-4 md:px-4 md:flex-row">
        <div>
            <img class="max-w-full h-80 md:h-96 md:w-96 md:max-w-none object-cover" width="1218" height="714"
                src="{{ $posts[0]->image }}" alt="">
        </div>
        <div class="p-4 flex flex-col justify-between md:p-0 md:pl-10">
            <a class="hover:text-blue-900" href="{{ route('posts.show', $posts[0]->slug) }}">
                <h2 class="text-2xl font-semibold">{{ $posts[0]->title }}</h2>
            </a>
            <p class="my-4">{{ $posts[0]->abstract }}</p>
        </div>
    </div>

    <div class="mt-8 max-w-[1000px] px-12 mx-auto">
        <div class="bg-sky-700 h-20 py-4 px-4 flex items-center md:px-8">
            <span class="text-white text-xl font-bold">
                MERCADO INFORMAL DE DIVISAS EN CUBA (TIEMPO REAL)
            </span>
            <div class="ml-auto h-8 w-8">
                <img src="logo-table.avif" alt="" height="155" width="108">
            </div>
        </div>
        <div class="bg-gray-200 pt-2.5 pb-5 px-7">

            <div class="grid grid-cols-2">
                <div class="border-b border-r border-black border-solid flex items-center p-4">
                    <span>1 EUR</span>
                    <div class="ml-4">
                        <img class="h-10 w-auto" src="icon-eu.png" height="40" alt="icon-eu">
                    </div>
                </div>
                <div class="border-b border-black border-solid flex items-center p-4 font-semibold">345.00 CUP</div>


                <div class="border-b border-r border-black border-solid flex items-center p-4">
                    <span>1 USD</span>
                    <div class="ml-4">
                        <img class="h-10 w-auto" src="icon-usa.png" height="40" alt="icon-usa">
                    </div>
                </div>
                <div class="border-b border-black border-solid flex items-center p-4 font-semibold">345.00 CUP</div>


                <div class="border-b border-r border-black border-solid flex items-center p-4">
                    <span>1 MLC</span>
                    <div class="ml-4">
                        <img class="h-10 w-auto" src="icon-mlc.png" height="40" alt="icon-mlc">
                    </div>
                </div>
                <div class="border-b border-black border-solid flex items-center p-4 font-semibold">345.00 CUP</div>
            </div>

            <div class="py-5">
                <div class="mx-auto text-center text-gray-600 text-xl font-semibold italic">
                    {{ now()->format('d/m/Y h:i A') }}
                </div>
            </div>
        </div>
    </div>

    <a href="#convertidor">
        <div class="bg-red-900 text-white text-md font-semibold p-4 w-min mx-auto mt-2 rounded">
            Convertidor
        </div>
    </a>

    <div id="convertidor" class="mt-4 px-12">
        <div class="bg-sky-900 h-20 max-w-[900px] mx-auto py-4 px-4 flex items-center md:px-8">
            <div class="h-8 w-8 flex items-center">
                <img src="logo-table.avif" alt="" height="155" width="108">
            </div>
            <span class="text-white text-xl font-bold ml-4">
                CONVERTIDOR DE MONEDAS
            </span>
        </div>
    </div>

</x-app-layout>

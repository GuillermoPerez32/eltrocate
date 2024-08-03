<x-app-layout>
    <div class="flex flex-col md:pt-4 md:px-4 md:flex-row">
        <div>
            <img class="max-w-full h-80 md:h-96 md:w-96 md:max-w-none object-cover" width="1218" height="714"
                src="{{ $post->image }}" alt="">
        </div>
        <div class="p-4 flex flex-col justify-between md:p-0 md:pl-10">
            <h2 class="text-2xl font-semibold">{{ $post->title }}</h2>
            <p class="my-4">{{ $post->abstract }}</p>
        </div>
    </div>




</x-app-layout>

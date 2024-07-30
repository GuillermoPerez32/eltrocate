<x-app-layout>
    <div class="flex flex-col md:pt-4 md:px-4 md:flex-row">
        <div>
            <img class="max-w-full h-auto md:h-96 md:w-96 md:max-w-none object-cover" width="1218" height="714"
                src="{{ $posts[0]->image }}" alt="">
        </div>
        <div class="p-4 flex flex-col justify-between md:p-0 md:pl-10">
            <a class="hover:text-blue-900" href="{{ route('posts.show', $posts[0]->slug) }}">
                <h2 class="text-2xl font-semibold">{{ $posts[0]->title }}</h2>
            </a>
            <p class="my-4">{{ $posts[0]->abstract }}</p>
        </div>
    </div>

    <div></div>
</x-app-layout>

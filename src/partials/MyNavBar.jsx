import { useLocation } from "@solidjs/router";

const MyNavBar = () => {

      const location = useLocation();
      const active = (path) => path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
    
    return (
        <header class="flex justify-between items-center bg-white shadow-md">
            <div class="">
                <ul class="container flex h-full items-center p-3 text-black">
                    <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                        <a href="/">Home</a>
                    </li>
                    <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
            <div class="">
                <img
                    src="../lengkap-utama.png"
                    alt="Logo"
                    class="w-45 h-12 mb-4"
                />
            </div>
        </header>
    );
};

export default MyNavBar;
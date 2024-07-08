

export default function Header() {
    function toggleMenu() {
        let menu = document.getElementById('mobile-menu')
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden')
        }
        else {
            menu.classList.add('hidden')
        }
    }
    return (
        <header className="w-full flex p-4 bg-stone-950 justify-between text-gray-200 md:pl-32 md:pr-32 bebas-neue-regular">
            <h3 className='text-2xl'>Abdul Raoof</h3>
            <div className="md:flex items-center hidden">
                <a className="text-md mr-5">About Me</a>
                <a className="text-md mr-5">Skills</a>
                <a className="text-md mr-5">Experience</a>
                <a className="text-md mr-5">Training Programs</a>
                <a className="text-md mr-5">Contact Me</a>
                <button className="text-md pt-1 pb-1 pr-4 pl-4 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500  hover:to-orange-500 hover:from-blue-500 hover:ease-linear hover:transition-colors">Hire Me</button>
            </div>
            <div className="flex items-center md:hidden">
                <button className="text-md pt-1 pb-1 pr-4 pl-4 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 mr-5">Hire Me</button>
                <i className="text-xl fa-solid fa-bars cursor-pointer" onClick={toggleMenu}></i>
                <div className="w-full h-full absolute top-0 left-0 hidden" id="mobile-menu" >
                <i className="fa-solid fa-xmark absolute top-2 right-2 text-xl" onClick={toggleMenu}></i>
                    <div className="flex flex-col items-center bg-stone-900 p-4 cursor-pointer">
                        <a className="text-md mb-5 mt-5">About Me</a>
                        <a className="text-md mb-5">Skills</a>
                        <a className="text-md mb-5">Experience</a>
                        <a className="text-md mb-5">Training Programs</a>
                        <a className="text-md mb-5">Contact Me</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
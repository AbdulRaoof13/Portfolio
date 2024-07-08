export default function MainSection() {
    return (
        <section id="main">
            <div className="flex flex-col text-gray-200">
                <div className="flex">
                    <span className="text-8xl">{'{'}</span>
                    <h1 className="text-6xl">Creative &</h1>
                </div>
                <div className="flex">
                    <div className="md:w-9 md:h-5 w-3 h-2 bg-orange-400"><img /></div>
                    <h1 className="text-6xl">Experienced</h1>
                </div>
                <div className="flex">
                    <h1 className="text-6xl">Web Developer</h1>
                    <div className="md:w-9 md:h-5 w-3 h-2 bg-orange-400"><img /></div>
                    <span>{'}'}</span>
                </div>
            </div>
        </section>
    );
}
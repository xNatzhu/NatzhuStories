function Home() {
    return(
        <div className="mx-[150px] ">
            <div>
                <h2>¡Te damos la bienvenida, AgustnSaravia!</h2>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-[30px] mb-[30px]">Los mas <span className="text-[#f55a5c]">populares</span></h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 md:gap-4">
                
                <div className="relative overflow-hidden rounded-md min-w-[244px] w-[244px] snap-start bg-black">
                    <img className="absolute w-full rounded-md aspect-[2.75/4.75]" src="/public/image/al.webp" alt=""/>
                    <div className="card-body">
                        <h6>El Genio Invocador de la Escuela de Nigromantes</h6>
                    </div>
                </div>
                <div className="w-[250px] h-[420px] flex justify-center items-end rounded-md" style={{backgroundImage: 'url("/public/image/al.webp")'}}>
                    <div className="flex px-2">
                        <h6 className="text-center">El Genio Invocador de la Escuela de Nigromantes</h6>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md min-w-[244px] w-[244px] snap-start bg-black">
                    <img className="relative w-full rounded-md aspect-[2.75/4.75]" src="/public/image/al.webp" alt=""/>
                </div>
                <div className="relative overflow-hidden rounded-md min-w-[244px] w-[244px] snap-start bg-black">
                    <img className="relative w-full rounded-md aspect-[2.75/4.75]" src="/public/image/al.webp" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Home;
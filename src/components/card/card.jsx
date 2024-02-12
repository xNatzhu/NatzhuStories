export default function Card() {
    return(
        <div className="card">
            <div className="card-img-container">
                <img src="/public/image/prueba3.webp" className="card-img-top" alt="..." />
            </div>
            <div className="absolute flex top-0 justify-between">
                <div className="bg-[#f55a5c] p-[5px] flex justify-center items-center W-full rounded-e-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart w-[16px] font-extrabold mx-[7px]" viewBox="0 0 16 16" stroke-width="20">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                    <h6 className="mr-[5px]">6.200</h6>
                </div>
            </div>
            <div className="absolute flex flex-col items-center bottom-2 z-[10]">
                <h5 className="text-center mb-[13px]">El Genio Invocador de la Escuela de Nigromantes</h5>
                <div className="w-full flex flex-row items-center justify-around rounded-md">
                <div className="bg-[#16161682]  flex flex-col w-[46%] p-[10px] items-center">
                    <h6>Capitulo 1</h6>
                    <p className="text-[#f55a5c] text-[14px]">Hace 2 Días</p>
                </div>
                <div className="bg-[#16161682] flex flex-col w-[46%] p-[10px] items-center rounded-md">
                    <h6>Capitulo 2</h6>
                    <p className="text-[#f55a5c] text-[14px]">Hace 2 Días</p>
                </div>
                </div>
            </div>
        </div>
    )
}
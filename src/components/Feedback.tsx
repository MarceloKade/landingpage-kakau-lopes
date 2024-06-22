import * as I from '@/utils/Imports';
import * as SVG from './svg/SVG';

export default function Feedback() {
    return (
        <section className="flex flex-col w-[1920px] h-[1442px] bg-third-white">
            <div className="w-[1595px] h-[175px] mt-[61px] mx-auto">
                <div className="flex flex-col w-[1196px] h-[172px]">
                    <I.Text
                        text="Experiência"
                        className="w-[216.07px] h-[19px] font-inter font-bold text-[13.88px] leading-[25.6px] text-black" tag="p"
                    />

                    <I.Text
                        text="Cada uma com seu preferido, todas com Kakau Lopes."
                        className="w-[1196px] h-[52px] font-inter font-bold text-[43.69px] leading-[52.8px] text-black" tag="p"
                    />
                    <div className='flex justify-between w-[1595px] h-[44px] mt-auto'>
                        <I.Text
                            text="Foco na experiência, na qualidade e em você."
                            className="flex items-center w-[844px] h-[44px] font-inter font-normal text-[16px] leading-[25.6px] text-black" tag="p"
                        />
                        <div className='flex w-[253px] h-[48px]'>
                            <I.Text
                                text="Ir para o canal"
                                className="flex items-center w-[182px] h-[44px] font-inter font-semibold text-[16px] leading-[25.6px] text-black ml-auto" tag="p"
                            />
                            <a href='#' className='right-0 flex justify-center items-center rounded-full w-[48px] h-[48px] bg-white ml-auto'>
                                <SVG.ArrowIcon fill='black' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-[1600px] h-[516.8px] mt-[30px] mx-auto'>
                <a href='#' className='relative flex justify-center items-center w-[516px] h-[516px]'>
                    <div className='absolute w-[93.02px] h-[93.02px] mt-16'>
                        <div className='flex justify-center items-center w-full h-full rounded-full bg-white/40 '>
                            <div className='flex justify-center items-center w-[60.34px] h-[60.34px] rounded-full bg-red '>
                                <div className='relative w-[10px] h-[20.97px] overflow-hidden flex justify-center items-center'>
                                    <div className='absolute h-[30px] mb-2 ml-[6px] mr-[6px] border-white border-l-2 -rotate-45'></div>
                                    <div className='absolute h-[30px] mb-[17px] ml-[6px] mr-[2px] border-red border-l-8 -rotate-45 z-10'></div>
                                    <div className='absolute h-[20px] border-white mr-[9px] border-l-2'></div>
                                    <div className='absolute h-[30px] mt-2 ml-[6px] mr-[6px] border-white border-l-2 rotate-45'></div>
                                    <div className='absolute h-[30px] mt-[17px] ml-[6px] mr-[2px] border-red border-l-8 rotate-45'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 mb-[147.7px]'>
                        <I.Text
                            text="TUTORIAL"
                            className=" flex justify-center items-center w-[137px] h-[34.11px] font-inter font-bold text-[14.38px] leading-[25.6px] text-white "
                            tag="p"
                        />
                    </div>
                    <div className='absolute bottom-0 mb-[38.64px]'>
                        <I.Text
                            text="Minha rotina de Skincare"
                            className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white text-center"
                            tag="p"
                        />
                    </div>
                    <I.Image src={I.imagemEsquerda} alt="imagem_esquerda" />
                </a>
                <a href='#' className='relative flex justify-center items-center w-[516px] h-[516px]'>
                    <div className='absolute w-[93.02px] h-[93.02px] mt-16'>
                        <div className='flex justify-center items-center w-full h-full rounded-full bg-white/40 '>
                            <div className='flex justify-center items-center w-[60.34px] h-[60.34px] rounded-full bg-red '>
                                <div className='relative w-[10px] h-[20.97px] overflow-hidden flex justify-center items-center'>
                                    <div className='absolute h-[30px] mb-2 ml-[6px] mr-[6px] border-white border-l-2 -rotate-45'></div>
                                    <div className='absolute h-[30px] mb-[17px] ml-[6px] mr-[2px] border-red border-l-8 -rotate-45 z-10'></div>
                                    <div className='absolute h-[20px] border-white mr-[9px] border-l-2'></div>
                                    <div className='absolute h-[30px] mt-2 ml-[6px] mr-[6px] border-white border-l-2 rotate-45'></div>
                                    <div className='absolute h-[30px] mt-[17px] ml-[6px] mr-[2px] border-red border-l-8 rotate-45'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 mb-[147.7px]'>
                        <I.Text
                            text="MÁSCA DE CÍLIOS"
                            className=" flex justify-center items-center w-[137px] h-[34.11px] font-inter font-bold text-[14.38px] leading-[25.6px] text-white "
                            tag="p"
                        />
                    </div>
                    <div className='absolute bottom-0 mb-[38.64px]'>
                        <I.Text
                            text="Minha querida MAG!"
                            className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white text-center"
                            tag="p"
                        />
                    </div>
                    <I.Image src={I.imagemCentro} alt="imagem_centro" />
                </a>
                <a href='#' className='relative flex justify-center items-center w-[516px] h-[516px]'>
                    <div className='absolute w-[93.02px] h-[93.02px] mt-16'>
                        <div className='flex justify-center items-center w-full h-full rounded-full bg-white/40 '>
                            <div className='flex justify-center items-center w-[60.34px] h-[60.34px] rounded-full bg-red '>
                                <div className='relative w-[10px] h-[20.97px] overflow-hidden flex justify-center items-center'>
                                    <div className='absolute h-[30px] mb-2 ml-[6px] mr-[6px] border-white border-l-2 -rotate-45'></div>
                                    <div className='absolute h-[30px] mb-[17px] ml-[6px] mr-[2px] border-red border-l-8 -rotate-45 z-10'></div>
                                    <div className='absolute h-[20px] border-white mr-[9px] border-l-2'></div>
                                    <div className='absolute h-[30px] mt-2 ml-[6px] mr-[6px] border-white border-l-2 rotate-45'></div>
                                    <div className='absolute h-[30px] mt-[17px] ml-[6px] mr-[2px] border-red border-l-8 rotate-45'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 mb-[147.7px]'>
                        <I.Text
                            text="PELE PERFEITA"
                            className=" flex justify-center items-center w-[137px] h-[34.11px] font-inter font-bold text-[14.38px] leading-[25.6px] text-white "
                            tag="p"
                        />
                    </div>
                    <div className='absolute bottom-0 mb-[38.64px]'>
                        <I.Text
                            text="Serum é vida"
                            className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white text-center"
                            tag="p"
                        />
                    </div>
                    <I.Image src={I.imagemDireita} alt="imagem_direita" />
                </a>

            </div>
            <div className='flex flex-col w-[964px] h-[530.16px] mt-[79.2px] mx-auto'>
                <div className='flex justify-center items-center w-[178.23px] h-[178.23px] gradient-border mx-auto'>
                    <div className='w-[168.56px] h-[168.56px] overflow-hidden rounded-full'>
                        <I.Image src={I.feedback} alt="feedback" />
                    </div>
                </div>
                <div className='w-[1000px] h-[163px] mt-[28.67px] flex flex-col'>

                    <I.Text
                        text="O produto é simplesmente fantástico! Não deixa absolutamente nada a desejar a nenhum importado.
                    Além disso a embalagem é super fofa e ainda recebi um batom de brinde. Todos os produtos que já adquiri da Kakau são impecáveis! Recomendadíssimo."
                        className="font-inter font-semibold text-[26px] leading-[38px] text-black text-center mx-auto"
                        tag="p"
                    />
                    <div>
                        <div className='flex items-center w-[124.2px] h-[18.95px] mt-[10.84px] mx-auto'>
                            <I.Image src={I.ok2} alt="ok2" />
                            <I.Text
                                text="Nathalia C."
                                className="pl-[4.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-black" tag="p"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-[186px] h-[48px] mt-[68.16px] mx-auto'>

                    <button className='left-0 flex justify-center items-center rounded-full w-[48.11px] h-[50px] border border-silver rotate-180'>
                        <SVG.ArrowIcon fill='black' />
                    </button>
                    <div className='flex justify-between w-[50px] h-[6px] my-auto'>
                        <div className='w-[6px] h-[6px] bg-black rounded-full'></div>
                        <div className='w-[6px] h-[6px] bg-black/30 rounded-full'></div>
                        <div className='w-[6px] h-[6px] bg-black/30 rounded-full'></div>
                    </div>
                    <button className='left-0 flex justify-center items-center rounded-full w-[48.11px] h-[50px] border border-silver'>
                        <SVG.ArrowIcon fill='black' />
                    </button>
                </div>
            </div>

        </section>
    )
}
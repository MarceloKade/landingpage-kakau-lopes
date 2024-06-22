'use client'
import * as I from '@/utils/Imports';
import * as SVG from '@/components/svg/SVG';

export function KakauEnsina() {
    return (
        <section className="flex flex-col w-[1920px] h-[1392px] bg-second-pink">

            <div className='flex w-[1595px] h-[195px] ml-[160px] mt-[50px]'>

                <div className='w-[844px] h-[192px]'>

                    <I.Text
                        text="#VOCÊTAMBÉMPODE"
                        className="w-[216.07px] h-[19px] font-asap font-bold text-xl leading-[25.6px] text-white"
                        tag="p"
                    />
                    <I.Text
                        text="Kakau ensina"
                        className="w-[751px] h-[52px] mt-[45px] font-karantina font-bold text-8xl leading-[52.8px] text-primary-yellow flex items-center"
                        tag="h2"
                    />
                    <I.Text
                        text="Aprenda a utilizar os produtos como uma verdadeira profissional!"
                        className="w-[844px] h-[44px] mt-[32px] font-asap font-normal text-[32px] leading-[25.6px] text-white flex items-center"
                        tag="p"
                    />
                </div>
                <div className='flex w-[293px] h-[48px] mx-auto mt-auto'>
                    <I.Text
                        text="Acesse o canal"
                        className="w-[222px] h-[44px] font-asap font-semibold text-2xl leading-[25.6px] text-white flex items-center justify-end"
                        tag="p"
                    />
                    <ul className='right-0 rounded-full w-[48px] h-[48px] bg-white ml-auto'>
                        <a href="#" className="flex justify-center items-center w-full h-full text-white transition-colors duration-300 mx-auto">
                            <SVG.ArrowIcon fill='black' />
                        </a>
                    </ul>


                </div>
            </div>
            <ul className='w-[1595px] h-[932.08px] mt-[31px] mx-auto'>
                <li className='flex justify-between w-full h-full mx-auto'>
                    <a href="#" className='relative flex flex-col justify-center items-center w-[525.85px] h-[932.08px]'>
                        <div className='absolute w-[93.02px] h-[93.02px] mt-16'>
                            <div className='flex justify-center items-center w-full h-full rounded-full bg-white/40 '>
                                <div className='flex flex-col justify-center items-center w-[60.34px] h-[60.34px] rounded-full bg-red'>
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
                                className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white "
                                tag="p"
                            />
                        </div>

                        <I.Image src={I.videoEsquerda} alt="video_esquerda" />
                    </a>
                    <a href="#" className='relative flex justify-center items-center w-[525.85px] h-[932.08px]'>
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
                                className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white "
                                tag="p"
                            />
                        </div>
                        <I.Image src={I.videoCentro} alt="video_centro" />
                    </a>
                    <a href="#" className='relative flex justify-center items-center w-[525.85px] h-[932.08px]'>
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
                                className=" flex justify-center items-center w-[292.76px] h-[88.05px] font-inter font-bold text-[32.48px] leading-[43.2px] text-white "
                                tag="p"
                            />
                        </div>
                        <I.Image src={I.videoDireita} alt="video_direita" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
'use client'
import * as I from '@/utils/Imports';
import * as SVG from '@/components/svg/SVG';
import * as M from '@/components/Map';
import * as C from '@/components/section3/Conteiner';

export default function KitCompleat() {
    return (
        <C.Section>
            <C.SectionContainer>
                <C.PrimaryTextBox>
                    <h2 className="w-[766px] h-[226px] font-karantina font-bold text-[96px] leading-[80px] text-primary-yellow flex items-center">Kit Completo + brinde</h2>


                    <p className="w-[1330px] h-[159px] font-asap font-normal text-[32px] leading-[46px] text-white">Não perca esta oportunidade de levar para casa o kit completo com a paleta mais versátil do mercado e os melhores iluminadores do mundo com uma necessaire exclusiva super fofa da coleção.</p>
                </C.PrimaryTextBox>

                <C.BoxInfo>

                    <C.ImagesContainer>
                        <I.Image src={I.paleta} alt={"paleta"} className="w-[58px] h-[57px] mb-[8px] opacity-60 rounded-3xl" />
                        <div className='w-[64px] mb-[2px] border border-x-2 border-black rounded-3xl mx-auto'></div>
                        <I.Image src={I.kkMaqui} alt={"kkMaqui"} className="w-[73px] h-[50px]" />
                    </C.ImagesContainer>
                    <C.BoxImage>
                        <I.Image src={I.kit} alt={"kit"} className="w-[646px] h-[646px]" />

                    </C.BoxImage>
                    <button className='flex relative justify-center items-center w-[44.8px] h-[44.8px] border border-black border-opacity-10 my-auto mb-36 rounded-full'>
                        <SVG.ZoomIcon />
                    </button>
                    <C.TextBox>
                        <p
                            className="font-inter font-normal text-[14.63px] leading-[25.6px] text-black">Maquiagem &gt; Face &gt; Paleta de Blush &gt;</p>
                        <h2
                            className="w-[448.62px] font-inter font-bold text-[43.13px] leading-[52.8px] text-black">COLEÇÃO DONUT STOP BELIEVING</h2>
                        <div className='flex w-[257.25px] h-6 gap-1 mt-4'>
                            <p className="font-inter font-medium text-[16px] leading-[22.4px] text-black">Avaliação:</p>
                            <p className="font-inter font-medium text-[16px] leading-[22.4px] text-black">5/5</p>
                            <M.StarMap />
                        </div>
                        <C.ConteinerPrice>
                            <C.BoxPrice>
                                <p className="font-inter font-normal text-[12.58px] leading-[25.6px] text-black">Preço</p>
                                <p className="font-inter font-bold text-[25px] leading-[32px] text-four-pink">R$510,00</p>
                                <p className="font-inter font-bold text-[14px] leading-[32px] text-black">10 x de R$19,00 sem juros</p>
                                <C.BoxFrete>
                                    <SVG.Car />
                                    <p className="font-inter font-bold text-[12.58px] leading-[22.4px]  text-black" >Frete Grátis</p>
                                </C.BoxFrete>
                            </C.BoxPrice>
                            <div className='flex flex-col ml-auto pr-6 pt-[15px]'>
                                <p className="font-inter font-normal text-[12.58px] leading-[25.6px] text-black">Quantidade:</p>
                                <div className='flex justify-between items-center w-[145px] h-[50px] bg-white border border-black border-opacity-10 rounded-3xl'>
                                    <button className='flex justify-center items-center w-[58px] h-[48px]'>
                                        <div className='w-[10px] border border-b-1 border-black'></div>
                                    </button>
                                    <p className="font-inter font-medium text-[16px] leading-[25.6px] text-black">1</p>
                                    <button className='relative flex justify-center items-center w-[58px] h-[48px]'>
                                        <div className='absolute w-[10px] border border-b-1 border-black rotate-90'></div>
                                        <div className='absolute w-[10px] border border-b-1  border-black'></div>
                                    </button>
                                </div>
                                <div className='flex items-center w-[124.2px] h-[18.95px] mt-[10.84]'>
                                    <I.Image src={I.ok} alt="ok" />
                                    <p className="pl-[12.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-second-blue">Em estoque</p>
                                </div>
                            </div>
                        </C.ConteinerPrice>
                        <I.Text
                            text={
                                `Aproveite esse combo incrível e leve para casa a coleção completa Donut Stop Believing!<br/>
                                        <br/>
                                        O Kit contém:<br/>
                                        <br/>
                                        01 Paleta de Blush, Sombra e Iluminador Donut Stop Believing<br/>
                                        01 Iluminador Facial de brilho perolado, intenso e duradouro<br/>
                                        01 Iluminador Corporal deslumbrante de cor levemente bronzeada<br/>
                                        01 Necessaire Exclusiva da coleção<br/>
                                        <br/>
                                        Aproveite, este combo é por tempo limitado!`
                            }
                            className="w-[506px] h-[316px] mt-7 ml-[21px] font-asap font-normal text-[18px] text-black"
                            tag="p"
                            isHtml={true}
                        />
                        <button className="flex w-[564px] h-[73px] mt-[64px] justify-center items-center rounded-full bg-primary-yellow">
                            <I.Image src={I.buyCart} alt={"BuyCart"} className="w-[30px] h-[30px]" />
                            <p className="text-primary-pink font-asap text-[32px] font-bold pl-3 pt-[6px]">Comprar</p>
                        </button>
                    </C.TextBox>
                </C.BoxInfo>
            </C.SectionContainer>
            <div className='flex px-6 gap-[6.83px] mt-[74px]'>
                <M.LogoMap />
            </div>
        </C.Section>
    )
}
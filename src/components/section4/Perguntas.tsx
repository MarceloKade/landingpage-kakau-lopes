'use client'
import * as I from '@/utils/Imports';
export function Perguntas() {
    return (
        <section>
            <div className="w-[844px] h-[192px] ml-[171px] mt-[86px]">
                <I.Text
                    text="DÚVIDAS"
                    className="w-[216.07px] h-[19px] font-asap font-bold text-xl leading-[25.6px] text-white flex items-center"
                    tag="p"
                />
                <I.Text
                    text="Perguntas frequentes"
                    className="w-[751px] h-[52px] mt-[45px] font-karantina font-bold text-8xl leading-[52.8px] text-primary-yellow flex items-center"
                    tag="h2"
                />
                <I.Text
                    text="Eles não param no estoque e são os queridinhos de nossas clientes!"
                    className="w-[844px] h-[44px] mt-[32px] font-asap font-normal text-[32px] leading-[25.6px] text-white flex items-center"
                    tag="p"
                />
            </div>
            <div className='flex w-[1600px] h-[598.56px] mt-[30.05px] rounded-3xl mx-auto bg-white'>
                <div className='flex flex-col items-center justify-center w-[680px] h-[438.56px] mt-[80px] ml-[83px]'>
                    <button className='flex items-center w-[584px] h-[66.59px] border-b-2 border-black'>
                        <I.Text
                            text="Tem cupom de 1ª compra?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                    <button className='flex items-center w-[584px] h-[66.59px] border-b-2 border-black'>
                        <I.Text
                            text="De onde é a Kakau Lopes?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                    <button className='flex items-center w-[584px] h-[66.59px] border-b-2 border-black'>
                        <I.Text
                            text="Qual a minha cor ideal de corretivo e base?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                    <button className='flex items-center w-[584px] h-[66.59px] border-b-2 border-black'>
                        <I.Text
                            text="Tem loja física?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                    <button className='flex items-center w-[584px] h-[66.59px] border-b-2 border-black'>
                        <I.Text
                            text="Qual a política de devolução?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                    <button className='flex items-center w-[584px] h-[66.59px]'>
                        <I.Text
                            text="Como rastrear meu pedido?"
                            className="w-full h-full font-asap font-medium text-[14.38px] leading-[25.6px] text-black flex items-center"
                            tag="p"
                        />
                        <I.Image src={I.setaBlack} alt={"setaBlack"} className="w-[8px] h-[6px] rotate-90" />
                    </button>
                </div>

                <div className='relative flex flex-col mt-[78px] ml-[156px]'>
                    <I.Text
                        text="Em dúvida? 
                        <br/> Estamos aqui para te ajudar."
                        className="w-[655.56px] h-[107.8px] font-asap font-bold text-[43.5px] leading-[52.8px] text-black flex items-center"
                        tag="h3"
                        isHtml={true}
                    />
                    <div className='flex w-[454px] h[108px]  gap-1 '>

                        <I.Text
                            text="Nosso suporte está:"
                            className="font-asap font-bold text-[14.5px] leading-[25.6px] text-black"
                            tag="p"
                        />
                        <I.Text
                            text="disponível"
                            className="font-asap font-bold text-[14.5px] leading-[25.6px] text-green"
                            tag="p"
                        />
                    </div>
                    <I.Image src={I.close} alt={"close"} className="w-[431px] h-[265px] absolute right-0 bottom-0 mr-[209px] mb-[87.61px]" />
                </div>
            </div>

        </section>
    )
}
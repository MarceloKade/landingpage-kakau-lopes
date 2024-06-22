'use client'
import * as I from '@/utils/Imports';
import * as SVG from './svg/SVG';
import Link from 'next/link';

export function Footer() {

    return (
        <footer className="w-[1920px] h-[749.97px]">
            <div className="flex justify-center items-center w-[1920px] h-[213.59px] bg-primary-yellow">
                <div className="flex justify-between w-[1527.63px] h-[117.59px]">
                    <div className="flex flex-col justify-between w-[351.91px] h-[117.59px]">
                        <I.Image priority={true} src={I.gps} alt="gps" />
                        <p
                            className="pl-[4.2px] font-inter font-bold text-xl leading-[25.6px] text-black"
                        >Idealizada no Céu. Feita no Brasil</p>
                        <p
                            className="pl-[4.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-black">Da nossa vida para a sua.</p>
                    </div>
                    <div className="flex flex-col justify-between w-[351.91px] h-[117.59px]">
                        <I.Image priority={true} src={I.world} alt="world" />
                        <p
                            className="pl-[4.2px] font-inter font-bold text-2xl leading-[28px] text-black"
                        >Envio global</p>
                        <p
                            className="pl-[4.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-black">We delivery! O mundo é nossa casa.</p>
                    </div>
                    <div className="flex flex-col justify-between w-[351.91px] h-[117.59px]">
                        <I.Image priority={true} src={I.question} alt="question" />
                        <p
                            className="pl-[4.2px] font-inter font-bold text-2xl leading-[28px] text-black"
                        >Dúvidas?</p>
                        <p
                            className="pl-[4.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-black">Fale com nossas Angels</p>
                    </div>
                    <div className="flex flex-col justify-between w-[351.91px] h-[117.59px]">
                        <I.Image priority={true} src={I.sale} alt="sale" />
                        <p
                            className="pl-[4.2px] font-inter font-bold text-2xl leading-[28px] text-black"
                        >Pagamento seguro</p>
                        <p
                            className="pl-[4.2px] font-inter font-normal text-[14.38px] leading-[25.6px] text-black">Seu pagamento está seguro conosco.</p>
                    </div>
                </div>
            </div>


            <div className="relative flex w-[1920px] h-[536.38px] bg-fifth-pink">
                <div className='flex flex-col mt-[52.41px] ml-[168px] '>
                    <I.Image priority={true} src={I.kakau} alt="kakau" />
                    <p className="w-[565px] h-[85px] mt-[51.5px] font-asap font-bold text-[32.77px] leading-[43.2px] text-white">Inscreva-se para novidade & leve 10%off  na sua primeira compra.</p>
                    <form className='flex items-center justify-between w-[502px] h-[60px] mt-[25.13px] rounded-lg border'>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="flex-grow h-[40px] ml-[21px] font-asap font-normal text-[15.25px] leading-[25.6px] text-white/50 bg-transparent border-none outline-none placeholder-white/50"
                            required
                        />
                        <button
                            type="submit"
                            aria-label="Submit email"
                            className='flex justify-center items-center w-[24px] h-[24px] mr-[21px] pr-1 rounded-full bg-white/50 cursor-pointer'
                        >
                            <SVG.ArrowIcon width={8} fill='white' />
                        </button>
                    </form>
                    <p className="w-[508px] h-auto font-asap mt-[18px] font-normal text-[14px] leading-[18px] text-white">Ao inscrever-se você autoriza a Kakau Lopes Cosméticos a lhe enviar conteúdo eletrônico via e-mail e ou telefônico, contendo novidades, cupons, promoções, lançamentos e outras formas de comunicação estritamente institucionais. Alguns cupons e promoções podem ter validade e cobertura limita, sendo válidos apenas em alguns Estados ou ainda vinculados a valores mínimos de pedidos. Não fique em dúvida, se precisar de ajuda, utilize nosso sac@kakaulopes.com.br ou através de nosso chat. </p>
                </div>
                <div className='w-[142px] h-[253.3px] mt-[66.41px] ml-[217px] '>
                    <p className="w-[142px] h-[19px] font-asap font-bold text-2xl leading-[25.6px] text-white">Shop online</p>
                    <ul className='flex flex-col mt-[31.3px] gap-3'>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Maquiagem</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Skincare</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Presentes e Kits</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Acessórios</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-[152.37px] h-[206.3px] mt-[66.41px] ml-[191px]'>
                    <p className="w-[140px] h-[19px] font-asap font-bold text-2xl leading-[25.6px] text-white">Sobre Você</p>
                    <ul className='flex flex-col mt-[31.3px] gap-3'>

                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Sua conta</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Rastrear Pedido</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Garantia e</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Devolução</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Encontre sua cor</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-[152.37px] h-[206.71px] mt-[66.41px] ml-[191.63px] '>
                    <p className="w-[140px] h-[19px] font-asap font-bold text-2xl leading-[25.6px] text-white"
                    >Sobre Nós</p>
                    <ul className='flex flex-col mt-[31.3px] gap-3'>

                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Nossa História</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Nossas Lojas</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">Trabalhe Conosco</Link>
                        </li>
                        <li className="w-[142px] h-[19px] font-asap font-normal text-xl leading-[36px] text-white">
                            <Link href="#" className="text-white transition-colors duration-300 hover:text-yellow-500">FAQ</Link>
                        </li>

                    </ul>
                </div>
                <ul className='absolute flex justify-between w-[231px] h-[27px] mx-auto bottom-0 right-0 mb-[168.97px] mr-[166px]'>
                    <li>
                        <Link href="#">
                            <I.Image priority={true} src={I.facebook} alt="facebook" className="transition-transform duration-300 transform hover:scale-125" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <I.Image priority={true} src={I.twitter} alt="twitter" className="transition-transform duration-300 transform hover:scale-125" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <I.Image priority={true} src={I.instagram} alt="instagram" className="transition-transform duration-300 transform hover:scale-125" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <I.Image priority={true} src={I.youtube} alt="youtube" className="transition-transform duration-300 transform hover:scale-125" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <I.Image priority={true} src={I.spotify} alt="spotify" className="transition-transform duration-300 transform hover:scale-125" />
                        </Link>
                    </li>
                </ul>

                <div className='absolute w-[305.97px] h-[16px]  mx-auto bottom-0 right-0 mb-[28.97px] mr-[110.03px]'>
                    <p className="w-[305.97px] h-[19px] font-inter font-normal text-[12.58px] leading-[22.4px] text-white"
                    >© 2024, Kakau Lopes. Powered by Shopify</p>
                </div>
            </div>
        </footer>
    )
}
'use client'
import * as I from '@/utils/Imports';
import * as M from '@/components/Map';

export default function Tabela() {
    return (
        <table className="w-[1333px] h-[453px] mx-auto overflow-hidden mb-[50px]">
            <thead className='rounded-3xl'>
                <tr className='border-b-[3px] border-white'>
                    <th>

                    </th>
                    <th className='w-[243px] bg-white rounded-tl-3xl rounded-tr-3xl'>
                        <I.Image src={I.kakau} alt="kakau" className='mx-auto pt-[33px] pb-[26px] bg-third-black invert' />
                    </th>
                    <th className='w-[243px]'>
                        <I.Image src={I.nars} alt="nars" className='mx-auto' />
                    </th>
                    <th className='w-[243px]'>
                        <I.Image src={I.mac} alt="mac" className='mx-auto' />
                    </th>
                    <th className='w-[243px]'>
                        <I.Image src={I.chanel} alt="chanel" className='mx-auto' />
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr className='border-b-[1px] border-white'>
                    <td className='w-[243px]'>
                        <p className='font-asap text-white leading-[25.6px] text-2xl'>Componentes de alto desempenho e qualidade</p>
                    </td>
                    <td className=' bg-white'>
                        <I.Image src={I.check} alt="check" className='mx-auto bg-third-black invert' />
                    </td>
                    <M.Check count={3} />
                </tr>
                <tr className='border-b-[1px] border-white'>
                    <td className='w-[243px]'>
                        <p className='font-asap text-white leading-[25.6px] text-2xl w-[315px]'>Testado  em clima tropical</p>
                    </td>
                    <td className=' bg-white'>
                        <I.Image src={I.check} alt="check" className='mx-auto bg-third-black invert' />
                    </td>
                    <M.Xmark count={3} />
                </tr>
                <tr className='border-b-[1px] border-white'>
                    <td className='w-[243px]'>
                        <p className='font-asap text-white leading-[25.6px] text-2xl w-[315px]'>Projetado para o tom de  pele da brasileira</p>
                    </td>
                    <td className=' bg-white'>
                        <I.Image src={I.check} alt="check" className='mx-auto bg-third-black invert' />
                    </td>
                    <M.Xmark count={3} />
                </tr>
                <tr className='border-b-[1px] border-white'>
                    <td className='w-[243px]'>
                        <p className='font-asap text-white leading-[25.6px] text-2xl w-[315px]'>Vegana, livre de parabenos e não testada em animais</p>
                    </td>
                    <td className=' bg-white'>
                        <I.Image src={I.check} alt="check" className='mx-auto bg-third-black invert' />
                    </td>
                    <M.Xmark count={3} />
                </tr>
                <tr className='border-b-[3px] border-white'>
                    <td className='w-[243px]'>
                        <p className='font-asap text-white leading-[25.6px] text-2xl w-[315px]'>Preço</p>
                    </td>
                    <td className='bg-white'>
                        <M.Dollar count={3} className='bg-third-black invert' />
                    </td>
                    <td>
                        <div className='flex border-black mx-auto w-[120px]'>
                            <M.Dollar count={4} />
                        </div>
                    </td>
                    <td>
                        <div className='flex border-black mx-auto w-[80px]'>
                            <M.Dollar count={3} />
                        </div>
                    </td>
                    <td>
                        <div className='flex border-black mx-auto w-[140px]'>
                            <M.Dollar count={5} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className='bg-white rounded-bl-3xl rounded-br-3xl pb-[14px]'></td>
                </tr>
            </tbody>
        </table >


    )
}
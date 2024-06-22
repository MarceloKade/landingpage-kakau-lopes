'use client'
import { KakauEnsina } from './KakauEnsina';
import { Perguntas } from './Perguntas';
import Tabela from './Tabela';
import * as I from '@/utils/Imports';

export function Hot() {
    return (
        <section className="flex flex-col w-[1920px] h-[3494px] bg-fifth-pink">
            <div className='w-[1395px] h-[495px] pl-[160px]'>
                <I.Text
                    text="Respeito por você, nossa história e pela natureza"
                    className="w-[766px] h-[226px] font-karantina font-bold text-8xl leading-[80px] text-primary-yellow flex items-center"
                    tag="h2"
                />
                <I.Text
                    text="A Kakau Lopes se orgulha por desenvolver cosméticos que celebram a vida, a diversidade e a beleza única da mulher brasileira.
                         Nossos produtos respeitam a natureza e refletem a riqueza das influências étnicas que compõem nossa herança estética e cultural."
                    className="w-[1395px] h-[201px] font-asap font-normal text-[32px] leading-[46px] text-white flex items-center"
                    tag="h2"
                />
            </div>
            <Tabela />
            <KakauEnsina />
            <Perguntas />
        </section>
    )
}
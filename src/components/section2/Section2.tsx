'use client'
import * as I from '@/utils/Imports';
import * as C from '@/components/section2/Conteiner';
import * as T from '@/components/section2/Text';

import { InfoBox } from './InfoBox';

export default function FindItOut() {
    return (
        <C.Section>
            <C.GenericBox>
                <C.TextBox>
                    <T.Title />
                    <T.Description />
                </C.TextBox>
                <C.PaletaBox>
                    <I.Image priority={true} src={I.kkMaqui} alt="Maquiagem" />
                </C.PaletaBox>
                <C.CarimboBox>
                    <I.Image priority={true} src={I.coelho} alt="Coelho" />
                    <I.Image priority={true} src={I.galho} alt="galho" />
                    <I.Image priority={true} src={I.octagonal} alt="octagonal" />
                </C.CarimboBox>

            </C.GenericBox>
            <C.ModelBox>
                <I.Image priority={true} src={I.modelos} alt="modelos" />
                <C.BlackBox>
                    <C.InfoConteiner>
                        <InfoBox
                            title="PALETA DE SOMBRAS E BLUSH"
                            subtitle="DONUT STOP BELIEVING"
                            description="(4 CORES)"
                            imageUrl={I.paleta}
                            value='R$190,00'
                            installment='10 x de R$21,00'
                        />
                        <InfoBox
                            title="ILUMINADOR FACIAL"
                            subtitle="ILLUMINATED"
                            description="FACE (3G)"
                            imageUrl={I.iluminador}
                            value='140,00'
                            installment='10 x de R$15,00'
                        />
                        <InfoBox
                            title="PALETA DE SOMBRAS E BLUSH"
                            subtitle="ILLUMINATED"
                            description="BODY (3G)"
                            imageUrl={I.puff}
                            value='210,00'
                            installment='10 x de R$23,00 '
                        />
                    </C.InfoConteiner>
                </C.BlackBox>
            </C.ModelBox>
        </C.Section>
    )
}

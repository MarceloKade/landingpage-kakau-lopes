'use client'
import React from 'react';
import * as C from './Conteiner';
import * as T from './Text';
import * as E from './Elements';




export function SectionKakau() {
    return (
        <C.Section>
            <C.TextBox>
                <T.Title />
                <T.SubTitle />
                <T.Description />
            </C.TextBox>
            <C.ButtonBox>
                <E.Button />
                <T.TextPrice />
            </C.ButtonBox>
        </C.Section>
    );
}

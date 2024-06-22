'use client'
import * as C from '@/components/header/ContainerHeader';
import * as E from '@/components/header/Elements';

export function Header() {
    return (
        <C.ContainerHeader>
            <C.ContainerNav>
                <E.LinkLogo />
                <C.ContainerMenu>
                    <E.ButtonSearch />
                    <E.LinkUser />
                    <E.LinkCesto />
                </C.ContainerMenu>
            </C.ContainerNav>
        </C.ContainerHeader>
    );
}

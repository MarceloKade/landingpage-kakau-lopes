import { ReactNode } from "react"
import * as I from '@/utils/Imports';

type Props = {
    children: ReactNode;
}

function Section({ children }: Props) {
    return (
        <section className="flex flex-col h-[1403px] bg-second-black">
            {children}
        </section>
    );
}
function SectionContainer({ children }: Props) {
    return (
        <section className="w-[1600px] h-[1276px] ml-[160px]">
            {children}
        </section>
    );
}
function PrimaryTextBox({ children }: Props) {
    return (
        <div
            className="w-[1391px] h-[376px] ml-[24px]">
            {children}
        </div>
    );
}
function BoxInfo({ children }: Props) {
    return (
        <div
            className="flex w-[1600px] h-[887px] bg-white rounded-3xl">
            {children}
        </div>
    );
}
function ImagesContainer({ children }: Props) {
    return (
        <div
            className="flex flex-col items-center justify-between w-[73px] h-[129.02px] ml-[37px] mt-[48.98px]">
            {children}
        </div>
    );
}
function BoxImage({ children }: Props) {
    return (
        <div
            className="mt-[76px] ml-[44px]">
            {children}
        </div>
    );
}
function StarsContainer({ children }: Props) {
    return (
        <div
            className="mt-[76px] ml-[44px]">
            {children}
        </div>
    );
}
function TextBox({ children }: Props) {
    return (
        <div
            className="flex flex-col w-[600px] h-[810px] ml-auto mt-[52px]">
            {children}
        </div>
    );
}
function ConteinerPrice({ children }: Props) {
    return (
        <div
            className="flex w-[556px] h-[139.02px] mt-[18.66px] bg-second-white rounded-3xl">
            {children}
        </div>
    );
}
function BoxPrice({ children }: Props) {
    return (
        <div
            className="flex flex-col w-[235px] pl-6 pt-[15px]">
            {children}
        </div>
    );
}
function BoxFrete({ children }: Props) {
    return (
        <div
            className="flex w-[153.11px] h-6 justify-center gap-4 border">
            {children}
        </div>
    );
}
function ButtonBox({ children }: Props) {
    return (
        <div
            className="flex flex-col w-[445px] h-[122px] mb-[123px] mr-[227px]">
            {children}
        </div>
    );
}

export {
    Section,
    SectionContainer,
    PrimaryTextBox,
    BoxInfo,
    ImagesContainer,
    BoxImage,
    StarsContainer,
    TextBox,
    ConteinerPrice,
    ButtonBox,
    BoxPrice,
    BoxFrete
}
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

function Section({ children }: Props) {
    return (
        <section
            className="flex flex-col w-[1920px] h-[2368px] gradient-bg overflow-hidden"

        >
            {children}
        </section>
    );
}
function TextBox({ children }: Props) {
    return (
        <div
            className="w-[828px] h-[623px]">
            {children}
        </div>
    );
}
function GenericBox({ children }: Props) {
    return (
        <div
            className="relative flex pl-40 pt-[186px]">
            {children}
        </div>
    );
}
function PaletaBox({ children }: Props) {
    return (
        <div
            className="w-[905px] h-[614px] mt-[163px] -ml-[198.5px]">
            {children}
        </div>
    );
}
function CarimboBox({ children }: Props) {
    return (
        <div
            className="flex flex-col items-center h-[330px] gap-10">
            {children}
        </div>
    );
}
function BlackBox({ children }: Props) {
    return (
        <div
            className="h-full bg-second-black">
            {children}
        </div>
    );
}
function ModelBox({ children }: Props) {
    return (
        <div
            className="relative flex flex-col -mt-24 h-full">
            {children}
        </div>
    );
}
function InfoConteiner({ children }: Props) {
    return (
        <div
            className="w-full bottom-0 left-0 mb-32 absolute flex justify-center gap-8">
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
function Button({ children }: Props) {
    return (
        <div
            className="flex w-full h-[73px] justify-center items-center rounded-full bg-primary-yellow">
            {children}
        </div>
    );
}

export {
    Section,
    TextBox,
    ButtonBox,
    Button,
    GenericBox,
    PaletaBox,
    ModelBox,
    CarimboBox,
    BlackBox,
    InfoConteiner
}

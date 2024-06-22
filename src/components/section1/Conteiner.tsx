import { ReactNode } from "react"
import * as I from '@/utils/Imports';

type Props = {
    children: ReactNode;
}

function Section({ children }: Props) {
    return (
        <section
            className="flex flex-col justify-end items-end h-[896px] w-full container-bg"
            style={{ backgroundImage: `url(${I.kakauRegenerada.src})` }}
        >
            {children}
        </section>
    );
}
function TextBox({ children }: Props) {
    return (
        <div
            className="w-[848px] h-[423px] mb-[37px] mr-[171px]">
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
    TextBox,
    ButtonBox,
}
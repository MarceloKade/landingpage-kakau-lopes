import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

function ContainerHeader({ children }: Props) {
    return (
        <header className="fixed flex justify-center items-start w-[1920px] h-[94px] z-40">
            {children}
        </header>
    )
}

function ContainerNav({ children }: Props) {
    return (
        <nav className="flex justify-between items-center mt-[21px] w-[1594px] h-[39.8px]">
            {children}
        </nav>
    )
}
function ContainerMenu({ children }: Props) {
    return (
        <menu className="flex justify-end gap-[30px] w-[375.18px] h-[18px]">
            {children}
        </menu>
    )
}

export {
    ContainerHeader,
    ContainerNav,
    ContainerMenu,
}
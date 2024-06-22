function Title() {
    return (
        <p
            className="w-[439px] h-8 mb-[13px] text-xl font-bold text-white font-asap leading-[25.6px]">
            DONUT STOP BELIEVING
        </p>);
}

function SubTitle() {
    return (
        <h2
            className="text-[128px] font-bold text-primary-yellow font-karantina leading-[100px]">
            Você nunca usou nada igual!
        </h2>
    );
}

function Description() {
    return (
        <p
            className='w-[840px] text-[32px] font-normal text-white font-asap leading-[46px] pt-8'>
            Nossa deliciosamente irresistível paleta compacta, composta por 4 cores ultra versáteis e totalmente indispensáveis na busca pela tonalidade perfeita!
        </p>
    );
}
function TextButton() {
    return (
        <p className="text-primary-pink font-asap text-[32px] font-bold pl-3 pt-[6px]">Comprar</p>
    );
}

function TextPrice() {
    return (
        <p className="text-[14px] mt-[8px] font-normal font-inter text-white text-center"><span className="font-bold text-[24px] font-inter mr-[10px]">R$190,00</span> ou 10 x de R$22,90</p>
    );
}

export {
    Title,
    SubTitle,
    Description,
    TextButton,
    TextPrice
};

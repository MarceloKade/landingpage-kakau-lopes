import * as I from '@/utils/Imports';
import * as SVG from '@/components/svg/SVG';
import { InfoBoxProps } from '@/interfaces/infoJobs';
import { StarMap } from '../Map';

const InfoBox: React.FC<InfoBoxProps> = ({ title, subtitle, description, value, installment, imageUrl }) => {
    return (
        <div className='flex flex-col items-center w-[510px] h-[911px] bg-white rounded-3xl'>
            <h2 className="w-[431px] font-asap font-bold text-[16px] leading-[52.8px] text-black mt-[50px]" >{title}</h2>
            <div className='w-[431px] flex flex-col justify-between'>
                <div className='w-[400px] -mt-2'>
                    <span className="font-asap font-bold text-[40px] leading-[52.8px] text-black">{subtitle}</span>
                    <p className="font-asap font-bold text-[40px] leading-[52.8px] text-black">{description}</p>
                </div>
                <div className='flex w-[257.25px] mt-[14px] h-8 gap-1'>
                    <p className="font-inter font-medium text-[16px] leading-[22.4px] text-black">Avaliação:</p>
                    <p className="font-inter font-bold text-[16px] leading-[22.4px] text-black">5/5</p>
                    <StarMap />
                </div>
                <div className='relative h-72 flex mt-[111px] items-center'>
                    <button className='absolute left-0 mb-2 flex justify-center items-center rounded-full w-[48.11px] h-[50px] border border-silver rotate-180'>
                        <SVG.ArrowIcon fill='black' />
                    </button>
                    <div className='w-[404px] h-[404px] flex flex-col items-center justify-end mb-[128px] mx-auto'>
                        <I.Image priority={true} src={imageUrl} alt="image" className='border' />
                    </div>
                    <button className='absolute flex items-center justify-center w-[90px] h-[90px] rounded-full bottom-0 ml-[170px] -mb-36 bg-white bg-opacity-40'>
                        <div className='absolute flex items-center justify-center w-[58.38px] h-[58.38px] rounded-full bg-primary-yellow'>
                            <SVG.CestoIcon width={19} height={18} stroke='#FF2A77' />
                        </div>
                    </button>
                    <button className='absolute right-0 mb-2 flex justify-center items-center rounded-full w-[48.11px] h-[50px] border border-silver'>
                        <SVG.ArrowIcon fill='black' />
                    </button>
                </div>
            </div>
            <div className='flex flex-col h-[107px] items-center mt-[110px] font-asap'>
                <p className="font-normal h-[18px] text-[16px] leading-[25.6px] text-black">Aproveite!</p>
                <p className="font-bold h-[32px] text-[40px] leading-[32px] mt-[18px] text-four-pink">{value}</p>
                <p className="font-bold h-[33px] text-[16px] leading-[32px] mt-[10px] text-black">{installment}</p>
            </div>
            <button className="flex w-[430px] h-[73px] mt-[22px] justify-center items-center rounded-full bg-primary-yellow">
                <p className="text-primary-pink font-asap text-[32px] font-bold pl-3 pt-[6px]">Comprar</p>
            </button>
            <div className='flex w-[153.11px] h-6 justify-center mt-[21px] gap-4'>
                <SVG.Car />
                <p className="font-inter font-bold text-[12.58px] leading-[22.4px]  text-black">Frete Grátis</p>
            </div>
        </div>
    );
}

export default InfoBox;


export {
    InfoBox
}


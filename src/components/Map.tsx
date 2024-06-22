import * as SVG from '@/components/svg/SVG';
import * as I from '@/utils/Imports';

function StarMap() {
    const stars = Array(5).fill(null);

    return (
        <div className='flex'>
            {stars.map((_, index) => (
                <SVG.Star key={index} />

            ))}
        </div>
    );
}
function LogoMap() {
    const logos = Array(9).fill(null);

    return (
        <>
            {logos.map((_, index) => (
                <I.Image src={I.kakau} alt='Kakau' key={index} />
            ))}
        </>
    );
}

interface CountProps {
    count: number;
    className?: string;

}

function Dollar({ count, className }: CountProps) {
    const logos = Array(count).fill(null);

    return (
        <div className="flex justify-center gap-2">
            {logos.map((_, index) => (
                <I.Image src={I.dollar} alt="dollar" className={`${className}`} key={index} />
            ))}
        </div>
    );
}
function Xmark({ count }: CountProps) {
    const logos = Array(count).fill(null);

    return (
        <>
            {logos.map((_, index) => (
                <td key={index}>
                    <I.Image src={I.xmark} alt="xmark" className='mx-auto' />
                </td>
            ))}
        </>
    );
}
function Check({ count }: CountProps) {
    const logos = Array(count).fill(null);

    return (
        <>
            {logos.map((_, index) => (
                <td key={index}>
                    <I.Image src={I.check} alt="xmark" className='mx-auto' key={index} />
                </td>
            ))}
        </>
    );
}

export {
    StarMap,
    LogoMap,
    Dollar,
    Xmark,
    Check

}
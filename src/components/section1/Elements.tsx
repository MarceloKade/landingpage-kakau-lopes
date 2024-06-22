import * as SVG from '@/components/svg/SVG';
import * as T from './Text';

export function Button() {
    return (
        <button
            className="flex w-full h-[73px] justify-center items-center rounded-full bg-primary-yellow">
            <SVG.CestoIcon strokeWidth={3} width={30} height={30} stroke='#E82876' />
            <T.TextButton />
        </button>
    );
}
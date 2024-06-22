import Link from 'next/link';
import * as I from '@/utils/Imports';
import * as SVG from '@/components/svg/SVG';

function LinkLogo() {
    return (
        <Link href="/">
            <I.Image
                src={I.logo}
                alt="Logo"
                priority={true}
            />
        </Link>
    );
}

function ButtonSearch() {
    return (
        <button>
            <SVG.SearchIcon strokeWidth={2} />
        </button>
    );
}

function LinkUser() {
    return (
        <Link href="/">
            <SVG.UserIcon strokeWidth={2} />
        </Link>
    );
}


function LinkCesto() {
    return (
        <Link href="/">
            <SVG.CestoIcon strokeWidth={2} />
        </Link>
    );
}


export {
    LinkLogo,
    ButtonSearch,
    LinkUser,
    LinkCesto,
};

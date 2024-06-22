import { SvgProps } from "@/interfaces/svg";

const ZoomIcon: React.FC<SvgProps> = ({
    stroke = '#1A1A1A',
    strokeWidth = 2.26667,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = 14,
    height = 15,
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 15"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_98_112)">
                <path
                    d="M6.4078 12.888C9.44578 12.888 11.9086 10.4253 11.9086 7.3873C11.9086 4.34932 9.44578 1.88655 6.4078 1.88655C3.36983 1.88655 0.907058 4.34932 0.907058 7.3873C0.907058 10.4253 3.36983 12.888 6.4078 12.888Z"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                />
                <path
                    d="M10.3364 11.3159L12.6937 13.6732"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinecap={strokeLinecap}
                    strokeLinejoin={strokeLinejoin}
                />
                <path
                    d="M6.34706 4.60655V10.0466M3.62706 7.32655H9.06706"
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                />
            </g>
            <defs>
                <clipPath id="clip0_98_112">
                    <rect
                        width="13.6"
                        height="13.6"
                        fill="white"
                        transform="translate(0.000391006 0.979889)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
const SearchIcon: React.FC<SvgProps> = ({
    stroke = 'white',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '100%',
    height = '100%',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.15552 15.915C12.0215 15.915 15.1555 12.781 15.1555 8.91504C15.1555 5.04905 12.0215 1.91504 8.15552 1.91504C4.28952 1.91504 1.15552 5.04905 1.15552 8.91504C1.15552 12.781 4.28952 15.915 8.15552 15.915Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            <path
                d="M13.1555 13.915L16.1555 16.915L13.1555 13.915Z"
                fill={stroke}
            />
            <path
                d="M13.1555 13.915L16.1555 16.915"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
            />
        </svg>
    );
};

const UserIcon: React.FC<SvgProps> = ({
    stroke = 'white',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '100%',
    height = '100%',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 19"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.65552 9.91504C10.8647 9.91504 12.6555 8.12418 12.6555 5.91504C12.6555 3.7059 10.8647 1.91504 8.65552 1.91504C6.44638 1.91504 4.65552 3.7059 4.65552 5.91504C4.65552 8.12418 6.44638 9.91504 8.65552 9.91504Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            <path
                d="M1.15552 17.915C2.57652 14.941 5.40252 12.915 8.65552 12.915C11.9085 12.915 14.7345 14.941 16.1555 17.915"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
            />
        </svg>
    );
};

const CestoIcon: React.FC<SvgProps> = ({
    stroke = 'white',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '100%',
    height = '100%',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 21 21"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.5783 7.91504H3.15525C2.8503 7.91508 2.5494 7.98485 2.27555 8.11903C2.0017 8.2532 1.76216 8.44822 1.57525 8.68917C1.38833 8.93013 1.25899 9.21063 1.19712 9.50924C1.13524 9.80785 1.14247 10.1167 1.21825 10.412L3.26925 18.412C3.37964 18.8423 3.63014 19.2236 3.98123 19.4958C4.33233 19.7679 4.76403 19.9154 5.20825 19.915H15.9483C16.3921 19.915 16.8234 19.7673 17.1741 19.4951C17.5248 19.223 17.775 18.842 17.8853 18.412L19.9373 10.412C20.013 10.1167 20.0203 9.80785 19.9584 9.50924C19.8965 9.21063 19.7672 8.93013 19.5803 8.68917C19.3933 8.44822 19.1538 8.2532 18.88 8.11903C18.6061 7.98485 18.3052 7.91508 18.0003 7.91504H10.5783ZM10.5783 7.91504V1.91504"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
            />
        </svg>
    );
};

const Star: React.FC<SvgProps> = ({
    stroke = 'white',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '100%',
    height = '100%',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 23"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5776 0L14.5256 7.74505L22.1777 8.41539L16.3476 13.8724L18.1289 22.0318L11.5776 17.6594L5.02628 22.0318L6.80746 13.8724L0.977356 8.41539L8.62948 7.74505L11.5776 0Z"
                fill="#FFB74A" />
        </svg>

    );
};

const ArrowIcon: React.FC<SvgProps> = ({
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '12',
    height = '12',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask id="path-1-inside-1_1_172" fill="white">
                <path d="M6.19791 0.339844L11.6413 5.9967L6.19791 11.6536L0.754514 5.9967L6.19791 0.339844Z" />
            </mask>
            <path
                d="M11.6413 5.9967L13.0281 7.43785L14.4148 5.9967L13.0281 4.55556L11.6413 5.9967ZM4.81115 1.78099L10.2545 7.43785L13.0281 4.55556L7.58467 -1.1013L4.81115 1.78099ZM10.2545 4.55556L4.81115 10.2124L7.58467 13.0947L13.0281 7.43785L10.2545 4.55556Z"
                fill={fill}
                mask="url(#path-1-inside-1_1_172)"
            />
        </svg>
    );
};

export default ArrowIcon;

const Car: React.FC<SvgProps> = ({
    stroke = 'white',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    width = '43',
    height = '24',
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 43 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_160)">
                <path d="M36.8215 17.798H39.0012C39.2641 17.7981 39.5244 17.7538 39.7673 17.6677C40.0101 17.5815 40.2308 17.4552 40.4167 17.2959C40.6025 17.1367 40.7499 16.9475 40.8504 16.7394C40.951 16.5313 41.0026 16.3082 41.0025 16.083V11.25C41.0025 10.8199 40.9036 10.3941 40.7115 9.99682C40.5195 9.59953 40.238 9.23856 39.8831 8.93453C39.5282 8.6305 39.1069 8.38936 38.6432 8.22488C38.1796 8.06041 37.6827 7.97582 37.1809 7.97595H31.4479L31.3347 15.845" stroke="#373737" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.8141 18.175C26.6403 18.175 28.4245 18.015 30.1491 17.854M18.5502 17.767C18.0829 17.7236 17.6466 17.5457 17.3125 17.2624C16.9785 16.979 16.7665 16.607 16.7111 16.207C16.4906 14.613 16.2362 12.951 16.2362 11.247C16.2362 9.54199 16.4883 7.88099 16.7088 6.28699C16.7648 5.88707 16.9772 5.51517 17.3114 5.2319C17.6455 4.94863 18.0817 4.77066 18.549 4.72699C20.5619 4.54099 22.66 4.31799 24.8152 4.31799C26.9705 4.31799 29.0674 4.54099 31.0791 4.72599C31.5466 4.76945 31.9831 4.94732 32.3175 5.23061C32.6519 5.51391 32.8644 5.88591 32.9205 6.28599C32.9975 6.84999 33.0792 7.42099 33.1527 7.99999" stroke="#373737" strokeWidth={strokeWidth} />
                <path d="M33.3919 21.069C32.4955 21.069 31.6358 20.7638 31.002 20.2206C30.3681 19.6774 30.012 18.9407 30.012 18.1725C30.012 17.4043 30.3681 16.6676 31.002 16.1244C31.6358 15.5812 32.4955 15.276 33.3919 15.276C34.2885 15.276 35.1484 15.5812 35.7823 16.1245C36.4163 16.6678 36.7724 17.4047 36.7724 18.173C36.7724 18.9413 36.4163 19.6782 35.7823 20.2215C35.1484 20.7648 34.2885 21.069 33.3919 21.069ZM21.4558 21.069C20.5595 21.069 19.6999 20.7639 19.0662 20.2208C18.4325 19.6777 18.0764 18.9411 18.0764 18.173C18.0764 17.4049 18.4325 16.6683 19.0662 16.1252C19.6999 15.5821 20.5595 15.277 21.4558 15.277C22.3522 15.277 23.2119 15.5822 23.8457 16.1254C24.4796 16.6686 24.8357 17.4053 24.8357 18.1735C24.8357 18.9417 24.4796 19.6784 23.8457 20.2216C23.2119 20.7648 22.3522 21.069 21.4558 21.069Z" stroke="#373737" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d="M0.904297 6.28027C1.18751 5.97031 1.55724 5.77558 1.95327 5.7278C3.65931 5.52428 5.43756 5.28027 7.26426 5.28027C9.09096 5.28027 10.8682 5.52428 12.5733 5.72671" stroke="#373737" strokeWidth={strokeWidth} />
            <path d="M3.23743 11.2803C3.464 10.9703 3.75979 10.7756 4.07661 10.7278C5.44144 10.5243 6.86403 10.2803 8.3254 10.2803C9.78676 10.2803 11.2086 10.5243 12.5726 10.7267" stroke="#373737" strokeWidth={strokeWidth} />
            <path d="M5.57159 16.2803C5.74152 15.9703 5.96336 15.7756 6.20098 15.7278C7.2246 15.5243 8.29155 15.2803 9.38757 15.2803C10.4836 15.2803 11.5499 15.5243 12.573 15.7267" stroke="#373737" strokeWidth={strokeWidth} />
            <defs>
                <clipPath id="clip0_1_160">
                    <rect width="28.0055" height="24" fill="white" transform="translate(14.6504)" />
                </clipPath>
            </defs>
        </svg>

    );
};


export {
    ZoomIcon,
    SearchIcon,
    UserIcon,
    CestoIcon,
    Star,
    Car,
    ArrowIcon
}
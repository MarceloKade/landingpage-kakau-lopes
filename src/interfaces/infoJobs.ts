import { StaticImageData } from 'next/image';
export interface InfoBoxProps {
    title: string;
    subtitle: string;
    description: string;
    value: string;
    installment: string;
    imageUrl: StaticImageData;
}
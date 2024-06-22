import React from 'react';

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    fill?: string;
    width?: number;
    height?: number;
}
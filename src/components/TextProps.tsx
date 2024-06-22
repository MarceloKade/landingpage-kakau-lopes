'use client'
interface TextProps {
    text: string;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    isHtml?: boolean;
}

export default function Text({ text, className = '', tag: Tag = 'p', isHtml = false }: TextProps) {
    return (
        isHtml ? (
            <Tag className={className} dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
            <Tag className={className}>
                {text}
            </Tag>
        )
    );
}

import { TTagProps } from "../Types"

const Tag = ({ bgColor, fontColor, text }: TTagProps) => {
    return (
        <span
            style={{
                backgroundColor: bgColor,
                color: fontColor,
                borderRadius: '2rem',
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                flexGrow: 0,
                flexBasis: 'auto',
                display: 'inline-block',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 'fit-content',
            }}
        >
            {text}
        </span>
    );
};

export default Tag
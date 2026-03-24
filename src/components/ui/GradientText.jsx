import React from 'react';

const GradientText = ({
    children,
    className = '',
    tag: Tag = 'span',
    ...props
}) => {
    return (
        <Tag
            className={`gradient-text ${className}`}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default GradientText;

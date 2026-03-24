import React from 'react';

const Container = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`container mx-auto px-4 relative z-10 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;

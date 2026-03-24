import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    overlay = false,
    ...props
}) => {
    return (
        <section
            id={id}
            className={`relative py-20 px-4 md:py-32 overflow-hidden ${className}`}
            {...props}
        >
            {overlay && (
                <>
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />
                </>
            )}
            {children}
        </section>
    );
};

export default Section;

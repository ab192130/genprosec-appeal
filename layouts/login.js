import React from 'react';

const LoginLayout = ({children}) => {
    return (
        <div className="w-full h-screen font-sans bg-cover bg-landscape">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginLayout;
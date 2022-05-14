import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center animate-pulse'>
            <p>
                <progress class="progress progress-secondary w-80 p-1 "></progress>
            </p>
        </div>
    );
};

export default Loading;
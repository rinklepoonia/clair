// import React, { useState, useEffect } from 'react';

// function TimeWatch() {
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(prevTime => prevTime + 1);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const days = Math.floor(time / (3600 * 24));
//     const hours = Math.floor((time % (3600 * 24)) / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;

//     return (
//         <div className='d-flex gap-3'>
//             <p className='color_white'>{days}</p>
//             <p className='color_white'>{hours}</p>
//             <p className='color_white'>{minutes}</p>
//             <p className='color_white'>{seconds}</p>
//         </div>
//     );
// }

// export default TimeWatch;
import React, { useState, useEffect } from 'react';

function TimeWatch() {
    const [timeInSeconds, setTimeInSeconds] = useState(
        parseInt(localStorage.getItem('timeInSeconds')) || 0
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeInSeconds(prevTime => {
                const newTime = prevTime + 1;
                localStorage.setItem('timeInSeconds', newTime.toString());
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Clear localStorage when the component unmounts
        return () => {
            localStorage.removeItem('timeInSeconds');
        };
    }, []);

    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
        <div>
     
            <div className='d-flex gap-5'>
                <p>
                    {days}  {hours} {minutes} {seconds}
                </p>
            </div>
        </div>
    );
}

export default TimeWatch;
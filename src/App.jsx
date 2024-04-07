import { useState, useEffect } from 'react';

function App() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const targetTime = new Date('8 Apr 2024 16:00:00');
    targetTime.setHours(targetTime.getHours());

    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = Math.floor((targetTime - currentTime) / 1000);

      if (isActive && difference > 0) {
        const hours = Math.floor(difference / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = difference % 60;

        setHour(hours);
        setMin(minutes);
        setSec(seconds);
      } else {
        setIsActive(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const reset = () => {
    setIsActive(false);
    setHour(24);
    setMin(0);
    setSec(0);
  };

  return (
    <>
      <main className="flex justify-center items-center h-screen text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-kanit font-semibold tracking-tight">Coming soon</h1>
          <div className="">
            <div className="mt-16 text-4xl md:5xl lg:text-7xl tracking-wider flex flex-row">
              <div className="flex flex-col items-center">{hour < 10 ? '0' + hour : hour} <div className="text-lg text-gray-400">Hours</div></div>
              : <div className="flex flex-col items-center">{min < 10 ? '0' + min : min} <div className="text-lg text-gray-400">Minutes</div></div> :
              <div className="flex flex-col items-center">{sec < 10 ? '0' + sec : sec} <div className="text-lg text-gray-400">Seconds</div></div>
            </div>
            <a href='https://t.me/MoonDollar' className="mt-6 text-lg p-3 rounded-xl bg-slate-800 hover:bg-slate-500 cursor-pointer duration-300 ease-in-out flex flex-row gap-24 justify-center">
                Telegram
            </a>
          </div>
          <div className="d-flex justify-content-between mb-5 mt-4">
          </div>
        </div>
        <div className='absolute bottom-0 right-0 mb-2 mr-4 text-xl md:text-2xl md:text-semibold'>TF</div>
      </main>
    </>
  );
}

export default App;

import React from 'react';

const SmoothLightBeam = () => {
  return (
    <div className="w-full h-64 bg-gray-900 flex items-center justify-center">
      <div className="relative w-full max-w-lg h-full flex items-center justify-center">
        <svg
          width="280"
          height="160"
          viewBox="0 0 280 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 140 H100 Q105 140 105 135 V85 Q105 80 110 80 V80 H220 Q225 80 225 75 V20"
            stroke="url(#beam-gradient)"
            strokeWidth="1"
            strokeLinecap="round"
            className="light-beam"
          />
          <defs>
            <linearGradient
              id="beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="20"
              y1="140"
              x2="225"
              y2="20"
            >
              <stop stopColor="#2EB9DF" stopOpacity="0" />
              <stop offset="0.05" stopColor="#2EB9DF" />
              <stop offset="0.9" stopColor="#9E00FF" />
              <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <style jsx>{`
          .light-beam {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            filter: drop-shadow(0 0 1px rgba(46, 185, 223, 0.5));
            animation: meteor-beam 4s linear infinite;
          }
          
          @keyframes meteor-beam {
            0% {
              stroke-dashoffset: 600;
              opacity: 0;
            }
            5% {
              opacity: 0.9;
            }
            85% {
              stroke-dashoffset: 0;
              opacity: 0.9;
            }
            95% {
              opacity: 0;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SmoothLightBeam;
import { motion } from 'framer-motion'
import React from 'react'

const Floatingsvgs = (mousePosition: { x: number; y: number; }) => {

  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
        role="img"
        viewBox="0 0 512 512"
        className="hidden lg:block w-12 h-12 absolute -top-10 -left-24 -rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
        style={{
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
        }}
        variants={floatingVariant}
        initial="initial"
        animate="animate"
      >
        <rect width="512" height="512" rx="15%" fill="#3178c6" />
        <path
          fill="#ffffff"
          d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
        />
      </motion.svg>
      <motion.svg
        className="hidden lg:block size-14 absolute top-80 -left-32 rotate-12 drop-shadow-[0_16px_24px_rgba(247,147,20,0.35)]"
        style={{
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
        }}
        variants={floatingVariant}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bitcoin"
        role="img"
        viewBox="0 0 53 33"
      >
        <g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs>
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3618.6 3618.6"
        className="hidden lg:block w-12 h-12 absolute bottom-10 -right-32 rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
        style={{
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
        }}
        variants={floatingVariant}
        initial="initial"
        animate="animate"
      >
        <style>
          {`.st1{fill:#00d8ff}.st2{fill:none;stroke:#00d8ff;stroke-width:144.7456;stroke-miterlimit:10}`}
        </style>
        <circle className="st1" cx="1806.5" cy="1807.1" r="302.6" />
        <path
          className="st2"
          d="M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"
        />
        <path
          className="st2"
          d="M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"
        />
        <path
          className="st2"
          d="M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"
        />
      </motion.svg>
      <motion.svg
        className="hidden lg:block size-14 absolute top-96 -right-32 drop-shadow-[0_16px_24px_rgba(0,0,255,0.35)] "
        style={{
          x: mousePosition.x * 0.02, // Parallax effect based on mouse position
          y: mousePosition.y * 0.02,
        }}
        variants={floatingVariant}
        initial="initial"
        animate="animate"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"
          fill="#0065a9"
        />
        <path
          d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"
          fill="#007acc"
        />
        <path
          d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z"
          fill="#1f9cf0"
        />
      </motion.svg>

    </>
  )
}

export default Floatingsvgs
import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/plane.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Let Us Guide You Through</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">At Joli Trips we offer an exceptional user experience by providing comprehensive destination information, competitive pricing, and customizable travel options, catering to a diverse range of preferences and budgets. With a user-friendly interface and mobile compatibility, travelers can easily navigate and book their trips on the go, supported by 24/7 customer service and robust security measures. Incorporating user reviews and recommendations builds trust and credibility, while innovative features like virtual tours and AI-powered recommendations enhance the overall experience. Through social proof and a commitment to privacy, Joli Trips establishes itself as a trusted resource for travelers seeking seamless, reliable, and enjoyable travel planning and booking services.</p>
          
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/plane1.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50"> min</p>
              </div>
              <p className="bold-20 mt-2">anywhere</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Airport</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
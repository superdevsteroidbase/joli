import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Contact from './Contact'


const GetApp = () => {
  return (
    <section id='contact' className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-12">
          {/* <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get in touch with us now</h2> */}
          {/* <p className="regular-16 text-gray-10">Available on iOS and Android</p> */}
          <Image src="/phones.png" alt="phones" width={550} height={870} />

        </div>

        <div className="flex flex-1 items-center justify-end">
          <Contact />
        </div>
      </div>
    </section>
  )
}

export default GetApp
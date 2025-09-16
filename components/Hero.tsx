import Image from 'next/image'
import Button from './Button'
import Link from "next/link"
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/plane.svg"
          alt="camp"
          width={100}
          height={0}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-32 lg:bold-68">Joli Hospitality & Tours</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Welcome to your go-to travel partner for affordable and unforgettable journeys! At BudgetVoyage, we understand that everyone deserves a fantastic travel experience without breaking the bank. Our mission is to make travel accessible, comfortable, and enriching for all our clients.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            100%
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link href="/">
          <Button
            type="button"
            title="Book Flight"
            variant="btn_green"
          />
          </Link>
          <Link href="/">
          <Button
            type="button"
            title="Book Hotel"
            icon="/play.svg"
            variant="btn_white_text"
          />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">

        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <Image
            src="/plane.svg"
            alt="star"
            width={44}
            height={44}
          />
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">World wide</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">all</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">From</p>
              <p className="bold-20 text-white">global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-contairer flex flex-col gap-20 py-10 pb-32 md:-28 
    lg:py-20 xl:flex-row vorder-2 border-red-500">
        <div className="hero-map"/>

        {/* Left*/}
        <div className="relative z-10 flex flex-1 flex-col xl:w-1/2">
            {/* <Image
                src="/camp.svg"
                alt = "camp"
                width={50}
                height={70}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            /> */}
            

            <h1 className="bold-52 lg:bold-8">Trek Tales India </h1>
            <p className="regular-16 mt-6 text-gray xl:max-w-[520]">
              Vadiyan Bani Hai, <b>प्यार</b> Ka Jahan,
              <br/>
              CampSite Par Milte Hai, Haath Me Liye <b>गिटार🎸</b> Aur <b>जाम🥃</b>  
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
                198k
                <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              <Button
                type="button"
                title="Download App"
                varient='btn_green' 
                />
              <Button
                type="button"
                title="How we work"
                icon="/play.svg"
                varient='btn_white_text'
              />
            </div>
        </div>

        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Loaction</p>
                <Image src="/close.svg" alt="close" width ={24} height={24}/>
              </div>
              <p className="bold-20 text-white">Nanda <b>Devi</b> Trek</p>
            </div>
              <div className="flexBetween">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">Distance</p>
                  <p className="bold-20 text-white">47.8 km</p>
                </div>
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">Elevation</p>
                  <p className="bold-20 text-white">13,500 Ft</p>
                </div>
              </div>
            

          </div>

        </div>

      
    </section>
  )
}

export default Hero
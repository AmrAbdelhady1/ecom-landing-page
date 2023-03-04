/* eslint-disable @next/next/no-img-element */
import { ImInstagram, ImFacebook, ImTwitter, ImYoutube } from "react-icons/im"
import { BiStore } from "react-icons/bi"
import { FaHandRock, FaGlobe } from "react-icons/fa"
import { TiMessages } from "react-icons/ti"

export default function Home() {

  const data = [
    {
      icon: <BiStore />,
      name: 'E-store',
    },
    {
      icon: <FaHandRock />,
      name: 'Empowerment',
    },
    {
      icon: <FaGlobe />,
      name: 'Ecosystem',
    },
    {
      icon: <TiMessages />,
      name: 'Community',
    },
  ]
  const cards2 = [
    {
      name: 'Simply Pricing Free trial',
      price: '0',
    },
    {
      name: 'Simply Pricing Business',
      price: '10',
    }
  ]
  return (
    <div className="bg-[#52565E] min-h-screen w-full font-Branregular text-white">

      <nav className="flex py-5 items-center w-full px-24">
        <h1 className="text-3xl font-AvenirHeavy mr-36">ecom</h1>
        <div className="flex justify-between items-center text-lg font-Branlight w-full">
          <ul className="flex items-center gap-20">
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
          </ul>
          <div className="flex items-center gap-8 font-Branbold">
            <button className="py-2 w-28 border-2 rounded-full hover:bg-black">Login</button>
            <button className="py-2 w-28 border-2 border-yellow-500 rounded-full text-black bg-yellow-500 hover:bg-opacity-0 hover:border-white hover:text-white">Sign Up</button>
          </div>
        </div>
      </nav>

      <div className="my-48 px-24">
        <h1 className="text-5xl font-Branbold mb-4">Sell online with <span className="text-yellow-500">ecom</span></h1>
        <h1>Zid is your partner in your full-fledged E-commerce</h1>
        <h1>journey.</h1>
        <button className="font-Branbold text-xl mt-10 py-2 px-8 border-2 border-yellow-500 rounded-full text-black bg-yellow-500 hover:bg-opacity-0 hover:border-white hover:text-white">Try ecom Now</button>
      </div>

      <div className="bg-white w-full text-black pt-[53px]">

        <div className="font-Branbold text-5xl text-center px-24">
          <h1>With ecom, You can create your</h1>
          <h1>Online Store</h1>
          <p className="font-Branregular text-xl opacity-60 mt-8 pb-16">No Coding | No Setup Fees | Launch in a Day</p>
        </div>

        <div className="grid grid-cols-4 gap-8 px-24">
          {data.map(item =>
            <div key={item.id} className="text-center">
              <div className="flex justify-center items-center">
                <p className="text-5xl text-[#F9C947] mb-2">{item.icon}</p>
              </div>
              <h1 className="font-Branbold text-2xl mb-1">{item.name}</h1>
              <p>We empower you with your own E-store  and your own domain for you to simply create and design with your identity and logo all from one control panel and with no need for any technical knowledge</p>
            </div>
          )}
        </div>

        <div className="font-Branbold text-5xl text-center mt-20 px-24">
          <h1>Packages & Pricing</h1>
          <p className="font-Branregular text-xl opacity-60 mt-8 pb-16">No Coding | No Setup Fees | Launch in a Day</p>
        </div>

        <div className="grid grid-cols-2 gap-5 pb-10 px-24">
          {cards2.map(item =>
            <div key={item.id} className="text-center p-5 bg-white rounded-lg shadow-2xl">
              <h1 className="font-Branbold text-2xl mb-2">{item.name}</h1>
              <h1 className="text-sm mb-10">No set up fees</h1>
              <h1 className="font-Branbold text-xl mb-2">Monthly Price</h1>
              <h1 className="text-sm opacity-70 mb-10">The solution that suits all small and medium sized business</h1>
              <h1 className="font-GilroyBold text-3xl mb-2">{item.price} KD<span className="font-GilroyRegular text-sm">/ month</span></h1>
              <h1 className="text-sm opacity-70 mb-12">All prices are excl. VAT.</h1>
              <button className="font-GilroyBold text-sm bg-[#F9C947] border-2 border-[#F9C947] rounded-full px-20 py-4 hover:bg-white hover:border-2">Start a free trail</button>
            </div>
          )}
        </div>

        <div className="pt-5 grid grid-cols-3 gap-10 pl-24">
            <div className="col-span-2 flex flex-col justify-center">
              <h1 className="font-GilroyBold text-4xl">Start Your E-comerce Marketplace with Ecom</h1>
              <div className="flex items-center gap-5 mt-10">
              <button className="font-GilroyBold text-white text-xl bg-[#F9C947] border-2 border-[#F9C947] rounded-full px-8 py-3 hover:bg-black hover:border-2">Try ecom Now</button>
              <button className="font-GilroyBold text-white text-xl bg-[#52565E] border-2 border-[#52565E] rounded-full px-8 py-3 hover:bg-black hover:border-2">Schedule Demo</button>
              </div>
            </div>
            <div className="flex justify-end rounded-l-full overflow-hidden">
              <img src="Images/img1.png" className="object-cover" alt="" />
            </div>
        </div>

      </div>

      <footer className="grid grid-cols-3 gap-32 py-5 px-24 font-Branlight text-base">
        <div>
          <h1 className="text-2xl font-AvenirHeavy">ecom</h1>
          <h1 className="mb-2">+912 2222 11111</h1>
          <h1>sales@ecom.com</h1>
        </div>
        <div>
          <h1 className="font-Branbold text-lg mb-1">Kuwait Office</h1>
          <h1>Office 20,</h1>
          <h1>Kuwait Tower, That Street Sharq,</h1>
          <h1>Kuwait City.</h1>
        </div>
        <div>
          <h1 className="font-Branbold text-lg mb-2">Social Media</h1>
          <div className="flex justify-between w-[80%] mb-5 text-[22px]">
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><ImInstagram /></a>
            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><ImFacebook /></a>
            <a href='https://twitter.com/?lang=en' target="_blank" rel="noopener noreferrer"><ImTwitter /></a>
            <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer"><ImYoutube /></a>
          </div>
          <h1 className="font-GilroyRegular text-sm">Copyrights © 2020 <span className="font-GilroyBold">ecom</span> All Rights Reserved</h1>
        </div>
      </footer>

    </div>
  )
}

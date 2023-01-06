import React from "react";
import welcome from "../Assets/hello.png";
import images from '../Assets/images.jpg'
import offers from '../Assets/offers.webp'
const options = [
    {
      id: 1,
      name: 'Welcome to our new webite',
      desc: 'LEARN ABOUT VIRIGNAMERICA.COM',
      href: '#',
      imageSrc: `${welcome}`,
    },
    {
      id: 2,
      name: 'Deals from $49 to your favorite cities',
      desc: 'SEE ALL DEALS',
      href: '#',
      imageSrc: `${images}`,
    },
    {
        id: 3,
        name: 'Get Exciting Offers',
        desc: 'SEE ALL OFFERS',
        href: '#',
        imageSrc: `${offers}`,
      },
    
  ]

const Footer = () => {
  return (
    <div className="bg-slate-200">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">options</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 font-bold lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {options.map((option) => (
            <a key={option.id} href={option.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <h3 className="mt-4 text-center text-sm text-gray-700 mb-4">{option.name}</h3>
                <img
                  src={option.imageSrc}
                  alt={option.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-center text-sm underline underline-offset-1 text-gray-700">{option.desc}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

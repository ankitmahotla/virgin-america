import React from "react";
import welcome from "../Assets/hello.png";
import images from '../Assets/images.jpg'
import offers from '../Assets/offers.webp'
const products = [
    {
      id: 1,
      name: 'Welcome to our new webite',
      desc: 'LEARN ABOUT VIRIGNAMERICA.COM',
      href: '#',
      price: '$48',
      imageSrc: `${welcome}`,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Deals from $49 to your favorite cities',
      desc: 'SEE ALL DEALS',
      href: '#',
      price: '$35',
      imageSrc: `${images}`,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Get Exciting Offers',
        desc: 'SEE ALL OFFERS',
        href: '#',
        price: '$35',
        imageSrc: `${offers}`,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
    
  ]

const Footer = () => {
  return (
    <div className="bg-slate-200">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 font-bold lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <h3 className="mt-4 text-center text-sm text-gray-700 mb-4">{product.name}</h3>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-center text-sm underline underline-offset-1 text-gray-700">{product.desc}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

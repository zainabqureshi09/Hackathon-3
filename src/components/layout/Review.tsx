

import Image from 'next/image';
import React from 'react';


const Review = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Professional Chefs */}
            <div className="p-4 text-center">
              <Image src="/proffcheff.png" height={200} width={200} className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"  alt="Professional Chef"/>
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">Professional Chefs</p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">420</h1>
            </div>
            {/* Items of Food */}
            <div className="p-4 text-center">
              <Image src="/food.png" alt="Items of Food" width={200} height={200} className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">Items of Food</p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">320</h1>
            </div>
            {/* Years of Experience */}
            <div className="p-4 text-center">
              <Image src="/spoon.png" alt="Years of Experience" width={200} height={200} className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">Years of Experience</p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">30+</h1>
            </div>
            {/* Happy Customers */}
            <div className="p-4 text-center">
              <Image src="/pizza.png" alt="Happy Customers" width={200} height={200} className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-white font-bold text-sm md:text-lg lg:text-xl mt-4">Happy Customers</p>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl">220</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;

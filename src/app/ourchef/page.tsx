import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';
import { PiUserBold } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { client } from '@/sanity/lib/client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Chef = {
  _id: string;
  name: string;
  position: string;
  imageUrl: string;
  description: string;
};

async function getData() {
  const query = `*[_type == "chef"]{
    _id,
    name,
    position,
    "imageUrl": image.asset->url,
    description
  }`;

  const data: Chef[] = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: Chef[] = await getData();

  return (
    <div>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ourmenu">Menu</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/ourchef">Chef</Link></li>
              <li><Link href="/aboutus">About</Link></li>
              <li><Link href="/Newest">Shop</Link></li>
              <li><Link href="/signin">Signin</Link></li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <h1><IoSearch className="text-white text-[24px] cursor-pointer" /></h1>
            <h1><Link href="/signup"><PiUserBold className="text-white text-[24px] cursor-pointer" /></Link></h1>
            <h1><Link href="/shoppingcart"><HiOutlineShoppingBag className="text-white text-[24px] cursor-pointer" /></Link></h1>
          </div>
          <div className="lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-white text-[24px] cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/ourmenu">Menu</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/ourchef">Chef</Link></li>
                  <li><Link href="/aboutus">About</Link></li>
                  <li><Link href="/Newest">Shop</Link></li>
                  <li><Link href="/signin">Signin</Link></li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Chef</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Chef
          </p>
        </div>
      </section>

      {data.length === 0 ? (
        <p className="text-center text-lg">No chefs available.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((chef: { _id: React.Key | null | undefined; imageUrl: string | StaticImport; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (string & Iterable<React.ReactNode>) | (string & React.ReactPortal) | (string & Promise<React.AwaitedReactNode>) | (number & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (number & Iterable<React.ReactNode>) | (number & React.ReactPortal) | (number & Promise<React.AwaitedReactNode>) | (bigint & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (bigint & Iterable<React.ReactNode>) | (bigint & React.ReactPortal) | (bigint & Promise<React.AwaitedReactNode>) | (false & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (false & Iterable<React.ReactNode>) | (false & React.ReactPortal) | (false & Promise<React.AwaitedReactNode>) | (true & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (true & Iterable<React.ReactNode>) | (true & React.ReactPortal) | (true & Promise<React.AwaitedReactNode>) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & string) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & number) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & bigint) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & false) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & true) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & Iterable<React.ReactNode>) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & React.ReactPortal) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & Promise<React.AwaitedReactNode>) | (Iterable<React.ReactNode> & string) | (Iterable<React.ReactNode> & number) | (Iterable<React.ReactNode> & bigint) | (Iterable<React.ReactNode> & false) | (Iterable<React.ReactNode> & true) | (Iterable<React.ReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Iterable<React.ReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & Promise<React.AwaitedReactNode>) | (React.ReactPortal & string) | (React.ReactPortal & number) | (React.ReactPortal & bigint) | (React.ReactPortal & false) | (React.ReactPortal & true) | (React.ReactPortal & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (React.ReactPortal & Iterable<React.ReactNode>) | (React.ReactPortal & Promise<React.AwaitedReactNode>) | (Promise<React.AwaitedReactNode> & string) | (Promise<React.AwaitedReactNode> & number) | (Promise<React.AwaitedReactNode> & bigint) | (Promise<React.AwaitedReactNode> & false) | (Promise<React.AwaitedReactNode> & true) | (Promise<React.AwaitedReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Promise<React.AwaitedReactNode> & Iterable<React.ReactNode>) | (Promise<React.AwaitedReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & string) | (Iterable<React.ReactNode> & number) | (Iterable<React.ReactNode> & bigint) | (Iterable<React.ReactNode> & false) | (Iterable<React.ReactNode> & true) | (Iterable<React.ReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Iterable<React.ReactNode> & Iterable<React.ReactNode>) | (Iterable<React.ReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & Promise<React.AwaitedReactNode>) | null | undefined; position: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }) => (
            <div key={chef._id} className="group relative">
              <div className="p-4 w-full max-w-sm">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    src={chef.imageUrl}
                    alt={`${chef.name} image`}
                    className="object-cover object-center w-full h-full block"
                    width={200} height={200}
                  />
                </a>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/chef/${chef._id}`}>
                        {chef.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {chef.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
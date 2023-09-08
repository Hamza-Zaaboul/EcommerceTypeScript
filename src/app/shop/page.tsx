
import {
  products1,
  products2,
} from "../../dictionnaire/basetyped";
import Footer from "@/components/Footer";
import FilterMobile from "@/components/FilterMobile";
import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";

import Link from "next/link";
import Image from "next/image";
import ImageCta from "../../../public/image_jpg/shop/apiculteurcta1.jpg"
export default function Shop() {



  return (
    <div className="bg-gray-50">

      <Navbar />
      <div>
        {/* Mobile filter dialog */}
        <FilterMobile />

        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Hero view */}
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
               Nouvelle arrivage 
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Du miel de qualité, disponible chaque semaine grâce aux travaillent de nos apiculteurs partenaires.              </p>
            </div>

            {/* Filters */}
            <Filter />

            {/* Product grid */}
            <section aria-labelledby="products-heading" className="mt-8">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products1.map((product) => (
                  <Link key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                      <Image
                        width={300}
                        height={500}
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="featured-heading"
              className="relative mt-16 overflow-hidden rounded-lg lg:h-96"
            >
              <div className="absolute inset-0">
                <Image
                  src={ImageCta}
                  alt=""

                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                <div>
                  <h2
                    id="featured-heading"
                    className="text-xl font-bold text-white"
                  >
                    La rûche à portée de main.
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    Découvrez tous les produits dérivés à base de <strong>miel</strong> produits par nos <strong>apiculteurs</strong> et partenaires.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                >
                  Voir la boutique en ligne
                </Link>
              </div>
            </section>

            <section
              aria-labelledby="more-products-heading"
              className="mt-16 pb-24"
            >
              <h2 id="more-products-heading" className="sr-only">
                  Plus de produits
              </h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products2.map((product) => (
                  <Link key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

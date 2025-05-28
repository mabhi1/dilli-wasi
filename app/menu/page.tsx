'use client';

import { Button } from '@/components/ui/button';
import { ColourfulText } from '@/components/ui/colorful-text';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const menuCategories = [
  { id: 'chinese', name: 'Chinese', image: '/chinese.jpg' },
  { id: 'momos', name: 'Momos', image: '/momo.png' },
  { id: 'beverages', name: 'Beverages & Mocktails', image: '/mocktail.jpg' },
  { id: 'shakes', name: 'Shakes', image: '/shake.jpg' },
  { id: 'western', name: 'Western Starters', image: '/western.jpg' },
  { id: 'burgers', name: 'Burgers & Sandwiches', image: '/burger.jpg' },
  { id: 'sizzlers', name: 'Sizzlers', image: '/sizzler.jpg' },
  { id: 'pizza', name: 'Pizza', image: '/pizza.jpg' },
  { id: 'pasta', name: 'Pasta', image: '/pasta.jpg' },
  { id: 'soup', name: 'Soup', image: '/soup.jpg' },
  { id: 'combos', name: 'Combos', image: '/combo.jpg' },
  { id: 'main', name: 'Main Course', image: '/main.jpg' },
  { id: 'thalis', name: 'Thalis', image: '/thali.jpg' },
  { id: 'breads', name: 'Breads', image: '/bread.jpg' },
  { id: 'rice', name: 'Rice', image: '/rice.jpg' },
  { id: 'raita', name: 'Raita', image: '/raita.jpg' },
  { id: 'salad', name: 'Salad & Chat', image: '/salad.jpg' },
  { id: 'papad', name: 'Papad', image: '/papad.jpg' },
  { id: 'dessert', name: 'Dessert', image: '/dessert.jpg' },
];

export default function MenuPage() {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 8; // Show more items initially for better grid layout

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleCategories = showAll ? menuCategories : menuCategories.slice(0, initialVisibleCount);

  return (
    <div>
      <div className="relative flex flex-col-reverse items-center justify-center gap-5 overflow-hidden p-5 px-5 md:gap-10 md:px-20 lg:flex-row">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
            alt="Restaurant Interior"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="from-background via-background/95 to-background/90 absolute inset-0 bg-gradient-to-r" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col gap-5 p-0 lg:w-1/2 lg:p-12 xl:w-1/3">
          <div className="min-w-[20rem] text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our Menu
          </div>
          <div className="text-xl">
            We invite you to join us at Dilliwasi Restaurant & Rooftop Terrace and experience the
            finest in <ColourfulText text="vegetarian cuisine" />, exceptional service, and a warm,
            inviting atmosphere.
          </div>
          <Button className="bg-primary hover:bg-primary/90 w-fit">Download Menu</Button>
        </div>
        <div className="relative z-10 flex gap-5 p-0 lg:p-12">
          <div className="animate-fade-in-up relative transition-all duration-300 [animation-delay:0ms] hover:scale-110 hover:rotate-5">
            <Image
              src="/roll.webp"
              alt="Spring Roll"
              width={1280}
              height={1280}
              className="h-auto w-40 rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
          <div className="animate-fade-in-up relative transition-all duration-300 [animation-delay:200ms] hover:scale-110 hover:rotate-5">
            <Image
              src="/chilli-paneer.jpg"
              alt="Chilli Paneer"
              width={1280}
              height={1280}
              className="h-auto w-40 rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
          <div className="animate-fade-in-up relative transition-all duration-300 [animation-delay:400ms] hover:scale-110 hover:rotate-5">
            <Image
              src="/roll.webp"
              alt="Spring Roll"
              width={1280}
              height={1280}
              className="h-auto w-40 rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Menu Categories Grid */}
      <div className="mt-16 px-4 md:px-8 lg:px-16">
        <div className="hidden flex-col items-center gap-8 md:flex">
          <div className="grid w-full justify-items-center gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {visibleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="group relative flex flex-col items-center gap-2"
              >
                <div className="hover:border-primary/50 relative aspect-square w-20 overflow-hidden rounded-full border-2 border-zinc-200/50 transition-all duration-300 sm:w-24 md:w-28">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <span className="group-hover:text-primary text-center text-sm font-medium text-zinc-700 transition-colors duration-300">
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {menuCategories.length > initialVisibleCount && (
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-16 space-y-16 px-4 md:px-8 lg:px-16">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">{category.name}</h2>
            </div>
            {/* Add menu items for each category here */}
          </section>
        ))}
      </div>
    </div>
  );
}

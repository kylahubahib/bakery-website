import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: number;
}

interface MenuCarouselProps {
  menu: MenuItem[];
  images: Record<string, string>;
}

export default function MenuCarousel({ menu, images }: MenuCarouselProps) {
  const cardsPerView = 3;
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, menu.length - cardsPerView);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  const cardWidthPercent = 100 / cardsPerView;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * cardWidthPercent}%)`,
          }}
        >
          {menu.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-3"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img
                  src={images[item.image] as string}
                  alt={item.name}
                  className="w-40 h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{item.description}</p>
                <p className="text-accent font-bold">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute top-1/2 -left-5 -translate-y-1/2 bg-accent cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition duration-300"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-white" />
      </button>
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="absolute top-1/2 -right-5 -translate-y-1/2 bg-accent cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition duration-300"
        aria-label="Next"
      >
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
}
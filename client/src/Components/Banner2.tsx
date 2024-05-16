import React, { useEffect, useRef } from 'react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import '../App.css';


interface Banner {
  img: string;
  title: string;
  content: string;
  
}

const banners: Banner[] = [
  {
    img: s1,
    title: 'Boost Productivity',
    content:
      'With TaskBliss, you can streamline your workflow, prioritize your tasks effectively, and achieve your  goals effortlessly.'
    
  },
  {
    img: s2,
    title: 'Seamless Integration',
    content:
      'Integrate TaskBliss with your favorite tools and platforms, ensuring all your tasks are in one convenient place.',
    
  },
  {
    img: s3,
    title: 'Stay Organized',
    content:
      'Keep track of deadlines, set reminders, and never miss a task again with TaskBliss’s intuitive task management features.',
    
  },
];

const Banner2: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fadeInOnScroll = () => {
      elementsRef.current.forEach((element, index) => {
        if (element && isElementInViewport(element)) {
          setTimeout(() => {
            element.classList.add('opacity-100');
            element.classList.remove('opacity-0');
            if (index < 2) {
              const lineImg = element.querySelector('.line-img') as HTMLDivElement;
              if (lineImg) {
                lineImg.classList.add('animate-expandWidth');
                lineImg.classList.remove('opacity-0');
              }
            }
          }, index * 1000); // Adjust the delay value here (1000ms for example)
        }
      });
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // To run the function initially in case the elements are already in view.

    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#114232]  flex justify-center items-center px-5 lg:px-20 py-5 lg:py-20">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-16">
        <h1 className="gabarito font-semibold text-[50px] md:text-[74.38px] text-white">TaskBliss Odyssey</h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-28">
          {banners.map((banner, index) => (
            <div
              ref={(el) => (elementsRef.current[index] = el)}
              className="flex md:w-[200px] lg:w-[250px] flex-col relative transition-all duration-500 opacity-0"
              key={index}
            >
              <div className="w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
                <img src={banner.img} alt={banner.title} />
                {index < 2 && (
                  <div
                    className="absolute left-[67%] top-[25%] hidden h-[5px] bg-[#A4CF25] opacity-30 md:block line-img"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                )}
              </div>
              <div className="flex flex-col px-[10px] w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
                <h1 className="gabarito text-center text-[32px] md:text-[24px] lg:text-[32px] text-white md:font-bold">
                  {banner.title}
                </h1>
                <p className="gabarito text-center text-[16px] md:text-[12px] lg:text-[16px] text-white">
                  {banner.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner2;

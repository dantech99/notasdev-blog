import { Text } from './text';
import { Subtitle } from './subtitle';
import Link from 'next/link';
import Image from 'next/image';
import authorImg from '../../../public/react-paisaje.jpg';

//import estilos globales
interface ArticleContainerProps {
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
}

export const ArticleContainer = ({
  title,
  description,
  author,
  date,
  link,
}: ArticleContainerProps) => {
  return (
    // <article classNameName="w-auto  p-2 rounded-2xl hover:bg-[#0F172A] transition ease-in-out">
    //   <header className="flex gap-2 my-2">
    //     <div>
    //       <Image
    //         src={authorImg}
    //         alt="imagen del author del post"
    //         style={{
    //           width: '40px',
    //           objectFit: 'cover',

    //         }}
    //         width={0}
    //         height={0}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <p className="text-sm">Notasdev</p>
    //       <span className="text-xs">May 30</span>
    //     </div>
    //   </header>

    //   <main className="flex flex-col gap-3">
    //     <div className="flex ml-10">
    //       <Link href={link} className="hover:text-[#FADB6F]">
    //         <Subtitle text={title} />
    //       </Link>
    //     </div>

    //     <div className='flex ml-10 gap-2'>
    //       <span className='text-[#F69F4E] rounded-2xl text-sm '>#Nextjs</span>
    //       <span className='text-[#8D7AFF] rounded-2xl text-sm '>#Reactjs</span>
    //       <span className='text-[#FDF396] rounded-2xl text-sm '>#Git</span>
    //     </div>

    //   </main>
    //   <footer className='flex ml-10 my-2'>
    //     <Link href={link} className='hover:text-[#FADB6F]'>
    //       Leer mas...
    //     </Link>
    //   </footer>
    // </article>

    <div className="container mx-auto px-4 py-8  md:py-4">
      <div className="grid gap-6 md:gap-8">
        <div className="grid gap-2 md:gap-3">
          <a className="flex items-start gap-4 group" href="#">
            <Image
              src={authorImg}
              alt="Blog Post Image"
              width="200"
              height="150"
              style={{ aspectRatio: '200 / 150', objectFit: 'cover' }}
              className="rounded-lg object-cover w-[200px] h-[150px] md:w-[350px] md:h-[180px]"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold group-hover:text-primary transition-colors md:text-xl">
                {title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3">
                {description}
              </p>
              <div className="flex gap-2 my-4">
                <span className="text-[#F69F4E] rounded-2xl text-sm ">
                  #Nextjs
                </span>
                <span className="text-[#8D7AFF] rounded-2xl text-sm ">
                  #Reactjs
                </span>
                <span className="text-[#FDF396] rounded-2xl text-sm ">
                  #Git
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {date}
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-10"></div>
    </div>
  );
};

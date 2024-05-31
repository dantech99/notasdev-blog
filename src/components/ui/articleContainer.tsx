import { Text } from './text';
import { Subtitle } from './subtitle';
import Link from 'next/link';
import Image from 'next/image';
import authorImg from '../../../public/dantech.png'

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
    <article className="w-auto  p-2 rounded-2xl hover:bg-[#0F172A] transition ease-in-out">
      <header className="flex gap-2 my-2">
        <div>
          <Image
            src={authorImg}
            alt="imagen del author del post"
            style={{
              width: '40px',
              objectFit: 'cover',
            
            }}
            width={0}
            height={0}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Notasdev</p>
          <span className="text-xs">May 30</span>
        </div>
      </header>

      <main className="flex flex-col gap-3">
        <div className="flex ml-10">
          <Link href={link} className="hover:text-[#FADB6F]">
            <Subtitle text={title} />
          </Link>
        </div>

        <div className='flex ml-10 gap-2'>
          <span className='text-[#F69F4E] rounded-2xl text-sm '>#Nextjs</span>
          <span className='text-[#8D7AFF] rounded-2xl text-sm '>#Reactjs</span>
          <span className='text-[#FDF396] rounded-2xl text-sm '>#Git</span>
        </div>

      </main>
      <footer className='flex ml-10 my-2'>
        <Link href={link} className='hover:text-[#FADB6F]'>
          Leer mas...
        </Link>
      </footer>
    </article>
  );
};

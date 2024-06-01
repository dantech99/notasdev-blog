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



    
  
        <div className="grid gap-4  p-4 rounded-md">
          <div className="flex items-center gap-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
              <Image src={authorImg} alt="@shadcn" width={0} height={0} style={{objectFit: 'cover'}} />
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">AC</span>
            </span>
            <div>
              <h3 className="font-semibold">{author}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
          <Link href={'/articles/1'}>
          <h2 className="text-2xl font-bold hover:text-[#FADB6F]">{title}</h2>
          </Link>
          
          <p className="text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              AI
            </div>
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Productivity
            </div>
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Workflow
            </div>
          </div>
          <Link href={'/articles71'} className="inline-flex items-center justify-end whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 hover:text-[#FADB6F]">
            Leer mas...
          </Link>
        </div>
        
    
         
      
  );
};

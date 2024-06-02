import DividerSection from '@/components/ui/dividerSection';
import Image from 'next/image';
import latestpostimg from '../../public/react-paisaje.jpg';
import { Title } from '@/components/ui/title';
import { TextParagraph } from '@/components/ui/text';
import { GridContainer } from '@/components/ui/gridContainer';
import ArrowLeft from '@/icons/icons';
import Link from 'next/link';
import RendererNotionPost from '@/components/home/rendererNotionPosts';

export default async function Home() {
  return (
    <>
      <section className="flex md:flex-row flex-col  justify-between  md:gap-10 mt-10 mx-auto  overflow-hidden ">
        <div className="w-1/2 ">
          <Image
            src={latestpostimg}
            alt="imagen portada"
            width={0}
            height={0}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-start gap-8 ">
          <Link href="/" className="hover:text-[#FADB6F]">
            <Title text="The last post in notasdev wreating for dantech from notion" />
          </Link>

          <TextParagraph
            text="  Primera publicacion en notasdev en donde se mostrara el objetivo del
            blog, que a temas se estaran tratando y como se ara esta publicacion"
          />

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

          <div className="flex w-full  justify-end items-end mt-16 ">
            <Link href="">
              <ArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      <DividerSection title="Ultimos articulos" id="articles" />
      <section>
        <GridContainer>
          <RendererNotionPost />
        </GridContainer>

        <div className="flex justify-center mt-5">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ">
            Todos los articulos
          </button>
        </div>
      </section>
    </>
  );
}

import DividerSection from '@/components/ui/dividerSection';
import Image from 'next/image';
import latestpostimg from '../../public/react-paisaje.jpg';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { GridContainer } from '@/components/ui/gridContainer';
import { ArticleContainer } from '@/components/ui/articleContainer';
import Icons from '@/icons/exportIcons';
import Link from 'next/link';

const articles = [
  {
    title: 'The last post in notasdev wreating for dantech from notion',
    description:
      'Primera publicacion en notasdev en donde se mostrara el objetivo del blog, que a temas se estaran tratando y como se ara esta publicacion',
    author: 'dantech',
    date: '2021-10-10',
    link: '/articles/1',
  },
  {
    title: 'The last post in notasdev wreating for dantech from notion',
    description:
      'Primera publicacion en notasdev en donde se mostrara el objetivo del blog, que a temas se estaran tratando y como se ara esta publicacion',
    author: 'dantech',
    date: '2021-10-10',
    link: '/articles/1',
  },
  {
    title: 'The last post in notasdev wreating for dantech from notion',
    description:
      'Primera publicacion en notasdev en donde se mostrara el objetivo del blog, que a temas se estaran tratando y como se ara esta publicacion',
    author: 'dantech',
    date: '2021-10-10',
    link: '/articles/1',
  },
  {
    title: 'The last post in notasdev wreating for dantech from notion',
    description:
      'Primera publicacion en notasdev en donde se mostrara el objetivo del blog, que a temas se estaran tratando y como se ara esta publicacion',
    author: 'dantech',
    date: '2021-10-10',
    link: '/articles/1',
  },
];

export default function Home() {
  return (
    <>
      <section className="flex md:flex-row flex-col  justify-between  md:gap-10 my-10 mx-auto  overflow-hidden">
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
        <div className="w-1/2 h-full flex flex-col justify-start gap-8">
          <Link href="/" className='hover:text-[#FADB6F]'>
            <Title text="The last post in notasdev wreating for dantech from notion" />
          </Link>

          <Text
            text="  Primera publicacion en notasdev en donde se mostrara el objetivo del
            blog, que a temas se estaran tratando y como se ara esta publicacion"
          />

          <div className="flex w-full h-auto   justify-end mt-[107px] ">
            <Link href="">
              <Icons.ArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      <DividerSection title="Ultimos articulos" id="articles" />

      <section>
        <GridContainer>
          {/* article */}
          {articles.map((article, index) => (
            <ArticleContainer
              key={index}
              title={article.title}
              description={article.description}
              author={article.author}
              date={article.date}
              link={article.link}
            />
          ))}
        </GridContainer>
      </section>
    </>
  );
}

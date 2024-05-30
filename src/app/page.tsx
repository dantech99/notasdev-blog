import DividerSection from '@/components/ui/dividerSection';
import Image from 'next/image';
import latestpostimg from '../../public/react-paisaje.jpg';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { GridContainer } from '@/components/ui/gridContainer';
import { ArticleContainer } from '@/components/ui/articleContainer';
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
          <Link href="/">
            <Title text="The last post in notasdev wreating for dantech from notion" />
          </Link>

          <Text
            text="  Primera publicacion en notasdev en donde se mostrara el objetivo del
            blog, que a temas se estaran tratando y como se ara esta publicacion"
          />

          <div className="flex w-full h-auto   justify-end mt-[107px] ">
            <Link href="">
              <svg width="29" height="19" viewBox="0 0 29 19" fill="none">
                <path
                  d="M20.041 0.238224L28.2899 8.8152L28.3363 8.85969C28.4772 9.00629 28.5531 9.19493 28.564 9.3868V9.4882C28.5531 9.68007 28.4772 9.86871 28.3363 10.0153L28.2957 10.0513L20.041 18.6368C19.7356 18.9544 19.2404 18.9544 18.935 18.6368C18.6296 18.3191 18.6296 17.8042 18.935 17.4865L25.9838 10.1546L1.17612 10.1553C0.74419 10.1553 0.394043 9.79112 0.394043 9.34192C0.394043 8.89272 0.74419 8.52857 1.17612 8.52857L25.8 8.52793L18.935 1.38847C18.6296 1.07084 18.6296 0.555855 18.935 0.238224C19.2404 -0.0794079 19.7356 -0.0794079 20.041 0.238224ZM27.8717 9.34123L19.488 18.0617L27.7832 9.43767L27.7832 9.43452L27.737 9.39038L27.6897 9.34123H27.8717Z"
                  className="fill-[#E5E5E5] hover:fill-[#FADB6F]"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <DividerSection title="Ultimos articulos" id="articles" />

      <section>
        <GridContainer cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} >
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

import Image from 'next/image';
import authorImg from '../../../../public/dantech.png';
import imgPost from '../../../../public/react-paisaje.jpg';
import { getDatabase, getPageFromSlug, getBlocks } from '@/lib/notion';
import Link from 'next/link';
import Head from 'next/head';
import Text from '@/components/notion/text';
import styles from '@/styles/article.module.css';
import { renderBlock } from '@/components/notion/renderer';

export const revalidate = 1;
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => {
    const slug = page.properties.Slug?.rich_text[0].plain_text;
    return { id: page.id, slug };
  });
}

export default async function PageRenderArticle({ params }) {
  const page = await getPageFromSlug(params?.slug);
  const blocks = await getBlocks(page?.id);

  if (!page || !blocks) {
    return <div>Page not found</div>;
  }

  // estraer los paramas

  return (
    <section className="flex md:flex-col flex-row  justify-between  md:gap-10 mt-10 p-2">
      <header className="flex flex-col gap-5  w-full ">
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold">
            Titulo o encabezado del primer post
          </h1>
        </div>

        <div className="flex gap-2">
          <Image src={authorImg} alt="author" width={50} height={50} />
          <div>
            <h3>Danilo Macea</h3>
            <span>Software Developer</span>
          </div>
        </div>

        <div className="flex">
          <Image
            src={page.cover.external.url ?? imgPost}
            alt="author"
            width={500}
            height={500}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
            quality={ 100}
          />
        </div>
      </header>

      <main className="flex ">
        <div className=" w-[10%]">
          <h4>Share</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div className=" w-full flex  flex-col ">
          <div className="w-[70%] mx-5 text-pretty leading-6 gap-5 flex flex-col">
            <Head>
              <title>{page.properties.Title?.title[0].plain_text}</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <article>
              <h1 className={styles.name}>
                <Text title={page.properties.Title?.title} />
              </h1>
              <section>
                {blocks.map((block) => (
                  <div key={block.id}>{renderBlock(block)}</div>
                ))}
              </section>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
}

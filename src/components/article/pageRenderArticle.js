import { getDatabase, getPageFromSlug, getBlocks } from "@/lib/notion";
import Link from "next/link";
import Head from "next/head";
import Text from "@/components/notion/text";


export async function generateStaticParams(){
  const database = await getDatabase();
  return database?.map((page) => {
    const slug = page.properties.slug?.formula?.string;
    return ({id: page.id, slug})
  });
}

export default async function PageRenderArticle({params}){

  const page = await getPageFromSlug(params?.slug);
  const blocks = await getBlocks(page?.id);

  if (!page || !blocks) {
    return <div>Page not found</div>;
    
  }

  return (
    <div>
      <Head>
        <title>{page.properties.Title?.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text title={page.properties.Title?.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <div key={block.id}>{renderBlock(block)}</div>
          ))}
          <Link href="/" className={styles.back}>
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  )
}
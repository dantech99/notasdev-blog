import Image from 'next/image';
import Link from 'next/link';
import authorImg from '../../../public/react-paisaje.jpg';
import { getDatabase } from '@/lib/notion';
import Text from '@/components/notion/text';
import Description from '@/components/notion/description';
import Tags from '@/components/notion/tags';
export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

async function getPosts() {
  const database = await getDatabase();
  return database;
}

export default async function RendererNotionPost() {
  const posts = await getPosts();
  return (
    <>
      {posts?.map((post) => {
        const slug = post.properties?.Slug?.rich_text[0].text.content;
        return (
          <div className="grid gap-4  p-4 rounded-md" key={post.id}>
            <div className="flex items-center gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                <Image
                  src={authorImg}
                  alt="@shadcn"
                  width={0}
                  height={0}
                  style={{ objectFit: 'cover' }}
                />
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  AC
                </span>
              </span>
              <div>
                <h3 className="font-semibold">author</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">ate</p>
              </div>
            </div>
            <Link href={`/articles/${slug}`}>
              <h2 className="text-2xl font-bold hover:text-[#FADB6F]">
                <Text title={post.properties?.Title?.title} />
              </h2>
            </Link>

            <p className="text-gray-500 dark:text-gray-400">
              <Description
                description={post.properties?.Descripcion?.rich_text}
              />
            </p>
            <div className="flex flex-wrap gap-2">
              {post.properties?.Tags?.multi_select.map((tag) => {
                return <Tags tag={tag} key={tag.id} />;
              })}
            </div>
            <Link
              href={`/articles/${slug}`}
              className="inline-flex items-center justify-end whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 hover:text-[#FADB6F]">
              Leer mas...
            </Link>
          </div>
        );
      })}
    </>
  );
}

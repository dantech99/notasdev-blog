import Link from "next/link"
import Image from "next/image"
import { getDatabase } from "@/lib/notion"
import Text from "@/components/notion/text"
import imgFirstArticle from '../../../public/react-paisaje.jpg'

async function getPosts() {
  const database = await getDatabase()
  return database

}

export default async function  FirstPostHeader(){
  const post =  await  getPosts()

  const slug = post[0].properties?.Slug?.rich_text[0].text.content
  return (
    <section className="flex md:flex-row flex-col  justify-between gap-5  md:gap-10 mt-10 mx-auto  overflow-hidden w-full ">
        <div className="w-full ">
          <Image
            src={post[0].properties?.URL?.url ?? imgFirstArticle }
            alt="imagen portada"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start gap-8 ">
          <Link href={`/articles/${slug}`} className="hover:text-[#FADB6F] text-5xl">
            <Text title={post[0].properties?.Title?.title} ></Text>
          </Link>

          <p>
            {post[0].properties?.Descripcion?.rich_text[0].text.content}
          </p>

          <div className="flex flex-wrap gap-2">
          
          {
            post[0].properties?.Tags?.multi_select.map((tag) => {
              return (
                <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground" key={tag.name}>
                {tag.name}
              </div>
              );
            })
          }
          
          </div>
        </div>
      </section>
  )
}

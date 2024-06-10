import DividerSection from '@/components/ui/dividerSection';
import { GridContainer } from '@/components/ui/gridContainer';
import RendererNotionPost from '@/components/home/rendererNotionPosts';
import FirstPostHeader from '@/components/home/firstPostHeader';

export const revalidate = 10;
export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      {/* renderizado del primer post como cabecera  */}
      <FirstPostHeader />

      {/* renderizado de la seccion de articulos  */}
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

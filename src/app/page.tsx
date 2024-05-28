import { JumboTron } from "@/components/home/jumbrotron";
import DividerSection from "@/components/dividerSection";

export default function Home() {
  return (
    <>
    <section className="flex w-full flex-col gap-20 ">
      <JumboTron />

      <DividerSection title="Ultimos articulos" id="articles" />

      
    </section>
    </>
    
  );
}

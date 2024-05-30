
export default function SectionContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex md:flex-row flex-col  justify-between  md:gap-10 my-10 mx-auto  overflow-hidden">
      {children}
    </section>
  );
}
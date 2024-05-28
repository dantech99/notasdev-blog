export const JumboTron = () => {
  return (
    <section className="flex md:flex-row flex-col gap-8 justify-between items-center md:gap-10 my-10 max-w-screen-xl mx-auto ">
      <div className="w-1/2 ">
        <img src="/react-paisaje.jpg" alt="imagen portada" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-start gap-8">
        <a href="/">
          <h1 className="text-4xl hover:text-[#FADB6F]">
          The last post in the blog off nutriaoft about design
        </h1>
        </a>
        
        <p className="">
          Primera publicacion en notasdev en donde se mostrara el objetivo del blog, que a temas se estaran tratando y como se ara esta publicacion
        </p>

        <div className="flex w-full h-auto   justify-end mt-10 ">
          <a href="">
            <svg
              width="29"
              height="19"
              viewBox="0 0 29 19"
              fill="none">
              <path
                d="M20.041 0.238224L28.2899 8.8152L28.3363 8.85969C28.4772 9.00629 28.5531 9.19493 28.564 9.3868V9.4882C28.5531 9.68007 28.4772 9.86871 28.3363 10.0153L28.2957 10.0513L20.041 18.6368C19.7356 18.9544 19.2404 18.9544 18.935 18.6368C18.6296 18.3191 18.6296 17.8042 18.935 17.4865L25.9838 10.1546L1.17612 10.1553C0.74419 10.1553 0.394043 9.79112 0.394043 9.34192C0.394043 8.89272 0.74419 8.52857 1.17612 8.52857L25.8 8.52793L18.935 1.38847C18.6296 1.07084 18.6296 0.555855 18.935 0.238224C19.2404 -0.0794079 19.7356 -0.0794079 20.041 0.238224ZM27.8717 9.34123L19.488 18.0617L27.7832 9.43767L27.7832 9.43452L27.737 9.39038L27.6897 9.34123H27.8717Z"
                className="fill-[#E5E5E5] hover:fill-[#FADB6F]"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

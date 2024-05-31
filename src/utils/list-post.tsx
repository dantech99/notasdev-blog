import Image from 'next/image'

const listpostui = () => {
  return (
    <div className="px-4 py-5  max-w-7xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
      <div className="flex flex-col  rounded-lg shadow-md border border-gray-800">
        <div className="flex items-center p-4 space-x-4">
          <Image
            src={'/'}
            alt="Author Avatar"
            width="48"
            height="48"
            className="rounded-full"
            style={{ aspectRatio: '48 / 48', objectFit: 'cover' }}
          />
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Mastering React Hooks</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Discover the power of React Hooks and how they can simplify your development workflow.
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              React
            </div>
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Hooks
            </div>
            <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              JavaScript
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border-t dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">April 15, 2023</p>
          <a className="text-primary-500 hover:underline" href="#" rel="ugc">
            Read More
          </a>
        </div>
      </div>
    </div>

  </div>
  )
}
    // <div className="container mx-auto px-4 py-8  md:py-4">
    //   <div className="grid gap-6 md:gap-8">
    //     <div className="grid gap-2 md:gap-3">
    //       <a className="flex items-start gap-6 group" href="#">
    //         <Image
    //           src={authorImg}
    //           alt="Blog Post Image"
    //           width="200"
    //           height="150"
    //           style={{ aspectRatio: '200 / 150', objectFit: 'cover' }}
    //           className="rounded-lg object-cover w-[200px] h-[150px] md:w-[350px] md:h-[180px]"
    //         />
    //         <div className="flex flex-col gap-4 h-full ">
    //           <h2 className="text-lg font-medium group-hover:text-primary transition-colors md:text-3xl">
    //             {title}
    //           </h2>
    //           <p className="text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3">
    //             {description}
    //           </p>
    //           <div className="flex gap-2 ">
    //             <span className="text-[#F69F4E] rounded-2xl text-sm ">
    //               #Nextjs
    //             </span>
    //             <span className="text-[#8D7AFF] rounded-2xl text-sm ">
    //               #Reactjs
    //             </span>
    //             <span className="text-[#FDF396] rounded-2xl text-sm ">
    //               #Git
    //             </span>
    //           </div>
    //           <p className="text-sm text-gray-500 dark:text-gray-400 ">
    //             {date}
    //           </p>
    //         </div>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="flex justify-center mt-8 md:mt-10"></div>
    // </div>

'use client';

interface navBarProps {
  name: string;
  link: string;
  label: string;
}

const navigation = [
  {
    name: 'Home',
    link: '/',
    label: 'Ir a la pagina de inicio',
  },
  {
    name: 'Post',
    link: '/articles',
    label: 'Ir a la pagina de blog',
  },
];

export default function NavBar() {
  return (
    <>
      <nav
        role="navigation"
        className="dark:text-white text-[#333333]   md:flex hidden justify-between">
        <div>
          <h1 className="text-3xl">
            Notas<span className="text-[#FADB6F]">dev</span> 📑
          </h1>
        </div>
        <ul
          role="list"
          className="flex flex-row gap-4  items-center border-[1px] md:border-none md:p-2 ">
          {navigation.map(({ name, link, label }) => (
            <li key="label">
              <a
                href={link}
                className="md:text-base text-xl  dark:hover:text-yellow-200 hover:text-blue-600  font-medium"
                role="link"
                aria-label={label}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="flex md:hidden md:w-full md:flex-row sm:flex-col  flex-col md:justify-between md:items-center text-center">
        <a
          href="/"
          className="md:text-xl text-2xl dark:text-white text-[#333333] md:font-medium md:tracking-widest md:flex">
          Notasdev 📑
        </a>

        <a href="mailto:dandevtech99@gmail.com">
          dandevtech99@gmail.com | Colombia
        </a>
      </div>
    </>
  );
}
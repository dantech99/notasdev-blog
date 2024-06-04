import ButtonChangeTheme from "../buttonChangeTheme";

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
        className="dark:text-white text-[#333333]   md:flex hidden justify-between items-center border-b-2 border-gray-800 p-4">
        <div>
          <h1 className="text-4xl font-bold">
            Notas<span className="dark:text-[#FADB6F] text-blue-600">dev</span> 📝
          </h1>
        </div>
        <ul
          role="list"
          className="flex flex-row gap-4  items-center border-[1px] md:border-none md:p-2 ">
          {navigation.map(({ name, link, label }) => (
            <li key="label">
              <a
                href={link}
                className="md:text-base text-2xl  dark:hover:text-yellow-200 hover:text-blue-600  font-medium"
                role="link"
                aria-label={label}>
                {name}
              </a>
            </li>
          ))}
          <li>
            <ButtonChangeTheme />
          </li>
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

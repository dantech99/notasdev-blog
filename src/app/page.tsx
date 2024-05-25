import { Header } from "@/_components/home/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto md:max-w-5xl max-w-3xl items-center justify-between p-4 ">
      <Header />
      <h1 className="text-4xl font-bold">Hello, world!</h1>
    </main>
  );
}
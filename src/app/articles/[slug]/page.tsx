import Image from 'next/image';
import authorImg from '../../../../public/dantech.png';
import imgPost from '../../../../public/react-paisaje.jpg';

export default function Articles() {
  return (
    <section className="flex md:flex-col flex-row  justify-between  md:gap-10 mt-10 ">
      <header className="flex flex-col gap-5  w-full ">
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold">
            Titulo o encabezado del primer post
          </h1>
        </div>

        <div className="flex gap-2">
          <Image src={authorImg} alt="author" width={50} height={50} />
          <div>
            <h3>Danilo Macea</h3>
            <span>Software Developer</span>
          </div>
        </div>

        <div className="flex">
          <Image
            src={imgPost}
            alt="author"
            width={0}
            height={0}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
          />
        </div>
      </header>

      <main className="flex ">
        <div className="border w-[10%]">
          <h4>Share</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Whatsapp</li>
          </ul>
        </div>
        <div className="border w-full flex gap-3 flex-col ">
          <div className="w-[70%] mx-5 text-pretty">
            <h4>Tutlo del post</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              doloribus quibusdam corrupti quod sit nulla voluptas delectus,
              libero porro ab laboriosam unde, enim cupiditate, suscipit itaque
              quis adipisci rem! Fugit reprehenderit qui assumenda earum
              molestias delectus cum a ullam numquam maxime nobis alias
              laudantium, tenetur sint unde? Commodi, eligendi tempore!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              doloribus quibusdam corrupti quod sit nulla voluptas delectus,
              libero porro ab laboriosam unde, enim cupiditate, suscipit itaque
              quis adipisci rem! Fugit reprehenderit qui assumenda earum
              molestias delectus cum a ullam numquam maxime nobis alias
              laudantium, tenetur sint unde? Commodi, eligendi tempore!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              doloribus quibusdam corrupti quod sit nulla voluptas delectus,
              libero porro ab laboriosam unde, enim cupiditate, suscipit itaque
              quis adipisci rem! Fugit reprehenderit qui assumenda earum
              molestias delectus cum a ullam numquam maxime nobis alias
              laudantium, tenetur sint unde? Commodi, eligendi tempore!
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

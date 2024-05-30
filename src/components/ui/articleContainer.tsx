import { Text } from './text';
import { Subtitle } from './subtitle';

interface ArticleContainerProps {
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
}

export const ArticleContainer = ({
  title,
  description,
  author,
  date,
  link,
}: ArticleContainerProps) => {
  return (
    <article className="">
      <header></header>
      <main>
        <Subtitle text={title} />
        <Text text={description} />
      </main>
      <footer></footer>
    </article>
  );
};

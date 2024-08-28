import { Book } from './components/elements/Book/Book';
import { HeadingLv1 } from './components/layouts/Heading/HeadingLv1';

export default function Home() {
  return (
    <>
      <HeadingLv1>商品一覧</HeadingLv1>
      <Book />
    </>
  );
}

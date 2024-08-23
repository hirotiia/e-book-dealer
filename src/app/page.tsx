import { Book } from './components/elements/Book/Book';
import { HeadingLv2 } from './components/elements/Heading/HeadingLv2';

export default function Home() {
  return (
    <>
      <HeadingLv2 title={'商品一覧'} />
      <Book />
    </>
  );
}

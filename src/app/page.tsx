import { Book } from './components/elements/Book/Book';
import { HeadingLv2 } from './components/elements/Heading/HeadingLv2';

export default function Home() {
  return (
    <main>
      <div className="col-start-2 col-end-3 grid gap-x-4">
        <HeadingLv2 title={'商品一覧'} />
        <Book />
      </div>
    </main>
  );
}

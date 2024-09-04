import { CMSResponse } from '@/app/api/microcms/types';
import { BookItem } from './BookItem';

type Props = {
  dataList: CMSResponse['contents'];
};

export const Books = ({ dataList }: Props) => {
  console.log('Booksコンポーネントがレンダリングされました。');
  return (
    <div className="grid grid-cols-custom gap-10">
      {dataList.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </div>
  );
};

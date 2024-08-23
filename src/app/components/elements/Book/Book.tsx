import { BookItem } from './BookItem';

export const Book = () => {
  const MOCK_DATA = [
    {
      id: 1,
      title: 'Book 1',
      thumbnail: '/thumbnails/discord-clone.png',
      price: 1800,
      author: {
        id: 1,
        name: 'Author 1',
        description: 'Author Descrioption',
        profile_icon: 'https://source.unsplash.com/random/2',
      },
      content: 'content 1',
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: 2,
      title: 'Book 2',
      thumbnail: '/thumbnails/notion.png',
      price: 2980,
      author: {
        id: 2,
        name: 'Author 2',
        description: 'Author Descrioption',
        profile_icon: 'https://source.unsplash.com/random/2',
      },
      content: 'content 2',
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
    {
      id: 3,
      title: 'Book 3',
      thumbnail: '/thumbnails/openai-chatapplication.png',
      price: 3600,
      author: {
        id: 3,
        name: 'Author 3',
        description: 'Author Descrioption',
        profile_icon: 'https://source.unsplash.com/random/2',
      },
      content: 'content 3',
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
    },
  ];

  return (
    <div className="grid grid-cols-custom gap-10">
      {MOCK_DATA.map((data) => (
        <BookItem key={data.id} data={data} />
      ))}
    </div>
  );
};

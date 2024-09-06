export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  price: number;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};

export type CMSResponse = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

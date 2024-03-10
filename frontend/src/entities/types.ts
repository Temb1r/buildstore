export type Post = {
  title: string;
  description: string;
  category: string[];
  data: string;
};

export type Work = {
  id: number;
  title: string;
  description: string;
  category: string;
  discountPercentage: number;
  thumbnail: string;
};

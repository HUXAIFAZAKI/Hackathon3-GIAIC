type product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number;
  discountPrice: number;
  isNew: boolean;
  colors: {
    id: string;
    bgColor: string;
  }[];
  sizes: string[];
  dressStyle: string[];
  rating: number;
};

export const product;

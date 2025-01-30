import shirt1 from '@/public/Images/pic1.png';
import shirt2 from '@/public/Images/pic2.png';
import shirt3 from '@/public/Images/pic3.png';
import shirt4 from '@/public/Images/pic4.png';
import shirt5 from '@/public/Images/pic5.png';
import shirt6 from '@/public/Images/pic6.png';
import shirt7 from '@/public/Images/pic7.png';
import shirt8 from '@/public/Images/pic8.png';
import denim1 from '@/public/Images/denim1.png';
import hoodie1 from '@/public/Images/hoodie1.png'
import cargo1 from '@/public/Images/cargo1.png'
import parkacoat from '@/public/Images/parkacoat.png'
import { StaticImageData } from 'next/image';

type Products = {
  id: string;
  name: string;
  image: StaticImageData;
  otherImages?: StaticImageData[];
  price: number;
  discountprice: number;
  discountPercentage: number;
  rating: number;
  description: string;
  category: string;
  dressStyle: string[];
  size?: string[];
  color?: string[];
};

export const NewProducts: Products[] = [
  {
    id: "18c6da64-3073-47e2-b502-103f40994fe8",
    name: "T-SHIRT WITH TAPE DETAILS",
    image: shirt1,
    otherImages: [shirt1, shirt2, shirt3],
    price: 120,
    discountprice: 100,
    discountPercentage: ((120 - 100) / 120) * 100,
    rating: 4,
    description: "A stylish t-shirt featuring tape details on the sleeves, made with high-quality cotton for ultimate comfort.",
    category: "T-Shirts",
    dressStyle: ["Casual"],
    size:["Small", "Medium", "Large", "X Large"],
    color: ["Red", "Blue", "Green"]
  },
  {
    id: "33d5e542-4ebc-48ca-9e8e-feb7aa24dc65",
    name: "SKINNY FIT JEANS",
    image: shirt2,
    otherImages: [shirt2],
    price: 200,
    discountprice: 100,
    discountPercentage: ((200 - 100) / 200) * 100,
    rating: 3,
    description: "Modern skinny fit jeans designed for a sleek and trendy look. Made with stretchable denim for extra comfort.",
    category: "Jeans",
    dressStyle: ["Casual"],
    size: ["Small", "Medium", "Large", "X Large"],
    color: ["Red", "Blue", "Green"],
  },
  {
    id: "28572613-8ce5-4e24-b67f-931f50a2c9ba",
    name: "CHECKERED SHIRT",
    image: shirt3,
    otherImages: [shirt3],
    price: 150,
    discountprice: 100,
    discountPercentage: ((150 - 100) / 150) * 100,
    rating: 5,
    description: "A classic checkered shirt with a button-down collar, perfect for casual or semi-formal occasions.",
    category: "Shirts",
    dressStyle: ["Casual", "Formal"],
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Black"]
  },
  {
    id: "28f63ceb-daf0-40b2-8df0-41a4cec26944",
    name: "SLEEVE STRIPED T-SHIRT",
    image: shirt4,
    otherImages: [shirt4],
    price: 250,
    discountprice: 200,
    discountPercentage: ((250 - 200) / 250) * 100,
    rating: 4,
    description: "A comfortable cotton t-shirt with contrast striped sleeves, offering a sporty yet casual look.",
    category: "T-Shirts",
    dressStyle: ["Casual", "Gym"],
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Green"],
  },
  {
    id: "f56dce2c-347f-4c89-bbbe-b4b907a7e5f5",
    name: "FLANNEL SHIRT",
    image: shirt5,
    otherImages: [shirt5],
    price: 180,
    discountprice: 150,
    discountPercentage: ((180 - 150) / 180) * 100,
    rating: 4,
    description: "A soft and warm flannel shirt, perfect for layering during cooler months.",
    category: "Shirts",
    dressStyle: ["Casual"],
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Green"]
  },
  {
    id: "0a93d4a7-2ed6-4e38-858f-b462c58251c6",
    name: "DENIM JACKET",
    image: denim1,
    otherImages: [denim1],
    price: 300,
    discountprice: 250,
    discountPercentage: ((300 - 250) / 300) * 100,
    rating: 5,
    description: "A classic denim jacket with a vintage wash, versatile enough for casual or semi-formal outfits.",
    category: "Jackets",
    dressStyle: ["Casual"],
    size: ["S", "M", "L", "XL"],
    color: ["Blue"]
  },
  {
    id: "e8b85c28-3329-41e3-b6f4-8b14f0132bfb",
    name: "CARGO PANTS",
    image: cargo1,
    otherImages: [cargo1],
    price: 230,
    discountprice: 180,
    discountPercentage: ((230 - 180) / 230) * 100,
    rating: 4,
    description: "Stylish cargo pants with multiple pockets and a relaxed fit, perfect for casual outings.",
    category: "Pants",
    dressStyle: ["Casual"],
    size: ["S", "M", "L", "XL"],
    color: ["Black"]
  },
  {
    id: "db017bb0-bfff-4789-b7a4-b4b56c2ecf7b",
    name: "BASIC HOODIE",
    image: hoodie1,
    otherImages: [hoodie1],
    price: 250,
    discountprice: 200,
    discountPercentage: ((250 - 200) / 250) * 100,
    rating: 4,
    description: "A comfortable hoodie with a classic design, perfect for layering or casual wear.",
    category: "Hoodies",
    dressStyle: ["Casual"],
    size: ["Small", "M", "L", "XL"],
    color: ["Black"]
  }
];

export const TopProducts: Products[] = [
  {
    id: "cc4e8668-db49-40bb-bf1d-25e69e639bff",
    name: "VERTICAL STRIPED SHIRT",
    image: shirt5,
    otherImages: [shirt5],
    price: 280,
    discountprice: 250,
    discountPercentage: ((280 - 250) / 280) * 100,
    rating: 4,
    description: "An elegant vertically striped shirt that pairs well with both formal and casual outfits.",
    category: "Shirts",
    dressStyle: ["Formal"]
  },
  {
    id: "3375ddd7-0ff0-4522-8534-fe93fad85600",
    name: "COURAGE GRAPHIC T-SHIRT",
    image: shirt6,
    otherImages: [shirt6],
    price: 220,
    discountprice: 200,
    discountPercentage: ((220 - 200) / 220) * 100,
    rating: 3,
    description: "A bold graphic t-shirt featuring a 'Courage' design, perfect for streetwear lovers.",
    category: "T-Shirts",
    dressStyle: ["Casual", "Gym"]
  },
  {
    id: "f4a6a760-064b-46b9-a8cd-4a4146f81c37",
    name: "LOOSE FIT BERMUDA SHORTS",
    image: shirt7,
    otherImages: [shirt7],
    price: 180,
    discountprice: 150,
    discountPercentage: ((180 - 150) / 180) * 100,
    rating: 5,
    description: "Relaxed fit Bermuda shorts made with breathable fabric, ideal for summer outings.",
    category: "Shorts",
    dressStyle: ["Casual"]
  },
  {
    id: "2e9705a7-64c4-4918-ab08-26d3cc1ead1e",
    name: "FADED SKINNY JEANS",
    image: shirt8,
    otherImages: [shirt8],
    price: 130,
    discountprice: 120,
    discountPercentage: ((130 - 120) / 130) * 100,
    rating: 4,
    description: "Faded skinny jeans with a comfortable stretch, offering a trendy and modern aesthetic.",
    category: "Jeans",
    dressStyle: ["Casual"]
  },
  {
    id: "db01f4ff-3f0e-4b92-bd1e-b324d6a5d279",
    name: "BASIC CREW T-SHIRT",
    image: shirt3,
    otherImages: [shirt3],
    price: 100,
    discountprice: 80,
    discountPercentage: ((100 - 80) / 100) * 100,
    rating: 4,
    description: "A simple, classic crew-neck t-shirt, a must-have for any wardrobe.",
    category: "T-Shirts",
    dressStyle: ["Casual, Formal"]
  },
  {
    id: "4ab5cd6b-7178-46d4-a2d3-54e9c6dbe716",
    name: "PARKA COAT",
    image: parkacoat,
    otherImages: [parkacoat],
    price: 400,
    discountprice: 350,
    discountPercentage: ((400 - 350) / 400) * 100,
    rating: 5,
    description: "A stylish and warm parka coat, perfect for winter weather.",
    category: "Jackets",
    dressStyle: ["Casual"]
  },
  {
    id: "9b1d6f95-4391-43f9-bb4a-4e2633d6c106",
    name: "LEATHER JACKET",
    image: shirt6,
    otherImages: [shirt6],
    price: 500,
    discountprice: 450,
    discountPercentage: ((500 - 450) / 500) * 100,
    rating: 5,
    description: "A high-quality leather jacket for a bold, timeless look.",
    category: "Jackets",
    dressStyle: ["Casual", "Gym"]
  }
];

export const allProducts: Products[] = [...NewProducts, ...TopProducts];

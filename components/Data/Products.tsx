import shirt1 from '@/public/Images/pic1.png'
import shirt2 from '@/public/Images/pic2.png'
import shirt3 from '@/public/Images/pic3.png'
import shirt4 from '@/public/Images/pic4.png'
import shirt5 from '@/public/Images/pic5.png'
import shirt6 from '@/public/Images/pic6.png'
import shirt7 from '@/public/Images/pic7.png'
import shirt8 from '@/public/Images/pic8.png'

type Products = {
  id: string
  name: string
  image: string | any
  otherImages?: string[]
  price: number
  discountprice: number
  discountPercentage: number
  rating: number
  description: string
}

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
    description: "A stylish t-shirt featuring tape details on the sleeves, made with high-quality cotton for ultimate comfort."
  },
  {
    id: "33d5e542-4ebc-48ca-9e8e-feb7aa24dc65",
    name: "SKINNY FIT JEANS",
    image: shirt2,
    otherImages:[shirt2],
    price: 200,
    discountprice: 100,
    discountPercentage: ((200 - 100) / 200) * 100,
    rating: 3,
    description: "Modern skinny fit jeans designed for a sleek and trendy look. Made with stretchable denim for extra comfort."
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
    description: "A classic checkered shirt with a button-down collar, perfect for casual or semi-formal occasions."
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
    description: "A comfortable cotton t-shirt with contrast striped sleeves, offering a sporty yet casual look."
  },
]

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
    description: "An elegant vertically striped shirt that pairs well with both formal and casual outfits."
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
    description: "A bold graphic t-shirt featuring a 'Courage' design, perfect for streetwear lovers."
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
    description: "Relaxed fit Bermuda shorts made with breathable fabric, ideal for summer outings."
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
    description: "Faded skinny jeans with a comfortable stretch, offering a trendy and modern aesthetic."
  },
]

export const allProducts: Products[] = [...NewProducts, ...TopProducts]
import shirt1 from '@/public/Images/pic1.png'
import shirt2 from '@/public/Images/pic2.png'
import shirt3 from '@/public/Images/pic3.png'
import shirt4 from '@/public/Images/pic4.png'
import shirt5 from '@/public/Images/pic5.png'
import shirt6 from '@/public/Images/pic6.png'
import shirt7 from '@/public/Images/pic7.png'
import shirt8 from '@/public/Images/pic8.png'

type Products = {
  name: string
  image: string | any
  price: number
  discountprice: number
  rating: number
}

export const NewProducts: Products[] = [
  {
    name: "T-SHIRT WITH TAPE DETAILS",
    image: shirt1,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
  {
    name: "SKINNY FIT JEANS",
    image: shirt2,
    price: 200,
    discountprice: 100,
    rating: 3,
  },
  {
    name: "CHECKERED SHIRT",
    image: shirt3,
    price: 200,
    discountprice: 100,
    rating: 5,
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    image: shirt4,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
]

export const TopProducts:Products[] = [
  {
    name: "VERTICAL STRIPED SHIRT",
    image: shirt5,
    price: 200,
    discountprice: 100,
    rating: 4,
  },
  {
    name: "COURAGE GRAPHIC T-SHIRT",
    image: shirt6,
    price: 200,
    discountprice: 100,
    rating: 3,
  },
  {
    name: "LOOSE FIT BERMUDA SHORTS",
    image: shirt7,
    price: 200,
    discountprice: 100,
    rating: 5,
  },
  {
    name: "FADED SKINNY JEANS",
    image: shirt8,
    price: 200,
    discountprice: 100,
    rating:4
  },

]
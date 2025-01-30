export interface Review {
  name: string;
  review: string;
  stars: number;
}
const reviews:Review[] = [
  {
    name:"Sarah M",
    review:`""I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"`,
    stars:5
  },
  {
    name:"Alex K.",
    review:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    stars:4
  },
  {
    name:"James L.",
    review:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    stars:5,
  },
  {
    name:"Emily W.",
    review:`"Shop.co has become my go-to destination for stylish and trendy clothing. The attention to detail and the quality of the products are remarkable. I can't recommend them enough."`,
    stars:4
  },
  {
    name:"Michael R.",
    review:`"I'm a fashion enthusiast, and Shop.co has become my go-to source for exceptional clothing. The selection is impressive, and the customer service is exceptional."`,
    stars:5
  },
  {
    name:"Olivia C.",
    review:`"Shop.co is a game-changer in the world of fashion. The attention to detail and the quality of the products are outstanding. I can't recommend them enough."`,
    stars:4
  }
]

export default reviews;
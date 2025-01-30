import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

type SocialNetworks = {
  id: number;
  icon: React.ReactNode;
  url: string;
};

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaTwitter />,
    url: "https://twitter.com",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    url: "https://facebook.com",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://instagram.com",
  },
  {
    id: 4,
    icon: <FaGithub />,
    url: "https://github.com/HUXAIFAZAKI/",
  },
];

export default socialsData;
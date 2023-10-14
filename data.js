import { BiMenu, BiSolidShoppingBags } from "react-icons/bi";
import { BsSmartwatch, BsPhone } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { PiTelevisionFill } from "react-icons/pi";
import { MdOutlineWatch } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
const categories = [
  {
    id: 1,
    name: "Fashion",
    slug: "fashion",
    description:
      "Explore the latest trends in clothing, footwear, and accessories. Find stylish options in categories like Clothing and Footwear.",
    icon: FaTshirt,
    image: "",
  },
  {
    id: 2,
    name: "Electronics",
    slug: "electronics",
    description:
      "Discover cutting-edge electronics, including Smartphones, Tablets, and Computers. Stay up-to-date with the latest technology trends.",
    icon: PiTelevisionFill,
    image: "",
  },
  {
    id: 3,
    name: "Phones",
    slug: "phones",
    description:
      "Stay connected with the best mobile phones. Explore our collection of Phones and Tablets for the latest models.",
    icon: BsPhone,
    image: "",
  },
  {
    id: 4,
    name: "Computers",
    slug: "computers",
    description:
      "Enhance your productivity with powerful laptops and desktops. Shop in the Computers category for top computing solutions.",
    icon: FaComputer,
    image: "",
  },
  {
    id: 5,
    name: "Watches",
    slug: "watches",
    description:
      "Stay punctual and fashionable with our premium Watch collection. Choose from a variety of stylish timepieces.",
    icon: BsSmartwatch,
    image: "",
  },
  {
    id: 6,
    name: "Digital Watches",
    slug: "digital-watches",
    description:
      "Experience the future of timekeeping with Digital Watches. Discover our range of smart timepieces.",
    icon: MdOutlineWatch,
    image: "",
  },
  {
    id: 7,
    name: "Beddings",
    slug: "beddings",
    description:
      "Rest in comfort with our high-quality Beddings. Explore options like Bedsheets and Pillows for a good night's sleep.",
    icon: IoBedOutline,
    image: "",
  },
  {
    id: 8,
    name: "Bags",
    slug: "bags",
    description:
      "Carry your essentials in style with our Bags collection. Find a variety of fashionable bags for every occasion.",
    icon: BiSolidShoppingBags,
    image: "",
  },
];

const subCategories = [
  //Fashion
  { id: 1, catId: 1, title: "Shoes" },
  { id: 2, catId: 1, title: "Pants" },
  { id: 3, catId: 1, title: "Shirts" },
  { id: 4, catId: 1, title: "T-Shirts" },
  { id: 5, catId: 1, title: "Accessories" },
  { id: 6, catId: 1, title: "Sweaters" },
  { id: 7, catId: 1, title: "Suits" },
  //Electronics
  { id: 8, catId: 2, title: "Fridges" },
  { id: 9, catId: 2, title: "TVs" },
  { id: 10, catId: 2, title: "Woofers" },
];
const products = [
  //SHOES
  {
    id: 1,
    title: "Women's Sneakers Women's Shoes Ladies",
    image: "/shoes/women-sneakers.jpg",
    slug: "fashion-womens-sneakers-womens-shoes-ladies",
    subCatId: 1,
    catId: 1,
    description:
      "Women's fashionable sports shoes are white in color. The upper material is breathable fiber cloth, the sole material is wear-resistant rubber, and the inner material is cloth. They are comfortable, breathable, anti-skid and wear-resistant. They are suitable for various occasions in life",
    hasFreeDelivery: true,
    currentPrice: 24000,
    originalPrice: 29000,
    subCatName: "Shoes",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  {
    id: 2,
    title: "Women's Fashion Sports Sneakers - White",
    image: "/shoes/women-sports.jpg",
    slug: "fashion-womens-fashion-sports-sneakers-white",
    subCatId: 1,
    catId: 1,
    description:
      "Women's fashionable sports shoes are white in color. The upper material is breathable fiber cloth, the sole material is wear-resistant rubber, and the inner material is cloth. They are comfortable, breathable, anti-skid and wear-resistant. They are suitable for various occasions in life",
    hasFreeDelivery: true,
    currentPrice: 19990,
    originalPrice: 45000,
    subCatName: "Shoes",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  {
    id: 3,
    title: "Ladies Fashion Sandals Platform Wedges Casual Slippers - Black",
    image: "/shoes/ladies-sandals.jpg",
    slug: "fashion-ladies-fashion-sandals-platform-wedges-casual-slippers-black",
    subCatId: 1,
    catId: 1,
    description:
      "Stylish shoes are easy to wear and breathable. At the same time, with a soft thick sole, it is not only comfortable but also shock resistant.",
    hasFreeDelivery: true,
    currentPrice: 89800,
    originalPrice: 135000,
    subCatName: "Shoes",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  // PANTS
  {
    id: 4,
    title: "Mens Multi-pocket Cargo Pants Elastic Waist Hip Hop Jogging",
    image: "/pants/multi-pocket.jpg",
    slug: "generic-mens-multi-pocket-cargo-pants-elastic-waist-hip-hop-jogging",
    subCatId: 2,
    catId: 1,
    description:
      "Style:Casual Length:Full Waist Type:Elastic Waist,Low Fit Style:Fitted Pattern:Solid Decoration:Multi-pockets Season:Spring, Summer, Autumn Size: XL(cm/inch); Waist circumference:66-97/26-38.2 ; Hip circumference:106/41.7 ; Length of pants:103/40.6 colour:Dark Blue Material:Cotton Blend",
    hasFreeDelivery: true,
    currentPrice: 51452,
    originalPrice: 102904,
    subCatName: "Pants",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  {
    id: 5,
    title: "Spring Summer Pants",
    image: "/pants/spring-summer.jpg",
    slug: "fashion-spring-summer-pants",
    subCatId: 2,
    catId: 1,
    description: "Summa Pants",
    hasFreeDelivery: true,
    currentPrice: 248000,
    originalPrice: 298000,
    subCatName: "Pants",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  {
    id: 6,
    title: "New Men's Casual Jogging Pants Sports Pants Men's",
    image: "/pants/men-casual.jpg",
    slug: "generic-new-mens-casual-jogging-pants-sports-pants-mens",
    subCatId: 2,
    catId: 1,
    description: "Summa Pants",
    hasFreeDelivery: true,
    currentPrice: 51000,
    originalPrice: 102000,
    subCatName: "Pants",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  //FRIDGES
  {
    id: 7,
    title: "ADH 98 Liters Double Door Refrigerator BCD 80999 - Silver",
    image: "/fridges/double-door.jpg",
    slug: "adh-98-liters-double-door-refrigerator-bcd",
    subCatId: 8,
    catId: 2,
    description:
      "Sleek and Beautiful: ADH Refrigerator is amazing! This fridge is perfect for a small office, dorm room, kitchen or playroom. The compressor cooling fridge will keep your drinks and food at a perfect temperature. With the built in freezer you can store your dinner, ice cream or other snacks!",
    hasFreeDelivery: true,
    currentPrice: 572500,
    originalPrice: 700000,
    subCatName: "Fridges",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
  {
    id: 8,
    title: "Hisense 195 Litres Single Door Silver Fridge - Silver",
    image: "/fridges/single-door.jpg",
    slug: "adh-98-liters-double-door-refrigerator-bcd",
    subCatId: 8,
    catId: 2,
    description:
      "With an optimized system design, enjoy a quieter life with low noise operation from your Hisense Refrigerator RR120DAGS. This product has a removable multiple-sealed door that can effectively isolate external heat and is also easy to clean. This product also has a multi-air flow system that distributes cold air evenly at each corner so that food quickly reaches the ideal storage temperature.",
    hasFreeDelivery: true,
    currentPrice: 802500,
    originalPrice: 1300000,
    subCatName: "Fridges",
    images: ["tshirt1.jpg", "tshirt2.jpg"],
  },
];

export { categories, subCategories, products };

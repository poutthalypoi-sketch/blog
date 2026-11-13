export type product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};
export const products: product[] = [
  {
    id: "1",
    image: "/pictur/MaxBook.jpg",
    name: "MaxBook",
    price: 19.99,
    description: "This is the description for Product 1.",
  },
    {
    id: "2",
    image: "/pictur/2244736_main.avif",
    name: "Huawei-MateBook",
    price: 29.99,
    description: "This is the description for Product 2.",
  },
    {
    id: "3",
    image: "/pictur/Huawei-MateBook.webp",
    name: "Huawei-MateBook",
    price: 39.99,
    description: "This is the description for Product 3.",
  },
    {
    id: "4",
    image: "/pictur/iphone 15.jpg",
    name: "IPhone 14 Pro Max",  
    price: 49.99,   
    description: "This is the description for Product 4.",
  }
];
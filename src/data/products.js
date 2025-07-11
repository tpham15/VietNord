// src/data/products.jsx
import { images } from "../assets/assets";
export const products = [
  {
    id: 1,
    name: "Robusta Coffee – Dak Lak",
    category: "Coffee",
    origin: "Dak Lak",
    img: images.robustaDakLak,
    price: 2.80,
    moq: "500kg",
  },
  {
    id: 2,
    name: "Cashew Nuts – Binh Phuoc",
    category: "Cashew",
    origin: "Binh Phuoc",
    img: images.cashewBinhPh,
    price: 5.50,
    moq: "200kg",
  },
  {
    id: 3,
    name: "Black Pepper – Phu Quoc",
    category: "Pepper",
    origin: "Phu Quoc",
    img: images.pepperPhuQuoc,
    price: 4.20,
    moq: "300kg",
  },
  {
    id: 4,
    name: "Lotus Tea – Thai Nguyen",
    category: "Tea",
    origin: "Thai Nguyen",
    img: images.lotusTea,
    price: 12.00,
    moq: "100kg",
  },
  {
    id: 5,
    name: "Cinnamon Sticks – Thanh Hoa",
    category: "Spices",
    origin: "Thanh Hoa",
    img: images.cinnamonTH,
    price: 3.00,
    moq: "250kg",
  },
  {
    id: 6,
    name: "Dried Mango – Tien Giang",
    category: "Fruits",
    origin: "Tien Giang",
    img: images.driedMango,
    price: 6.00,
    moq: "150kg",
  },
];
export default products;

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductReview = {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  description: string;
  details: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  images: {
    src: string;
    alt: string;
    color?: string;
  }[];
  reviews: ProductReview[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
};

export const featuredProduct: Product = {
  id: "prod-001",
  name: "Premium Wireless Laptop",
  price: 1299.99,
  discount: 1499.99,
  description: "Our most powerful laptop with exceptional performance for professionals. Features a stunning display, all-day battery life, and sleek design that's as powerful as it is portable.",
  details: [
    "17-inch Retina display with True Tone technology",
    "Ultra-fast processor with 12 cores",
    "32GB unified memory for smooth multitasking",
    "1TB SSD storage",
    "Up to 20 hours of battery life",
    "1080p FaceTime HD camera with advanced image signal processor",
    "Studio-quality three-microphone array",
    "Magic Keyboard with Touch ID",
    "Ultra-fast WiFi 6E and Bluetooth 5.3",
  ],
  sizes: ["S", "M", "L", "XL"],
  colors: [
    { name: "Space Gray", hex: "#616365" },
    { name: "Silver", hex: "#E3E4E5" },
    { name: "Midnight Blue", hex: "#1C2C4C" },
    { name: "Starlight", hex: "#FAE7CF" },
  ],
  images: [
    { 
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1280&q=80", 
      alt: "Gray laptop at an angle on desk",
      color: "Space Gray" 
    },
    { 
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1280&q=80", 
      alt: "Gray laptop keyboard close-up",
      color: "Space Gray" 
    },
    { 
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1280&q=80", 
      alt: "Person using laptop",
      color: "Silver" 
    },
    { 
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1280&q=80", 
      alt: "Woman using laptop on desk",
      color: "Silver" 
    }
  ],
  rating: 4.8,
  reviewCount: 124,
  reviews: [
    {
      id: "rev-001",
      user: "Alex Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "2025-03-12",
      title: "Exceeded my expectations",
      content: "This laptop is by far the best I've ever owned. The performance is incredible, and the battery life is just as advertised. I work in video editing and it handles everything I throw at it without breaking a sweat.",
      helpful: 24
    },
    {
      id: "rev-002",
      user: "Samantha Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      date: "2025-03-08",
      title: "Perfect for creative professionals",
      content: "The screen quality is phenomenal, and the color accuracy is spot-on. I've been using it for graphic design work, and it's made my workflow significantly more efficient. Worth every penny.",
      helpful: 19
    },
    {
      id: "rev-003",
      user: "Michael Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
      date: "2025-02-24",
      title: "Great laptop with one small issue",
      content: "I love almost everything about this laptop. It's fast, the build quality is excellent, and the keyboard is a joy to type on. The only minor issue I've had is that it can get quite warm during extended use.",
      helpful: 12
    }
  ],
  inStock: true,
  category: "Electronics"
};

export const relatedProducts: Product[] = [
  {
    id: "prod-002",
    name: "Ultra-Slim Wireless Mouse",
    price: 79.99,
    description: "Precision wireless mouse designed for comfort and productivity.",
    details: [
      "Ergonomic design for all-day comfort",
      "5-month battery life",
      "Connects via Bluetooth or USB receiver",
      "Works on virtually any surface"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Space Gray", hex: "#616365" },
      { name: "Silver", hex: "#E3E4E5" },
    ],
    images: [
      { 
        src: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1280&q=80", 
        alt: "Wireless mouse on desk",
        color: "Space Gray" 
      }
    ],
    rating: 4.6,
    reviewCount: 98,
    reviews: [],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "prod-003",
    name: "Premium Laptop Sleeve",
    price: 49.99,
    description: "Water-resistant sleeve that protects your laptop in style.",
    details: [
      "Premium eco-friendly materials",
      "Water and shock resistant",
      "Extra pocket for accessories",
      "Soft microfiber interior lining"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight Blue", hex: "#1C2C4C" },
      { name: "Charcoal Gray", hex: "#3C3C3C" },
    ],
    images: [
      { 
        src: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1280&q=80", 
        alt: "Laptop sleeve in gray",
        color: "Charcoal Gray" 
      }
    ],
    rating: 4.9,
    reviewCount: 56,
    reviews: [],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "prod-004",
    name: "Ergonomic Laptop Stand",
    price: 59.99,
    description: "Elevate your laptop to the perfect viewing height for better posture.",
    details: [
      "Adjustable height settings",
      "Foldable and portable design",
      "Premium aluminum construction",
      "Non-slip silicone pads"
    ],
    sizes: ["M"],
    colors: [
      { name: "Silver", hex: "#E3E4E5" },
    ],
    images: [
      { 
        src: "https://images.unsplash.com/photo-1636753982724-4acd27648390?auto=format&fit=crop&w=1280&q=80", 
        alt: "Aluminum laptop stand",
        color: "Silver" 
      }
    ],
    rating: 4.7,
    reviewCount: 42,
    reviews: [],
    inStock: true,
    category: "Accessories"
  }
];

interface cardData {
    id: number;
    src: string;
    itemName: string;
    discountedPrice: number;
    originalPrice: number;
    scale?: number;
    rating?: number;
    unitsSold?: number
}

export const flashSale: cardData[] = [
    {
        id: 1,
        src: "https://static.cilory.com/579418-thickbox_default/grey-zip-closure-classic-bomber-jacket.jpg",
        itemName: "EliteShield Performance Men's Jacket",
        discountedPrice: 255000,
        originalPrice: 525000,
        scale: 6,
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
        itemName: "UrbanFit Casual Cotton Hoodie",
        discountedPrice: 189000,
        originalPrice: 350000,
        scale: 8,
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        itemName: "ProWear Premium Sports Sneakers",
        discountedPrice: 329000,
        originalPrice: 650000,
        scale: 9,
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        itemName: "AeroFlex Men's Training T-Shirt",
        discountedPrice: 99000,
        originalPrice: 150000,
        scale: 7,
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        itemName: "TrailRunner Waterproof Boots",
        discountedPrice: 499000,
        originalPrice: 820000,
        scale: 9,
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
        itemName: "SwiftKick Men's Running Shoes",
        discountedPrice: 299000,
        originalPrice: 540000,
        scale: 7,
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1514996937319-344454492b37",
        itemName: "PrimeEdge Casual Men's Shirt",
        discountedPrice: 159000,
        originalPrice: 300000,
        scale: 6,
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1532153955177-f59af40d6472",
        itemName: "ThunderStrike Outdoor Boots",
        discountedPrice: 450000,
        originalPrice: 780000,
        scale: 9,
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        itemName: "UrbanStreet High Ankle Shoes",
        discountedPrice: 289000,
        originalPrice: 560000,
        scale: 8,
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        itemName: "AirMesh Breathable T-Shirt",
        discountedPrice: 109000,
        originalPrice: 180000,
        scale: 7,
    },
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        itemName: "RetroFit Oversized Hoodie",
        discountedPrice: 180000,
        originalPrice: 350000,
        scale: 6,
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        itemName: "SkyWalk Lightweight Sneakers",
        discountedPrice: 230000,
        originalPrice: 450000,
        scale: 7,
    },
];

export const todayForYouData: cardData[] = [
  {
    id: 1,
    src: "https://static.cilory.com/579418-thickbox_default/grey-zip-closure-classic-bomber-jacket.jpg",
    itemName: "EliteShield Performance Men's Jacket",
    discountedPrice: 255000,
    originalPrice: 525000,
    rating: 4.5,
    unitsSold: 320
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    itemName: "AeroFlex Smart Fitness Watch",
    discountedPrice: 129000,
    originalPrice: 219000,
    rating: 4.7,
    unitsSold: 900
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    itemName: "UrbanStride Men's Sneakers",
    discountedPrice: 175000,
    originalPrice: 330000,
    rating: 4.4,
    unitsSold: 710
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    itemName: "CrystalTone Wireless Earbuds",
    discountedPrice: 89000,
    originalPrice: 159000,
    rating: 4.8,
    unitsSold: 1200
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    itemName: "ComfyWear Winter Hoodie",
    discountedPrice: 95000,
    originalPrice: 180000,
    rating: 4.2,
    unitsSold: 260
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    itemName: "VisionX UV Blocking Sunglasses",
    discountedPrice: 59000,
    originalPrice: 129000,
    rating: 4.1,
    unitsSold: 180
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    itemName: "HomeBrew Mini Coffee Maker",
    discountedPrice: 199000,
    originalPrice: 350000,
    rating: 4.5,
    unitsSold: 520
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d",
    itemName: "AquaPure Stainless Water Bottle",
    discountedPrice: 39000,
    originalPrice: 69000,
    rating: 4.0,
    unitsSold: 140
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    itemName: "StrideMax Running Shoes",
    discountedPrice: 149000,
    originalPrice: 260000,
    rating: 4.6,
    unitsSold: 770
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
    itemName: "WorkEase Ergonomic Office Chair",
    discountedPrice: 459000,
    originalPrice: 790000,
    rating: 4.7,
    unitsSold: 310
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    itemName: "PowerCore Fast Charge Bank",
    discountedPrice: 125000,
    originalPrice: 215000,
    rating: 4.6,
    unitsSold: 980
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1559563458-527698bf5295",
    itemName: "ComfortBreeze Table Fan",
    discountedPrice: 79000,
    originalPrice: 150000,
    rating: 4.2,
    unitsSold: 290
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
    itemName: "ZenFlow Aroma Diffuser",
    discountedPrice: 59000,
    originalPrice: 99000,
    rating: 4.3,
    unitsSold: 330
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    itemName: "FitPulse Massage Gun",
    discountedPrice: 299000,
    originalPrice: 480000,
    rating: 4.7,
    unitsSold: 650
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    itemName: "PeakCharge USB-C Cable Pack",
    discountedPrice: 29000,
    originalPrice: 59000,
    rating: 4.0,
    unitsSold: 150
  }
]
import { create } from "zustand";

const useProductStore = create(() => ({
    products :[
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        },
        "slug": "fjallraven-foldsack-no-1-backpack-fits-15-laptops"
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        },
        "slug": "mens-casual-premium-slim-fit-t-shirts"
      },
      {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        },
        "slug": "mens-cotton-jacket"
      },
      {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        },
        "slug": "mens-casual-slim-fit"
      },
      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        },
        "slug": "john-hardy-womens-legends-naga-gold-silver-dragon-station-chain-bracelet"
      },
      {
        "id": 6,
        "title": "Solid Gold Petite Micropave",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 70
        },
        "slug": "solid-gold-petite-micropave"
      },
      {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3,
          "count": 400
        },
        "slug": "white-gold-plated-princess"
      },
      {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 1.9,
          "count": 100
        },
        "slug": "pierced-owl-rose-gold-plated-stainless-steel-double"
      },
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        },
        "slug": "wd-2tb-elements-portable-external-hard-drive-usb-3-0"
      },
      {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 470
        },
        "slug": "sandisk-ssd-plus-1tb-internal-ssd-sata-iii-6-gb-s"
      },
      {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 319
        },
        "slug": "silicon-power-256gb-ssd-3d-nand-a55-slc-cache-performance-boost-sata-iii-2-5"
      },
      {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 400
        },
        "slug": "wd-4tb-gaming-drive-works-with-playstation-4-portable-external-hard-drive"
      },
      {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-Frame Design | Ultra-Thin | 4ms Response Time | IPS Panel Aspect Ratio: 16: 9",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        },
        "slug": "acer-sb220q-bi-21-5-inches-full-hd-1920x1080-ips-ultra-thin"
      },
      {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side, Quantum dot (QLED) technology, HDR support and factory calibration to provide stunningly realistic and accurate color and contrast. Radeon FreeSync 2 technology to help prevent screen tearing, stutter, and input latency, ensuring seamlessly smooth gameplay. 144Hz high refresh rate and 1ms (MPRT) response time (1ms MPRT is based on internal tests. Response time may vary depending on test conditions). Power Supply Type AC 100~240V",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.2,
          "count": 140
        },
        "slug": "samsung-49-inch-chg90-144hz-curved-gaming-monitor"
      },
      {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. The detachable fuzzy lining is great for any weather. Shell: Wear resisting Soft shell is highly windproof and waterproof. 100% Polyester fabric keeps you warm and dry in winter, relax fit Style.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
          "rate": 2.6,
          "count": 235
        },
        "slug": "biylaclesen-womens-3-in-1-snowboard-jacket-winter-coats"
      },
      {
        "id": 16,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE (shell) 100% POLYESTER (lining) Imported Zipper closure Hand Wash Only Premium Synthetic Leather; Lining: 100% Polyester Fully lined; Removable Hood Long Sleeve",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 340
        },
        "slug": "lock-and-love-womens-removable-hooded-faux-leather-moto-biker-jacket"
      },
      {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfect for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and Waterproof.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        },
        "slug": "rain-jacket-women-windbreaker-striped-climbing-raincoats"
      },
      {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported Pull On closure, Machine Wash, Do Not Bleach, DO NOT DRY HOT, Tumble Dry Low",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        },
        "slug": "mbj-womens-solid-short-sleeve-boat-neck-v"
      },
      {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 146
        },
        "slug": "opna-womens-short-sleeve-moisture"
      },
      {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck, Fashion Tees, The fabric is soft and has some stretch.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        },
        "slug": "danvouy-womens-t-shirt-casual-cotton-short"
      }
    ]
    
}));

export default useProductStore;
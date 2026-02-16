export type NiceClass = {
  number: number;
  name: string;
  shortName: string;
  description: string;
  examples: string[];
  keywords: string[];
  relatedClasses: number[];
};

export const niceClasses: NiceClass[] = [
  {
    number: 1,
    name: "Chemicals",
    shortName: "Industrial Chemicals",
    description:
      "Chemical products for industrial, scientific, and agricultural use. Includes adhesives, fertilisers, fire-extinguishing compositions, and unprocessed plastics and resins.",
    examples: ["Industrial adhesives", "Fertilisers", "Photographic chemicals", "Unprocessed resins"],
    keywords: ["trademark class 1", "chemical trademark", "industrial chemicals trademark"],
    relatedClasses: [5, 17, 42],
  },
  {
    number: 2,
    name: "Paints & Coatings",
    shortName: "Paints",
    description:
      "Paints, varnishes, lacquers, preservatives against rust and deterioration, colorants, dyes, inks for printing, and raw natural resins.",
    examples: ["Paint", "Varnish", "Printer ink", "Dyes"],
    keywords: ["trademark class 2", "paint trademark", "coatings brand"],
    relatedClasses: [1, 16, 17],
  },
  {
    number: 3,
    name: "Cosmetics & Cleaning",
    shortName: "Cosmetics",
    description:
      "Non-medicated cosmetics, skincare, haircare, perfumery, essential oils, cleaning preparations, and polishing substances.",
    examples: ["Skincare", "Perfume", "Shampoo", "Cleaning products", "Toothpaste"],
    keywords: ["trademark class 3", "cosmetics trademark", "skincare brand registration", "beauty trademark"],
    relatedClasses: [5, 21, 44],
  },
  {
    number: 4,
    name: "Fuels & Lubricants",
    shortName: "Fuels",
    description:
      "Industrial oils, greases, fuels, illuminants, candles, and wicks for lighting.",
    examples: ["Motor oil", "Candles", "Fuel", "Lubricants"],
    keywords: ["trademark class 4", "fuel trademark", "candle brand"],
    relatedClasses: [1, 7, 11],
  },
  {
    number: 5,
    name: "Pharmaceuticals",
    shortName: "Pharma & Health",
    description:
      "Pharmaceuticals, medical and veterinary preparations, dietetic substances for medical use, food supplements, plasters, disinfectants, and pest control products.",
    examples: ["Medicines", "Vitamins", "Supplements", "Disinfectants", "Baby food"],
    keywords: ["trademark class 5", "pharmaceutical trademark", "supplement brand", "health product trademark"],
    relatedClasses: [3, 10, 44],
  },
  {
    number: 6,
    name: "Metals",
    shortName: "Common Metals",
    description:
      "Common metals and alloys, metal building materials, transportable buildings of metal, cables and wires of common metal, small items of metal hardware.",
    examples: ["Steel beams", "Metal pipes", "Locks", "Keys", "Metal containers"],
    keywords: ["trademark class 6", "metal products trademark", "hardware brand"],
    relatedClasses: [7, 19, 20],
  },
  {
    number: 7,
    name: "Machinery",
    shortName: "Machines & Tools",
    description:
      "Machines, machine tools, power-operated tools, motors and engines (except for land vehicles), and machine coupling and transmission components.",
    examples: ["Industrial machines", "Power tools", "Engines", "Generators"],
    keywords: ["trademark class 7", "machinery trademark", "industrial equipment brand"],
    relatedClasses: [6, 8, 12],
  },
  {
    number: 8,
    name: "Hand Tools",
    shortName: "Hand Tools",
    description:
      "Hand tools and implements (hand-operated), cutlery, side arms, and razors.",
    examples: ["Knives", "Scissors", "Razors", "Garden tools"],
    keywords: ["trademark class 8", "tools trademark", "cutlery brand"],
    relatedClasses: [7, 21],
  },
  {
    number: 9,
    name: "Technology & Software",
    shortName: "Tech & Software",
    description:
      "Scientific, research, navigation, surveying, photographic, cinematographic, audiovisual, optical, measuring, signalling apparatus and instruments. Computers, software, apps, and electronic devices.",
    examples: ["Software", "Mobile apps", "Computers", "Smart devices", "AI systems", "Wearables"],
    keywords: ["trademark class 9", "software trademark", "app trademark", "tech brand registration", "AI trademark"],
    relatedClasses: [35, 38, 42],
  },
  {
    number: 10,
    name: "Medical Devices",
    shortName: "Medical Devices",
    description:
      "Surgical, medical, dental, and veterinary apparatus and instruments, prosthetics, and therapeutic devices.",
    examples: ["Surgical instruments", "Prosthetics", "Hearing aids", "Medical monitors"],
    keywords: ["trademark class 10", "medical device trademark", "health tech brand"],
    relatedClasses: [5, 44],
  },
  {
    number: 11,
    name: "Lighting & HVAC",
    shortName: "Environmental Tech",
    description:
      "Apparatus and installations for lighting, heating, cooling, steam generating, cooking, drying, ventilating, water supply, and sanitary purposes.",
    examples: ["Lamps", "Air conditioners", "Ovens", "Water purifiers", "Radiators"],
    keywords: ["trademark class 11", "lighting trademark", "HVAC brand"],
    relatedClasses: [7, 9, 21],
  },
  {
    number: 12,
    name: "Vehicles",
    shortName: "Vehicles",
    description:
      "Vehicles, apparatus for locomotion by land, air, or water, including cars, bicycles, boats, and drones.",
    examples: ["Cars", "Bicycles", "Boats", "Drones", "Motorcycles"],
    keywords: ["trademark class 12", "vehicle trademark", "automotive brand"],
    relatedClasses: [7, 9, 37],
  },
  {
    number: 13,
    name: "Firearms",
    shortName: "Firearms & Pyrotechnics",
    description:
      "Firearms, ammunition, projectiles, explosives, and fireworks.",
    examples: ["Firearms", "Ammunition", "Fireworks", "Explosives"],
    keywords: ["trademark class 13", "firearms trademark"],
    relatedClasses: [28],
  },
  {
    number: 14,
    name: "Jewellery & Watches",
    shortName: "Jewellery",
    description:
      "Precious metals, jewellery, precious and semi-precious stones, horological and chronometric instruments, watches, and clocks.",
    examples: ["Watches", "Rings", "Necklaces", "Clocks", "Gold items"],
    keywords: ["trademark class 14", "jewellery trademark", "watch brand registration"],
    relatedClasses: [25, 26],
  },
  {
    number: 15,
    name: "Musical Instruments",
    shortName: "Music",
    description:
      "Musical instruments, including electronic instruments, and their accessories.",
    examples: ["Guitars", "Pianos", "Drums", "Synthesizers"],
    keywords: ["trademark class 15", "musical instrument trademark"],
    relatedClasses: [9, 41],
  },
  {
    number: 16,
    name: "Paper & Printed Matter",
    shortName: "Paper & Print",
    description:
      "Paper and cardboard, printed matter, bookbinding materials, stationery, instructional materials, and office requisites.",
    examples: ["Books", "Magazines", "Stationery", "Packaging"],
    keywords: ["trademark class 16", "publishing trademark", "stationery brand"],
    relatedClasses: [35, 41],
  },
  {
    number: 17,
    name: "Rubber & Plastics",
    shortName: "Rubber & Plastics",
    description:
      "Unprocessed and semi-processed rubber, gutta-percha, gum, asbestos, mica, and substitutes; plastics and resins in extruded form; packing, stopping, and insulating materials.",
    examples: ["Insulation materials", "Plastic sheets", "Rubber seals"],
    keywords: ["trademark class 17", "plastics trademark", "insulation brand"],
    relatedClasses: [1, 6, 19],
  },
  {
    number: 18,
    name: "Leather Goods",
    shortName: "Bags & Leather",
    description:
      "Leather and imitations of leather, animal skins and hides, luggage and carrying bags, umbrellas and parasols, and animal accessories.",
    examples: ["Handbags", "Suitcases", "Wallets", "Belts", "Umbrellas"],
    keywords: ["trademark class 18", "leather goods trademark", "handbag brand registration"],
    relatedClasses: [25, 26],
  },
  {
    number: 19,
    name: "Building Materials",
    shortName: "Construction",
    description:
      "Non-metallic building materials, including concrete, cement, wood, glass, and transportable non-metallic structures.",
    examples: ["Bricks", "Cement", "Timber", "Glass panels"],
    keywords: ["trademark class 19", "construction trademark", "building materials brand"],
    relatedClasses: [6, 17, 37],
  },
  {
    number: 20,
    name: "Furniture",
    shortName: "Furniture",
    description:
      "Furniture, mirrors, picture frames, containers (not of metal), and goods of wood, cork, reed, cane, wicker, horn, bone, or plastic.",
    examples: ["Tables", "Chairs", "Mattresses", "Picture frames"],
    keywords: ["trademark class 20", "furniture trademark", "home furnishing brand"],
    relatedClasses: [21, 24, 27],
  },
  {
    number: 21,
    name: "Household Utensils",
    shortName: "Household",
    description:
      "Household or kitchen utensils and containers, cookware, glassware, porcelain, and earthenware.",
    examples: ["Cookware", "Glassware", "Cleaning utensils", "Vases"],
    keywords: ["trademark class 21", "kitchenware trademark", "household goods brand"],
    relatedClasses: [8, 11, 20],
  },
  {
    number: 22,
    name: "Ropes & Textiles",
    shortName: "Ropes & Fibres",
    description:
      "Ropes, string, nets, tents, tarpaulins, sails, sacks, padding and stuffing materials, and raw fibrous textile materials.",
    examples: ["Ropes", "Nets", "Tents", "Sacks"],
    keywords: ["trademark class 22", "rope trademark", "textile raw materials"],
    relatedClasses: [23, 24],
  },
  {
    number: 23,
    name: "Yarns & Threads",
    shortName: "Yarns",
    description:
      "Yarns and threads for textile use.",
    examples: ["Cotton yarn", "Silk thread", "Synthetic fibres"],
    keywords: ["trademark class 23", "yarn trademark"],
    relatedClasses: [22, 24, 26],
  },
  {
    number: 24,
    name: "Textiles & Fabrics",
    shortName: "Textiles",
    description:
      "Textiles and substitutes for textiles, household linen, curtains and textile covers.",
    examples: ["Bed linen", "Curtains", "Towels", "Tablecloths"],
    keywords: ["trademark class 24", "textile trademark", "fabric brand"],
    relatedClasses: [20, 22, 25],
  },
  {
    number: 25,
    name: "Clothing & Footwear",
    shortName: "Fashion",
    description:
      "Clothing, footwear, and headwear for men, women, and children.",
    examples: ["Clothing", "Shoes", "Hats", "Sportswear", "Fashion accessories"],
    keywords: ["trademark class 25", "clothing trademark", "fashion brand registration", "footwear trademark"],
    relatedClasses: [14, 18, 35],
  },
  {
    number: 26,
    name: "Haberdashery",
    shortName: "Lace & Accessories",
    description:
      "Lace, braid, and embroidery, and haberdashery ribbons and bows, buttons, hooks and eyes, pins and needles, artificial flowers, and hair decorations.",
    examples: ["Buttons", "Zips", "Badges", "Hair accessories"],
    keywords: ["trademark class 26", "haberdashery trademark"],
    relatedClasses: [23, 25],
  },
  {
    number: 27,
    name: "Floor Coverings",
    shortName: "Carpets & Rugs",
    description:
      "Carpets, rugs, mats, matting, linoleum, and other materials for covering existing floors, and wall hangings (non-textile).",
    examples: ["Carpets", "Rugs", "Mats", "Linoleum"],
    keywords: ["trademark class 27", "carpet trademark", "flooring brand"],
    relatedClasses: [19, 20, 24],
  },
  {
    number: 28,
    name: "Games & Sporting Goods",
    shortName: "Games & Sports",
    description:
      "Games, toys, playthings, video game apparatus, gymnastic and sporting articles, and Christmas tree decorations.",
    examples: ["Board games", "Video game consoles", "Sports equipment", "Toys"],
    keywords: ["trademark class 28", "toy trademark", "games brand", "sporting goods trademark"],
    relatedClasses: [9, 25, 41],
  },
  {
    number: 29,
    name: "Meat & Dairy",
    shortName: "Processed Food",
    description:
      "Meat, fish, poultry, game, preserved fruits and vegetables, dairy products, edible oils, and fats.",
    examples: ["Cheese", "Milk", "Processed meat", "Edible oils", "Dried fruits"],
    keywords: ["trademark class 29", "food trademark", "dairy brand"],
    relatedClasses: [30, 31, 43],
  },
  {
    number: 30,
    name: "Bakery & Confectionery",
    shortName: "Staple Foods",
    description:
      "Coffee, tea, cocoa, sugar, rice, flour, bread, pastries, confectionery, sauces, spices, and ice cream.",
    examples: ["Coffee", "Tea", "Chocolate", "Bread", "Sauces", "Spices"],
    keywords: ["trademark class 30", "coffee trademark", "bakery brand", "confectionery trademark"],
    relatedClasses: [29, 31, 43],
  },
  {
    number: 31,
    name: "Fresh Produce",
    shortName: "Agriculture",
    description:
      "Raw and unprocessed agricultural, aquacultural, horticultural, and forestry products, live animals, fresh fruits and vegetables, seeds, and natural plants.",
    examples: ["Fresh fruit", "Vegetables", "Seeds", "Live animals", "Plants"],
    keywords: ["trademark class 31", "agriculture trademark", "fresh produce brand"],
    relatedClasses: [29, 30, 44],
  },
  {
    number: 32,
    name: "Beverages",
    shortName: "Non-Alcoholic Drinks",
    description:
      "Beers, non-alcoholic beverages, mineral and aerated waters, fruit beverages and juices, and preparations for making beverages.",
    examples: ["Beer", "Soft drinks", "Juices", "Energy drinks", "Water"],
    keywords: ["trademark class 32", "beverage trademark", "drinks brand registration"],
    relatedClasses: [33, 43],
  },
  {
    number: 33,
    name: "Wines & Spirits",
    shortName: "Alcoholic Drinks",
    description:
      "Alcoholic beverages, except beers, including wines, spirits, liqueurs, and cocktails.",
    examples: ["Wine", "Whisky", "Vodka", "Gin", "Rum"],
    keywords: ["trademark class 33", "spirits trademark", "wine brand registration", "alcohol trademark"],
    relatedClasses: [32, 43],
  },
  {
    number: 34,
    name: "Tobacco",
    shortName: "Tobacco & Vaping",
    description:
      "Tobacco and tobacco substitutes, cigarettes, cigars, electronic cigarettes, vaping devices, and smokers' articles.",
    examples: ["Cigarettes", "E-cigarettes", "Vaping products", "Tobacco"],
    keywords: ["trademark class 34", "tobacco trademark", "vaping brand"],
    relatedClasses: [11],
  },
  {
    number: 35,
    name: "Advertising & Retail",
    shortName: "Business & Marketing",
    description:
      "Advertising, business management, business administration, office functions, retail and wholesale services, and marketing consultancy.",
    examples: ["Advertising agencies", "Retail stores", "E-commerce", "Franchising", "Market research"],
    keywords: ["trademark class 35", "retail trademark", "advertising brand", "e-commerce trademark"],
    relatedClasses: [9, 36, 42],
  },
  {
    number: 36,
    name: "Financial Services",
    shortName: "Finance & Insurance",
    description:
      "Insurance, financial affairs, monetary affairs, real estate services, banking, and investment management.",
    examples: ["Banking", "Insurance", "Investment", "Fintech", "Cryptocurrency services"],
    keywords: ["trademark class 36", "fintech trademark", "insurance brand", "financial services trademark"],
    relatedClasses: [35, 42, 45],
  },
  {
    number: 37,
    name: "Construction & Repair",
    shortName: "Building & Repair",
    description:
      "Building construction, repair, and installation services.",
    examples: ["Construction", "Plumbing", "Electrical installation", "Vehicle repair"],
    keywords: ["trademark class 37", "construction trademark", "repair services brand"],
    relatedClasses: [6, 19, 42],
  },
  {
    number: 38,
    name: "Telecommunications",
    shortName: "Telecom",
    description:
      "Telecommunications services, including broadcasting, internet access, and electronic messaging services.",
    examples: ["ISPs", "Broadcasting", "Streaming platforms", "VoIP"],
    keywords: ["trademark class 38", "telecoms trademark", "broadcasting brand"],
    relatedClasses: [9, 41, 42],
  },
  {
    number: 39,
    name: "Transport & Storage",
    shortName: "Logistics",
    description:
      "Transport, packaging and storage of goods, and travel arrangement services.",
    examples: ["Shipping", "Courier services", "Warehousing", "Travel agencies"],
    keywords: ["trademark class 39", "logistics trademark", "transport brand"],
    relatedClasses: [12, 35],
  },
  {
    number: 40,
    name: "Manufacturing",
    shortName: "Treatment of Materials",
    description:
      "Treatment of materials including custom manufacturing, printing, food processing, and waste treatment.",
    examples: ["Custom manufacturing", "3D printing", "Food processing", "Recycling"],
    keywords: ["trademark class 40", "manufacturing trademark", "3D printing brand"],
    relatedClasses: [7, 37, 42],
  },
  {
    number: 41,
    name: "Education & Entertainment",
    shortName: "Media & Education",
    description:
      "Education, providing of training, entertainment, sporting, and cultural activities. Includes publishing, online courses, and event management.",
    examples: ["Online courses", "Publishing", "Film production", "Events", "Gaming"],
    keywords: ["trademark class 41", "education trademark", "media brand", "entertainment trademark"],
    relatedClasses: [9, 38, 42],
  },
  {
    number: 42,
    name: "Technology Services",
    shortName: "Tech & SaaS",
    description:
      "Scientific and technological services, industrial analysis, software design and development, SaaS, cloud computing, and AI services.",
    examples: ["SaaS platforms", "Software development", "Cloud computing", "AI services", "Web design"],
    keywords: ["trademark class 42", "SaaS trademark", "software services brand", "AI services trademark"],
    relatedClasses: [9, 35, 38],
  },
  {
    number: 43,
    name: "Food & Drink Services",
    shortName: "Hospitality",
    description:
      "Services for providing food and drink, including restaurants, cafes, catering, and temporary accommodation.",
    examples: ["Restaurants", "Cafes", "Hotels", "Catering", "Food delivery"],
    keywords: ["trademark class 43", "restaurant trademark", "hospitality brand", "food delivery trademark"],
    relatedClasses: [29, 30, 35],
  },
  {
    number: 44,
    name: "Medical & Beauty Services",
    shortName: "Health & Beauty",
    description:
      "Medical services, veterinary services, hygienic and beauty care for human beings or animals, and agriculture, aquaculture, horticulture, and forestry services.",
    examples: ["Clinics", "Dentistry", "Spas", "Veterinary", "Pharmacy services"],
    keywords: ["trademark class 44", "medical services trademark", "beauty services brand"],
    relatedClasses: [3, 5, 10],
  },
  {
    number: 45,
    name: "Legal & Security Services",
    shortName: "Legal & IP",
    description:
      "Legal services, security services for the physical protection of tangible property and individuals, personal and social services rendered by others.",
    examples: ["IP attorneys", "Security services", "Licensing", "Private investigation"],
    keywords: ["trademark class 45", "legal services trademark", "IP services brand"],
    relatedClasses: [35, 36, 42],
  },
];

export function getClassByNumber(num: number): NiceClass | undefined {
  return niceClasses.find((c) => c.number === num);
}

export const featuredClasses = [9, 25, 35, 41, 42, 5, 36, 43, 3, 28];

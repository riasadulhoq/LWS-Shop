const productsData = [
  {
    id: crypto.randomUUID(),
    title: "Khaki Graphic T-shirt",
    colour: "Khaki",
    size: "Medium",
    quantity: 212,
    rating: 4,
    currentPrice: 145,
    previousPrice: "",
    image: "image 1.png",
    isAddedToCart: false,
    createdDate: "2024-03-22",
  },
  {
    id: crypto.randomUUID(),
    title: "Orange Striped T-shirt",
    colour: "Orange",
    size: "Medium",
    quantity: 320,
    rating: 1,
    currentPrice: 180,
    previousPrice: "",
    image: "image 10-1.png",
    isAddedToCart: false,
    createdDate: "2025-03-22",
  },
  {
    id: crypto.randomUUID(),
    title: "Skinny Fit Black Jeans",
    colour: "Black",
    size: "Large",
    quantity: 0,
    rating: 3,
    currentPrice: 120,
    previousPrice: "$160",
    image: "image 10-2.png",
    isAddedToCart: false,
    createdDate: "2024-02-10",
  },
  {
    id: crypto.randomUUID(),
    title: "White Collar Blue Polo ",
    colour: "Blue",
    size: "Large",
    quantity: 1,
    rating: 2,
    currentPrice: 240,
    previousPrice: "$260",
    image: "image 7-1.png",
    isAddedToCart: false,
    createdDate: "2023-07-18",
  },
  {
    id: crypto.randomUUID(),
    title: "Courage Graphic T-shirt",
    colour: "Orange",
    size: "Medium",
    quantity: 20,
    rating: 4,
    currentPrice: 180,
    previousPrice: "",
    image: "image 8-2.png",
    isAddedToCart: false,
    createdDate: "2025-06-19",
  },
  {
    id: crypto.randomUUID(),
    title: "Gradient White T-shirt",
    colour: "White",
    size: "Small",
    quantity: 20,
    rating: 2,
    currentPrice: 130,
    previousPrice: "$160",
    image: "image 8.png",
    isAddedToCart: false,
    createdDate: "2025-07-21",
  },
  {
    id: crypto.randomUUID(),
    title: "Vertical Striped Shirt",
    colour: "Red",
    size: "X Large",
    quantity: 20,
    rating: 5,
    currentPrice: 212,
    previousPrice: "$232",
    image: "image 9-1.png",
    isAddedToCart: false,
    createdDate: "2024-01-10",
  },
  {
    id: crypto.randomUUID(),
    title: "Loose Fit Bermuda Shorts",
    colour: "Blue",
    size: "Medium",
    quantity: 20,
    rating: 1,
    currentPrice: 145,
    previousPrice: "",
    image: "image 9-2.png",
    isAddedToCart: false,
    createdDate: "2022-08-15",
  },
  {
    id: crypto.randomUUID(),
    title: "Polo with Tipping Details",
    colour: "Pink",
    size: "Small",
    quantity: 10,
    rating: 3,
    currentPrice: 80,
    previousPrice: "",
    image: "image 9.png",
    isAddedToCart: false,
    createdDate: "2024-11-05",
  },
];

export const getAllProducts = () => {
  return productsData;
};

export const getSortedProducts = (userSelection) => {
  if (userSelection === "mostPopular") {
    const mostPopular = [...productsData].sort((a, b) => b.rating - a.rating);
    // console.log(mostPopular);
    return mostPopular;
  } else if (userSelection === "newest") {
    const newest = [...productsData].sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
    // console.log(newest);
    return newest;
  } else if (userSelection === "lowToHigh") {
    const lowToHigh = [...productsData].sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
    // console.log(lowToHigh);
    return lowToHigh;
  } else if (userSelection === "highToLow") {
    const highToLow = [...productsData].sort(
      (a, b) => b.currentPrice - a.currentPrice
    );
    // console.log(highToLow);
    return highToLow;
  } else {
    return productsData;
  }
};

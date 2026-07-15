// ============================================================
// NO COMPETITION MENU DATA
// ============================================================
// This is the ONLY file you need to touch to update the menu.
// Do not edit any other file to change prices or items.
//
// To add an item, copy an existing block between { and } and
// change the text inside the quotes.
//
// tag options: "favorite" (NC Favorite), "soldout" (Out of Stock), or leave blank ""
// ============================================================

const MENU = [
  {
    category: "Apps",
    items: [
      { name: "Build-Your-Own Loaded Fries", price: "$12.00", description: "Hearty tray of fries, topped with cheese. Load up your fries with anything you please.", tag: "favorite" },
      { name: "Elote Corn Ribs", price: "$15.00", description: "Elote seasoned and topped corn, ready for snacking like a plate of ribs.", tag: "" },
      { name: "Onion Rings", price: "$14.00", description: "", tag: "" },
      { name: "Seaside Poutine", price: "$22.00", description: "Hearty french fries and hot cheese curds, topped with lobster-shrimp mix and house red chile gravy.", tag: "" }
    ]
  },
  {
    category: "Wings",
    items: [
      { name: "8 Piece Wings", price: "$19.00", description: "", tag: "" },
      { name: "Boneless Wings", price: "$17.00", description: "House-cut and marinated chicken, battered and tossed to order in any of our craft sauces.", tag: "" },
      { name: "Cauliflower Wings", price: "$16.00", description: "", tag: "" }
    ]
  },
  {
    category: "Handhelds",
    items: [
      { name: "Rio Grande Handheld", price: "$22.00", description: "Classic New Mexican cheeseburger. Green chile, bacon, cheddar, and an Akaushi beef patty.", tag: "favorite" },
      { name: "Isla Maui Handheld", price: "$19.00", description: "Island inspired, sweet meets heat. Pineapple, bacon, pepper jack, and an island tossed crispy chicken patty.", tag: "" },
      { name: "Craft BBQ Handheld", price: "$20.00", description: "Locally brewed draft root beer bbq. Crispy onions, bacon, cheddar, draft bbq, and an Akaushi beef patty.", tag: "" },
      { name: "Chimayo Handheld", price: "$19.00", description: "Buffalo chicken, northern NM style. Bleu cheese crumbles, ranch dressing, and a chimayo buffalo tossed crispy chicken patty.", tag: "" },
      { name: "Avo Bacon Handheld", price: "$18.00", description: "A fresh classic. Avocado, bacon, Swiss, and a grilled chicken patty.", tag: "" },
      { name: "Lion's Mane Handheld", price: "$18.00", description: "", tag: "soldout" },
      { name: "Mahi Fish Sandwich", price: "$20.00", description: "Market fresh mahi, served on a bun with American cheese, island sauce, lettuce, and pickles.", tag: "" }
    ]
  },
  {
    category: "Grilled Sandwiches",
    items: [
      { name: "Slow-Roasted Reuben", price: "$22.00", description: "Double stacked, hand carved brisket. Slow roasted, piled on grilled rye with crispy sauerkraut and house Russian sauce. Served with a side.", tag: "favorite" },
      { name: "Berry Grilled Cheese", price: "$18.00", description: "A classic from our sister restaurant, Flatiron Bites & Brews. Extra large butter-brioche toast, topped with a house strawberry and blueberry reduction with Swiss and goat cheeses.", tag: "" },
      { name: "New Mexico Grilled Club", price: "$22.00", description: "An adjusted classic from Flatiron Bites & Brews. Fresh sliced turkey, ham, bacon, tomato, local green chile, cheddar, and pepper jack on extra large butter-brioche toast.", tag: "" }
    ]
  },
  {
    category: "Tacos",
    items: [
      { name: "Akaushi Beef Tacos (3)", price: "$16.00", description: "", tag: "favorite" },
      { name: "Shredded Chicken Tacos (3)", price: "$16.00", description: "", tag: "" },
      { name: "Carne Adovada Tacos (3)", price: "$17.00", description: "", tag: "" },
      { name: "Mahi Fish Tacos (3)", price: "$17.00", description: "", tag: "" },
      { name: "Hereford Steak Tacos (3)", price: "$17.00", description: "", tag: "" },
      { name: "Calabacitas Tacos (3)", price: "$15.00", description: "", tag: "" },
      { name: "Impossible Beef Tacos (3)", price: "$15.00", description: "", tag: "soldout" }
    ]
  },
  {
    category: "Plates",
    items: [
      { name: "Sandia LocoMoco", price: "$20.00", description: "Traditional Loco Moco with long-grain rice, an Akaushi Wagyu patty, fresh egg, crispy onions, and house red chile gravy.", tag: "favorite" },
      { name: "Mahi Fish and Chips", price: "$25.00", description: "Market fresh beer battered Mahi Mahi, island sauce, with fries, and house apple coleslaw.", tag: "favorite" },
      { name: "Hereford Flatiron Frites", price: "$34.00", description: "8 oz corn-finished Hereford flat iron steak, sliced. House calabacitas. Crispy frites. Extra-large Texas toast.", tag: "" }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Jalapeño Heat Salad", price: "$20.00", description: "Greens with cucumber, onion, tomatoes, shredded cheese, jalapeños, crispy onions, and an Akaushi patty.", tag: "" },
      { name: "Hereford Steak Salad", price: "$22.00", description: "Greens with cucumber, onion, tomatoes, goat cheese, crispy onions, and ranch dressing.", tag: "" },
      { name: "Greek Salad", price: "$16.00", description: "Greens with cucumber, onion, tomatoes, olives, feta cheese, and grilled chicken.", tag: "" }
    ]
  },
  {
    category: "Kids",
    items: [
      { name: "Kids Roll Ups", price: "$10.00", description: "Kids cheese and tortilla roll ups.", tag: "" },
      { name: "Kids Beef Tacos (2)", price: "$10.00", description: "", tag: "" },
      { name: "Kids Chicken Tacos (2)", price: "$10.00", description: "", tag: "" },
      { name: "Kids Cheeseburger", price: "$12.00", description: "Kids plain burger with your choice of cheese.", tag: "" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Root Beer Float", price: "$7.00", description: "Locally brewed root beer float, made with vanilla bean ice cream, topped with Way 2 Cool Root Beer brewed in Moriarty, New Mexico.", tag: "" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Pepsi Real Sugar Can", price: "$3.00", description: "", tag: "" },
      { name: "Diet Pepsi Can", price: "$3.00", description: "", tag: "" },
      { name: "Way 2 Cool Root Beer", price: "$4.00", description: "", tag: "" },
      { name: "Lifewtr 700ml", price: "$4.00", description: "", tag: "" },
      { name: "Starbucks Vanilla Tripleshot Zero Can", price: "$4.00", description: "", tag: "" },
      { name: "Premium Alkaline Water Bottle", price: "$4.00", description: "", tag: "soldout" },
      { name: "Alani Nu Watermelon Wave Can", price: "$5.00", description: "", tag: "" },
      { name: "Alani Nu Juicy Peach Can", price: "$5.00", description: "", tag: "soldout" },
      { name: "Celsius Essential Blue Crush Can", price: "$5.00", description: "", tag: "soldout" },
      { name: "Celsius Essential Dragonberry Can", price: "$5.00", description: "", tag: "soldout" }
    ]
  }
];

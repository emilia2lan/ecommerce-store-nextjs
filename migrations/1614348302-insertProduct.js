const insertWatchesToDataBase = [
  {
    product_name: 'Rolex Lady-Datejust 26 mm',
    about_collection:
      "This beautiful elegant ladies 26 mm Rolex date just watch would look great on any wrist with fluted bezel, oyster bracelet and roman numeral silver color dial. Date at 3 o'clock stainless steel. The light reflections on the case sides and lugs highlight the elegant profile of the Oyster case, which is fitted with a Fluted bezel.",
    description:
      "Rolex classic feminine watch, the watch Lady-Datejust is the emblematic model that has been a byword for style and accurate timekeeping. The Lady-DateJust is equipped with calibre 2236, a self-winding mechanical movement entirely developed by Rolex. On the Lady-Datejust, it is always fitted with a Crownclasp, Rolex's elegant concealed clasp. It is guaranteed waterproof to a depth of 100 metres (330 feet)",
    images_url: '/rolexDateJust.jpg',
    price: '4500',
  },
  {
    product_name: 'Patek Philippe Calatrava Tiffany & Co 34.6 mm',
    about_collection:
      'Antoine Nobert de Patek knew the importance of relationships and building international clientele and retailer partnerships. In 1851 he partnered with the fine jeweller "Tiffany & Co" New York (USA). One of the brands oldest partnership that is still maintained till this day. This partnership is still shown with the brand having their motif on the dial. One of the only retailers in the world to be allowed to do so on regular production models.There fore making each piece rare and unique.',
    description:
      'This particular model is the Ladies officers case Calatrava ref 7200R-001 model. Made in an all 18t rose gold officers style case, held on a genuine alligator strap with matching rose gold pin buckle. Fitted with a manufacture calibre 240 automatic self-winding movement. Cream dial with applied gold Arabic numerals and Tiffany & Co transferred motif. Finished with a sapphire crystal glass and case back.',
    images_url: '/patek1.jpg',
    price: '26520',
  },
  {
    product_name: 'Tudor Style Swiss Stainless Steel 34 mm',
    about_collection:
      'TUDOR is a Swiss watch brand that makes mechanical wristwatches with refined style and proven reliability. The origins of TUDOR go back to 1926, when "The Tudor" was first registered as a brand in the name of Hans Wilsdorf, the founder of Rolex. In 1946 he founded the company Montres TUDOR SA to produce wristwatches with the quality and reliability but at a more affordable price.',
    description:
      'If you think of golden times, you have good memories. TUDOR dedicates itself to retro design, which has proven its worth since the beginning of watch history. TUDOR inspires with sporty designs as well as with sophisticated vintage creations. Here the highest technical performance meets stylish elegance.',
    images_url: '/tudor.jpg',
    price: '1990',
  },
  {
    product_name: 'Cartier Ballon Bleu 37 mm',
    about_collection:
      "Airy like a balloon, blue like the cabochon it encloses - the Ballon Bleu de Cartier elegantly adorns women's wrists. The Roman numerals are distracted from their course under the influence of a deep blue winding crown. A case with outwardly curved lines, engine-turned dial, sword-shaped hands, bracelets with polished or satin-finished links. The Ballon Bleu de Cartier follows its path through the Cartier watch universe.",
    description:
      "Mechanical movement with automatic winding, moon phases. Case in steel, fluted crown set with a synthetic cabochon-shaped spinel. Silvered guilloché dial. Moon phases at 9 o'clock. Blued-steel sword-shaped hands. Sapphire crystal. Blue alligator-skin strap, interchangeable steel folding buckle. Case thickness: 13 mm. Water-resistant to 3 bar (approx. 30 metres).",
    images_url: '/cartier.jpg',
    price: '9089',
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO watches
	${sql(
    insertWatchesToDataBase,
    'product_name',
    'about_collection',
    'description',
    'images_url',
    'price',
  )}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM
		watches
		`;
};

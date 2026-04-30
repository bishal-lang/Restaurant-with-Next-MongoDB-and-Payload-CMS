import payload from 'payload'
import config from './payload.config'
import fs from 'fs'
import 'dotenv/config'
import path from 'path'

console.log('SECRET:', process.env.PAYLOAD_SECRET)

type Category = 'entrees' | 'mains' | 'sides' | 'sauces' | 'desserts'

type MenuItem = {
  name: string
  price: number
  description: string
  image: string
}

const menuData: {
  category: Category
  items: MenuItem[]
}[] = [
  {
    category: 'entrees',
    items: [
      {
        name: 'Salt & Pepper Squid',
        price: 16.99,
        description: 'Lightly seasoned, crisp-fried squid served with smooth garlic aioli.',
        image: 'entree-salt-pepper-squid.png',
      },
      {
        name: 'Pakora Platter',
        price: 14.99,
        description: 'Golden vegetable fritters with house dipping sauce.',
        image: 'entree-pakora-platter.png',
      },
      {
        name: 'Coconut Shrimp (6 pcs)',
        price: 17.99,
        description: 'Crispy coconut-crumbed prawns with chipotle mayo.',
        image: 'entree-coconut-shrimp.png',
      },
      {
        name: 'Chilli Kick Wings',
        price: 15.99,
        description: 'Crispy wings tossed in our bold house chilli glaze.',
        image: 'entree-chilli-kick-wings.png',
      },
      {
        name: 'Grilled Skewers (2 pcs)',
        price: 13.99,
        description: 'Flame-grilled lamb or chicken skewers.',
        image: 'entree-grilled-skewers.png',
      },
      {
        name: 'Steak-Cut Fries',
        price: 9.99,
        description: 'Thick-cut chips fried to a golden crunch.',
        image: 'entree-steak-cut-fries.png',
      },
      {
        name: 'Panipuri',
        price: 12.99,
        description: 'Crispy puris filled with spiced potato and peas, served with chutneys.',
        image: 'entree-pani-puri.png',
      },
      {
        name: 'Chatpate',
        price: 11.99,
        description: 'Noodles, potato, chickpeas, puffed rice, vegetables, lime and chilli.',
        image: 'entree-chatpate.png',
      },
    ],
  },
  {
    category: 'mains',
    items: [
      {
        name: 'SNV Big Platter',
        price: 36.99,
        description: 'Corn fritters, slaw, fries and tomato chutney with choice of meat.',
        image: 'main-snv-big-platter.png',
      },
      {
        name: 'SNV Famous Grilled Skewers',
        price: 25.99,
        description: 'Chicken, beef or lamb skewers with tomato chutney and salad.',
        image: 'main-snv-famous-grilled-skewers.png',
      },
      {
        name: 'Tasty Fish Cutlets',
        price: 28.99,
        description: 'Pan-fried barramundi with mash and beetroot hummus.',
        image: 'main-tasty-fish-cutlets.png',
      },
      {
        name: "Meat Lover's Cut",
        price: 32.99,
        description: 'Chargrilled beef or lamb steak with mash and salad.',
        image: 'main-meat-lovers-cut.png',
      },
      {
        name: "Chook 'n Crunch Rice Plate",
        price: 18.99,
        description: 'Fried rice with veggies, egg and grilled chicken.',
        image: 'main-chook-crunch-rice-plate.png',
      },
      {
        name: 'Himalayan Cloud Steam Momos',
        price: 18.99,
        description: 'Steamed momos with tomato-sesame chutney.',
        image: 'main-himalayan-cloud-steam-momos.png',
      },
      {
        name: 'Momo Bowl (Steam)',
        price: 21.99,
        description: 'Dumplings with tomato, onion and sesame chutney.',
        image: 'main-momo-bowl.png',
      },
      {
        name: 'Chilli Capsi Momo',
        price: 21.99,
        description: 'Fried momos tossed with capsicum, onion and sauce.',
        image: 'main-chilli-capsi-momo.png',
      },
      {
        name: 'Momo Platter (20 pcs)',
        price: 52.99,
        description: 'Mix of fried, sadeko, chilli and steamed momos.',
        image: 'main-momo-platter.png',
      },
      {
        name: 'Everest Chicken Stack',
        price: 20.99,
        description: 'Grilled chicken burger with cheese and sauce.',
        image: 'main-everest-chicken-stack.png',
      },
      {
        name: 'Himalayan Garden Burger',
        price: 20.99,
        description: 'Paneer burger with vegetables and garlic yoghurt.',
        image: 'main-himalayan-garden-burger.png',
      },
      {
        name: 'King Prawn',
        price: 32.99,
        description: 'Butter-garlic-ginger prawns with salad and garlic bread.',
        image: 'main-king-prawn.png',
      },
      {
        name: 'SNV Zingy Salmon',
        price: 32.99,
        description: 'Pan-seared salmon with ginger, garlic and spices.',
        image: 'main-snv-zingy-salmon.png',
      },
      {
        name: 'Namaste Nepali Set',
        price: 29.99,
        description: 'Rice, lentils, curry, vegetables and chutney.',
        image: 'main-namaste-nepali-set.png',
      },
      {
        name: 'Lamb Cutlets (2 pcs)',
        price: 34.99,
        description: 'Served with mashed potatoes and coleslaw.',
        image: 'main-lamb-cutlets.png',
      },
      {
        name: 'Creamy Penne Pasta',
        price: 21.99,
        description: 'Garlic butter penne with chicken, spinach and parmesan.',
        image: 'main-creamy-penne-pasta.png',
      },
      {
        name: 'Chaumin',
        price: 20.99,
        description: 'Stir-fried spaghetti with vegetables and soy.',
        image: 'main-chaumin.png',
      },
      {
        name: 'Chicken Parmi',
        price: 28.99,
        description: 'Crumbed chicken with cheese and pomodoro on mash.',
        image: 'main-chicken-parmi.png',
      },
    ],
  },
  {
    category: 'sides',
    items: [
      {
        name: 'Curry (small)',
        price: 8.99,
        description: 'A small portion of rich, flavorful curry.',
        image: 'sides-curry.png',
      },
      {
        name: 'Rice',
        price: 4.99,
        description: 'Steamed rice, light and fluffy.',
        image: 'sides-rice.png',
      },
      {
        name: 'Coleslaw',
        price: 4.99,
        description: 'Fresh cabbage salad with creamy dressing.',
        image: 'sides-coleslaw.png',
      },
      {
        name: 'Lentil Soup',
        price: 6.99,
        description: 'Warm and comforting lentil soup.',
        image: 'sides-lentil-soup.png',
      },
      {
        name: 'Chicken / Lamb / Vegetable Soup',
        price: 8.99,
        description: 'Choice of hearty soup with chicken, lamb, or vegetables.',
        image: 'sides-chicken-soup.png',
      },
      {
        name: 'Momo (3 pcs)',
        price: 8.99,
        description: 'Steamed dumplings filled with savory goodness.',
        image: 'sides-momo.png',
      },
      {
        name: 'Potato and Peas Salad',
        price: 6.99,
        description: 'Classic potato salad with peas and spices.',
        image: 'sides-potato-pea-salad.png',
      },
      {
        name: 'Mashed Potatoes',
        price: 6.99,
        description: 'Creamy mashed potatoes.',
        image: 'sides-mashed-potato.png',
      },
      {
        name: 'Keema Rice',
        price: 9.99,
        description: 'Spiced minced meat mixed with rice.',
        image: 'sides-keema-rice.png',
      },
      {
        name: 'Garlic Bread',
        price: 6.99,
        description: 'Toasted bread with garlic butter.',
        image: 'sides-garlic-bread.png',
      },
    ],
  },
  {
    category: 'sauces',
    items: [
      {
        name: 'Garlic Aioli',
        price: 1.5,
        description: 'Creamy garlic sauce.',
        image: 'sauces-garlic-aiolo.png',
      },
      {
        name: 'Chipotle Mayo',
        price: 1.5,
        description: 'Smoky chipotle-infused mayonnaise.',
        image: 'sauces-chipotle-mayo.png',
      },
      {
        name: 'Creamy Mushroom Sauce',
        price: 3.5,
        description: 'Rich mushroom-based sauce.',
        image: 'sauces-creamy-mushroom-sauce.png',
      },
      {
        name: 'Tomato Chutney',
        price: 1.5,
        description: 'Tangy and sweet tomato chutney.',
        image: 'sauces-tomato-chutney.png',
      },
    ],
  },
  {
    category: 'desserts',
    items: [
      {
        name: 'Strawberry Sensation Waffle',
        price: 14.99,
        description: 'Waffle topped with fresh strawberries and cream.',
        image: 'desserts-strawberry-sensation-waffle.png',
      },
      {
        name: 'Nutella Heaven Waffle',
        price: 14.99,
        description: 'Waffle drizzled with rich Nutella.',
        image: 'desserts-nutella-heaven-waffle.png',
      },
      {
        name: 'Luxury Ferrero Waffle',
        price: 14.99,
        description: 'Indulgent waffle with Ferrero chocolate.',
        image: 'desserts-luxury-ferrero-waffle.png',
      },
      {
        name: 'Pistachio Temptation Waffle',
        price: 14.99,
        description: 'Waffle with pistachio cream and crunch.',
        image: 'desserts-pistachio-temptation-waffle.png',
      },
      {
        name: 'Oreo Surprise Waffle',
        price: 14.99,
        description: 'Waffle loaded with Oreo pieces.',
        image: 'desserts-oreo-surprise-waffle.png',
      },
      {
        name: 'Crispy Crepe with Ice Cream',
        price: 14.99,
        description: 'Thin crepe served with ice cream.',
        image: 'desserts-crispy-crepe-ice-cream.png',
      },
      {
        name: 'Rasmalai with Mango Yoghurt',
        price: 14.99,
        description: 'Traditional rasmalai with mango yogurt twist.',
        image: 'desserts-rasmalai-mango-yoghurt.png',
      },
    ],
  },
]

const seed = async () => {
  await payload.init({ config })

  for (const category of menuData) {
    for (const item of category.items) {
      try {
        const imagePath = path.join(process.cwd(), 'public/images/menu', item.image)

        let mediaId = null

        if (fs.existsSync(imagePath)) {
          const fileBuffer = fs.readFileSync(imagePath)

          const media = await payload.create({
            collection: 'media',
            data: {
              alt: item.name,
            },
            file: {
              data: fileBuffer,
              name: item.image,
              mimetype: 'image/png',
              size: fileBuffer.length,
            },
            draft: false,
          } as any)

          mediaId = media.id
        } else {
          console.warn(`⚠️ Image not found: ${item.image}`)
        }

        await payload.create({
          collection: 'menu',
          data: {
            name: item.name,
            category: category.category,
            price: item.price,
            description: item.description,
            image: mediaId,
          },
        })

        console.log(`Created: ${item.name}`)
      } catch (err) {
        console.error(`Failed: ${item.name}`, err)
      }
    }
  }

  console.log('🎉 Seeding complete')
  process.exit(0)
}

seed()

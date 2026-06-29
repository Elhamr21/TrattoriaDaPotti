export type MenuCategory = 'Antipasti' | 'Pizza' | 'Pasta' | 'Dolci'

export interface MenuItem {
  id: string
  name: string
  description: string
  image: string
  category: MenuCategory
  tags?: string[]
  popular?: boolean
}

export const categories: MenuCategory[] = [
  'Antipasti',
  'Pizza',
  'Pasta',
  'Dolci',
]

export const menuItems: MenuItem[] = [
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    description:
      'Geröstetes Brot mit frischen Tomaten, Knoblauch, Basilikum und bestem Olivenöl — ein klassischer Einstieg in die italienische Küche.',
    image: '/menu/bread.png',
    category: 'Antipasti',
    tags: ['Vegetarisch', 'Klassiker'],
    popular: true,
  },
  {
    id: 'antipasto-misto',
    name: 'Antipasto Misto',
    description:
      'Eine Auswahl feiner Vorspeisen: Aufschnitt, gegrilltes Gemüse, Oliven und hausgemachte Dips — perfekt zum Teilen.',
    image: '/menu/burek.png',
    category: 'Antipasti',
    tags: ['Zum Teilen'],
    popular: true,
  },
  {
    id: 'insalata-caprese',
    name: 'Insalata Caprese',
    description:
      'Frischer Mozzarella mit reifen Tomaten, Basilikum und nativem Olivenöl extra — simpel, frisch und unwiderstehlich.',
    image: '/menu/a1.png',
    category: 'Antipasti',
    tags: ['Vegetarisch', 'Frisch'],
  },
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    description:
      'Klassische Pizza mit Tomatensauce, frischem Mozzarella und Basilikum auf knusprigem Teig — ein zeitloser Favorit.',
    image: '/menu/pizza.png',
    category: 'Pizza',
    tags: ['Klassiker', 'Vegetarisch'],
    popular: true,
  },
  {
    id: 'pizza-diavola',
    name: 'Pizza Diavola',
    description:
      'Pikante Pizza mit Tomatensauce, Mozzarella, scharfer Salami und Peperoni — für alle, die es feurig mögen.',
    image: '/menu/pljeskavica.png',
    category: 'Pizza',
    tags: ['Scharf', 'Bestseller'],
    popular: true,
  },
  {
    id: 'pizza-funghi',
    name: 'Pizza Funghi',
    description:
      'Herzhafte Pizza mit Tomatensauce, Mozzarella und frischen Champignons — ein aromatischer Klassiker.',
    image: '/menu/a2.png',
    category: 'Pizza',
    tags: ['Vegetarisch'],
  },
  {
    id: 'pizza-della-casa',
    name: 'Pizza della Casa',
    description:
      'Unsere Hauspizza mit Tomatensauce, Mozzarella, Salami, Schinken, Paprika und Champignons — üppig belegt.',
    image: '/menu/rita-plate.png',
    category: 'Pizza',
    tags: ['Spezialität'],
  },
  {
    id: 'tagliatelle-salmone',
    name: 'Tagliatelle al Salmone',
    description:
      'Frische Tagliatelle in cremiger Lachssauce mit Kapern und Dill — eine elegante Pastakreation.',
    image: '/menu/cevapi.png',
    category: 'Pasta',
    tags: ['Hausliebling', 'Frisch'],
    popular: true,
  },
  {
    id: 'penne-arrabiata',
    name: "Penne all'Arrabbiata",
    description:
      'Penne in feuriger Tomatensauce mit Knoblauch und Peperoncino — ein würziger Klassiker der römischen Küche.',
    image: '/menu/sausage-bread.png',
    category: 'Pasta',
    tags: ['Scharf', 'Vegan möglich'],
    popular: true,
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    description:
      'Spaghetti mit cremiger Ei-Käse-Sauce, knusprigem Guanciale und schwarzem Pfeffer — original römische Rezeptur.',
    image: '/menu/burger.png',
    category: 'Pasta',
    tags: ['Klassiker'],
  },
  {
    id: 'tiramisu',
    name: 'Tiramisù',
    description:
      'Das klassische italienische Dessert: Löffelbiskuits mit Espresso getränkt, cremige Mascarpone und Kakaopulver.',
    image: '/menu/tres-leches.png',
    category: 'Dolci',
    tags: ['Hausgemacht'],
    popular: true,
  },
  {
    id: 'panna-cotta',
    name: 'Panna Cotta',
    description:
      'Zarte, cremige Vanillepanna cotta mit frischen Beerenfrüchten — ein leichter Abschluss für jeden Gaumen.',
    image: '/menu/coconut-cake.png',
    category: 'Dolci',
    tags: ['Hausgemacht'],
  },
]

export interface MenuItem {
  id?: string
  name: string
  category: 'entrees' | 'mains' | 'sides' | 'sauces' | 'desserts'
  price: number
  description?: string
}

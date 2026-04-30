export type MenuItemType = {
  id: string,
  name: string;
  price: number;
  description: string;
  image?: string;
  tags?: string[];
};

export type CategoryType = {
  category: string;
  items: MenuItemType[];
};
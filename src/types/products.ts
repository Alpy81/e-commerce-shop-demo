export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  categoryId: string;
  subcategoryId: string;
  collectionId: string;
  shortDescription: string;
  imagePlaceholder: string;
}

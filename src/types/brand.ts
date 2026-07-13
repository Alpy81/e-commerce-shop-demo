export interface Brand {
  id: string;
  name: string;
  slug: string;
  // Kategorien, in denen diese Marke vertreten ist (für Filter-Logik)
  categoryIds: string[];
}
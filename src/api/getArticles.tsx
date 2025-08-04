import type { Article } from '../types';

export const fetchArticles = (): Promise<Article[]> => {
  return fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
    .then(res => res.json())
    .then(json => json as Article[]);
};

export const fetchArticles = () => {
  return new Promise((resolve) => {
      fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        .then(res => res.json())
        .then(json => resolve(json));
  });
};
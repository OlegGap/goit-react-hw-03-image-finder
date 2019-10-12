const filter = ({
  id,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) => {
  return {
    id,
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
  };
};

export default filter;

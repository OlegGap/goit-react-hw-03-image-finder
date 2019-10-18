import axios from 'axios';

const API_KEY = '13763847-a3cc8fed0077a45dfa7a2db6f';

export default (currentInput = '', perPageCount = 8) =>
  axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${currentInput}&page=1&per_page=${perPageCount}&key=${API_KEY}`,
    )
    .then(response => response.data);

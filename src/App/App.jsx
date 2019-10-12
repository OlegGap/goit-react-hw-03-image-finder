import React from 'react';
import styles from './styles.module.scss';
import LoaderCard from '../utils/LoaderCard';
import SearchForm from '../components/SearchForm/SearchForm.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';

const API_KEY = '13763847-a3cc8fed0077a45dfa7a2db6f';
const API_URL_DEFAULT = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=1&per_page=8&key=${API_KEY}`;
const COUNT_CARDS_ADD_TO_GALLERY = 8;
const COUNT_CARDS_GALLERY_DEFAULT = 8;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: '',
      gallery: [],
      error: '',
      isLoading: true,
      isFindGallery: false,
      perPageCount: COUNT_CARDS_GALLERY_DEFAULT,
    };
  }

  componentDidMount() {
    this.setState({ isFindGallery: true });
    fetch(API_URL_DEFAULT)
      .then(response => response.json())
      .then(response => {
        this.setState({ gallery: response.hits });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentInput, perPageCount } = this.state;
    if (
      prevState.currentInput !== currentInput ||
      prevState.perPageCount !== perPageCount
    ) {
      if (prevState.currentInput !== currentInput) {
        this.setState({ perPageCount: COUNT_CARDS_GALLERY_DEFAULT });
      }

      this.setState({ isFindGallery: false });
      const API_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${currentInput}&page=1&per_page=${perPageCount}&key=${API_KEY}`;
      fetch(API_URL)
        .then(response => response.json())
        .then(response => {
          this.setState({ gallery: response.hits });
          if (response.hits.length > 0) {
            this.setState({ isFindGallery: true });
          }
          window.scrollTo('0', document.body.scrollHeight);
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  hundleSubmitForm = event => {
    event.preventDefault();
    this.setState({ currentInput: event.target.firstChild.value });
  };

  hundleButtonLoadMoreClick = () => {
    this.setState(prevState => ({
      perPageCount: prevState.perPageCount + COUNT_CARDS_ADD_TO_GALLERY,
    }));
  };

  render() {
    const { gallery, error, isLoading, isFindGallery } = this.state;

    return (
      <section className={styles.app}>
        <SearchForm submit={this.hundleSubmitForm} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {gallery.length > 0 && <Gallery galleryAll={gallery} />}
        {!isFindGallery && <p>Nothing found on your request...</p>}
        {isLoading && <LoaderCard />}
        <button
          className={styles.ButtonLoadMore}
          type="button"
          onClick={this.hundleButtonLoadMoreClick}
        >
          Load More
        </button>
      </section>
    );
  }
}

export default App;

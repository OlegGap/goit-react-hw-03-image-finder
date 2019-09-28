import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './styles.module.scss';
import SearchForm from './components/SearchForm/SearchForm';
import Gallery from './components/Gallery/Gallery';

const API_KEY = '13763847-a3cc8fed0077a45dfa7a2db6f';
const API_URL_DEFAULT = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=1&per_page=8&key=${API_KEY}`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: '',
      gallery: [],
      error: '',
      isLoading: true,
      isFindGallery: false,
      perPageCount: 8,
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
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ perPageCount: 8 });
      }

      // eslint-disable-next-line react/no-did-update-set-state
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

  hundelChangeInput = event => {
    this.setState({ currentInput: event.target.value });
  };

  hundleSubmitForm = event => {
    event.preventDefault();
  };

  hundleButtonLoadMoreClick = () => {
    this.setState(prevState => ({
      perPageCount: prevState.perPageCount + 8,
    }));
  };

  render() {
    const {
      currentInput,
      gallery,
      error,
      isLoading,
      isFindGallery,
    } = this.state;

    return (
      <section className={styles.app}>
        <SearchForm
          submit={this.hundleSubmitForm}
          onChange={this.hundelChangeInput}
          currentValue={currentInput}
        />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {gallery.length > 0 && <Gallery galleryAll={gallery} />}
        {!isFindGallery && <p>Nothing found on your request...</p>}
        {isLoading && (
          <div>
            <ContentLoader>
              <rect x="20" y="0" rx="5" ry="5" width="80" height="80" />
              <rect x="20" y="84" rx="4" ry="4" width="50" height="7" />
              <rect x="20" y="93" rx="3" ry="3" width="60" height="7" />

              <rect x="120" y="0" rx="5" ry="5" width="80" height="80" />
              <rect x="120" y="84" rx="4" ry="4" width="50" height="7" />
              <rect x="120" y="93" rx="3" ry="3" width="60" height="7" />

              <rect x="220" y="0" rx="5" ry="5" width="80" height="80" />
              <rect x="220" y="84" rx="4" ry="4" width="50" height="7" />
              <rect x="220" y="93" rx="3" ry="3" width="60" height="7" />

              <rect x="320" y="0" rx="5" ry="5" width="80" height="80" />
              <rect x="320" y="84" rx="4" ry="4" width="50" height="7" />
              <rect x="320" y="93" rx="3" ry="3" width="60" height="7" />
            </ContentLoader>
          </div>
        )}
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

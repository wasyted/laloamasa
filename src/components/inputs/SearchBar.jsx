import styles from '../styles/SearchBar.module.scss';

export default function SearchBar({ searchCallback }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    searchCallback(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <p>Buscá</p>
      <input
        className={styles.searchBox}
        type="search"
        placeholder="..."
        name="searchProduct"
        id="searchProduct"
        onChange={handleSearch}
      />
      <button className={styles.searchButton} type="submit"></button>
    </div>
  );
}
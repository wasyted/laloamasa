import styles from './SearchBar.module.scss';

export default function SearchBar(){
  return(
    <div className={styles.searchBar}>
      <p>Buscá</p>
      <input className={styles.searchBox} type="search" placeholder='...' name="searchProduct" id="searchProduct" />
      <button className={styles.searchButton} type="submit"></button>
    </div>
  )
}
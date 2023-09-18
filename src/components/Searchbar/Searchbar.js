import React from 'react';
import styles from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [ask, setAsk] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(ask);
  };

  const handleInputChange = e => {
    setAsk(e.target.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={ask}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.button}>
          <span className={styles.button_label}>Search</span>
        </button>
      </form>
    </header>
  );
}

export default Searchbar;

import { useId } from "react";
import { MdClear } from "react-icons/md";
import css from "./SearchBox.module.css";

const SearchBox = ({ search, onChange }) => {
  const searchId = useId();

  const handleSearch = (e) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={css["search-wrapper"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <div className={css["input-wrapper"]}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter name "
          value={search}
          onChange={handleSearch}
        />
        <button className={css.button} onClick={handleClear}>
          <MdClear className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

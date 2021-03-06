import { useDispatch, useSelector } from "react-redux";
import "./search.styles.css";
import { setSearchField } from "../../redux/actions/search.action";
const Search = () => {
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Robots"
        onChange={(e) => onHandleChange(e)}
      />
    </div>
  );
};

export default Search;

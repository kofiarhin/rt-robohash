import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../components/UserList/User.component";
import { setSearchField } from "../../redux/actions/search.action";
import "./item.styles.css";
const Item = (props) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const user = userData.find((user) => user.id === parseInt(id));

  return (
    <div className="item">
      <User user={user} />
      <button
        onClick={() => {
          dispatch(setSearchField(""));
          navigate("/");
        }}
        className="link"
      >
        Go Back Home
      </button>
    </div>
  );
};
export default Item;

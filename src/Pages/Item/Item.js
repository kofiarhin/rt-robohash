import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "../../components/UserList/User.component";
import "./item.styles.css";
const Item = (props) => {
  const { id } = useParams();

  const { userData } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const user = userData.find((user) => user.id === parseInt(id));

  return (
    <div className="item">
      <User user={user} />
      <button onClick={() => navigate("/")} className="link">
        Go Back Home
      </button>
    </div>
  );
};
export default Item;

import { User } from "./User.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/user.action";
import "./user.styles.css";

const UserList = () => {
  const { userData } = useSelector((state) => state.userReducer);
  const { searchField } = useSelector((state) => state.searchReducer);

  const dispatch = useDispatch();

  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchField.toLowerCase())
  );
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="wrapper">
      {filteredData.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;

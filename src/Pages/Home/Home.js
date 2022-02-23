import UserList from "../../components/UserList/UserList.component";
import Search from "../../components/Search/Search.component";
const Home = (props) => {
  return (
    <div>
      <Search />
      <UserList />
    </div>
  );
};

export default Home;

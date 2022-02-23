import { Link } from "react-router-dom";

export const User = ({ user = {} }) => {
  const { name, email, id, phone } = user;

  return (
    <Link to={`/user/${id}`}>
      <img src={`https://robohash.org/${name}`} alt="" />
      <h1> {name} </h1>
      <p> {phone} </p>
    </Link>
  );
};

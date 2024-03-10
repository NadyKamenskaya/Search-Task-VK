import { User } from "./User";
import "./style.css";

export function UserCard(user: User) {
  const { firstName, lastName, address, image } = user;

  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}

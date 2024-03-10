import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { User } from "../UserCard/User";

export function SearchResults() {
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.map((user: User) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
}

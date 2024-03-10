import "./styles.css";
import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [users, setUsers] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <>
      <SearchContext.Provider value={{ users }}>
        <SearchForm setUsers={setUsers} setIsLoading={setIsLoading} setIsNotFound={setIsNotFound} setIsError={setIsError} />
        {users.length !== 0 && <SearchResults />}
      </SearchContext.Provider>
      {isLoading && <Loader />}
      {isNotFound && (
        <div className="notFound">По Вашему запросу ничего не найдено</div>
      )}
      {isError && (
        <div className="error">Ошибка сети</div>
      )}
    </>
  );
}

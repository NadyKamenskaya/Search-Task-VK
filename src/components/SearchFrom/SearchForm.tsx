import "./styles.css";
import fetchUsers from "../../fetchUsers";
import { DebounceInput } from 'react-debounce-input';
import { useCallback, useEffect, useState } from "react";

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchForm({ setUsers, setIsLoading, setIsNotFound, setIsError }: Props) {
  const [value, setValue] = useState<string>('');

  const fetchData = useCallback(async () => {
    setIsNotFound(false);
    setIsLoading(true);
    
    try {
      if (value.length !== 0) {
        const users = await fetchUsers(value);

        (users.length !== 0) ? setUsers(users) : setIsNotFound(true);
      } else {
        setUsers([]);
        setIsNotFound(false);
      }

      setIsError(false);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, [value]);

  useEffect(() => {
    fetchData();
  }, [value]);

  const onChange = (value: string) => {
    setValue(value);
    setUsers([]);
  };

  return (
    <div className="searchForm">
      <form>
        <DebounceInput
            placeholder="Введите поисковый запрос"
            debounceTimeout={1000}
            onChange={(event) => onChange(event.target.value)}
          />
      </form>
    </div>
  );
}

const fetchUsers = async (query: string) => {
  const url = 'https://dummyjson.com/users/search?q=';
  const response = await fetch(`${url}${query}`);
  const json = await response.json();
  const users = await json.users;

  return users;
};

export default fetchUsers;

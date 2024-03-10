export type User = {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  };
  image: string;
};
export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

type UserCompanyType = {
  bs: string;
  catchPhrase: string;
  name: string;
}
type UserAddress = {
  city: string;
  geo: {lat: string, lng: string}
  street: string;
  suite: string;
  zipcode: string;
}

export interface User {
  address: UserAddress;
  company: UserCompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
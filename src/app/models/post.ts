import Address from "./Address";


export default interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  address: Address;
}

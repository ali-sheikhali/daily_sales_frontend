import Link from "next/link";
import { getAllStores } from "../api/storesApi";
import NewStore from "./NewStore";

export default async function AllStores() {
  const stores = await getAllStores();

  return (
    <div>
      <h1>My Stores</h1>
      <div className="w-5/12 mx-auto">
        <NewStore />
      </div>
      {stores.length === 0 ? (
        <p>You do not have any stores yet.</p>
      ) : (
        <ul>
          {stores.map((store) => (
            <li key={store.id}>
              <Link href={`/stores/${store.id}`}>{store.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

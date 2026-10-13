import { getAllStores } from "../api/storesApi";

export default async function AllStores() {
  const stores = await getAllStores();

  return (
    <div>
      <h1>My Stores</h1>

      {stores.length === 0 ? (
        <p>You do not have any stores yet.</p>
      ) : (
        <ul>
          {stores.map((store) => (
            <li key={store.id}>{store.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

import Link from "next/link";
import { getAllStores } from "../api/storesApi";
import NewStore from "./NewStore";
import DeleteComponent from "@/components/shared/DeleteComponent";
import { deleteStoreAction } from "../actions";

export default async function AllStores() {
  const stores = await getAllStores();

  return (
    <div>
      <h1>My Stores</h1>
      <div className="w-5/12 mx-auto">
        <NewStore />
      </div>
      {stores.length === 0 ? (
        <p className="flex min-h-dvh items-center justify-center p-4">
          You do not have any stores yet.
        </p>
      ) : (
        <ul className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {stores.map((store) => (
            <Link
              className=" border border-gray-300 rounded-md text-center p-3"
              href={`/stores/${store.id}`}
              key={store.id}
            >
              <li className="flex justify-between items-center" key={store.id}>
                <p>{store.name}</p>
                <div className="flex justify-end ">
                  <DeleteComponent
                    onDeleteAction={deleteStoreAction.bind(null, store.id)}
                  />
                </div>
              </li>
              <div>
                <Link
                  href={`/stores/${store.id}/settings`}
                  className="flex justify-start items-center text-xs text-blue-600 mt-2"
                >
                  تنظیمات فروشگاه
                </Link>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

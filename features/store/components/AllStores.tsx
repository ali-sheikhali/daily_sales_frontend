import Link from "next/link";
import { getAllStores } from "../api/storesApi";
import NewStore from "./NewStore";
import DeleteComponent from "@/components/shared/DeleteComponent";
import { deleteStoreAction } from "../actions";
import { ApiError } from "@/lib/serverApi";
import { redirect } from "next/navigation";

export default async function AllStores() {
  let stores: Awaited<ReturnType<typeof getAllStores>>;

  try {
    stores = await getAllStores();
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 401) redirect("/login");
      if (error.status === 403) redirect("/403");
      //   if (error.status === 404) notFound();
    }
    throw error; // anything else is a real bug, so let it show
  }

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
            <li
              key={store.id}
              className="relative border border-gray-300 rounded-md text-center p-3 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                {/* Main link: its ::after covers the whole card */}
                <Link
                  href={`/stores/${store.id}`}
                  className="after:absolute after:inset-0"
                >
                  {store.name}
                </Link>

                {/* relative z-10 puts these above the stretched link */}
                <div className="relative z-10 flex justify-end">
                  <DeleteComponent
                    onDeleteAction={deleteStoreAction.bind(null, store.id)}
                  />
                </div>
              </div>

              <div>
                <Link
                  href={`/stores/${store.id}/settings`}
                  className="relative z-10 flex justify-start items-center text-xs text-blue-600 mt-2"
                >
                  تنظیمات فروشگاه
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

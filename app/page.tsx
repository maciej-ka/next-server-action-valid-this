import { createItem } from "@/lib/api";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-slate-700 p-4" onClick={createItem}>
        create item
      </button>
    </div>
  );
}

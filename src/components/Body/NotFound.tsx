import { useRouter } from "next/navigation";
export default function NotFoundTsx() {
    const router= useRouter();
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-neutral-900 text-white">
      <h1 className="text-6xl font-bold animate-pulse">404</h1>
      <p className="text-lg text-gray-400 mt-2">Page Not Found</p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition"
      >
        Back to Home
      </button>
    </div>
  );
}

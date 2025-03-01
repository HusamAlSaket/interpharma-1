// not-found Service Component
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-50 to-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Service Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the Service you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-500 font-medium"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

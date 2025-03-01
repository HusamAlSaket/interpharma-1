import Link from "next/link";

// Get All Services
async function getServices() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/services", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok: " + res.statusText);
  }

  return res.json();
}

// Fetch All Services Details
export default async function ServiceList() {
  const services = await getServices();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gradient-to-br from-orange-50 to-gray-100">
      {services.map(
        (service: { id: number; title: string; description: string }) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl border-t-4 border-orange-500 flex flex-col h-full"
          >
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Card content */}
            <div className="p-6 relative z-10 flex flex-col flex-grow">
              <div className="flex items-center mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  {service.title}
                </h2>
              </div>

              <p className="mt-3 text-gray-600 font-light leading-relaxed flex-grow">
                {service.description.slice(0, 200)}...
              </p>

              <div className="mt-6 flex justify-between items-center">
                <div className="h-1 w-16 bg-orange-200 rounded"></div>
                <Link
                  href={`/services/${service.id}`}
                  className="text-xs font-medium uppercase tracking-wider text-orange-600 flex items-center group-hover:text-orange-500 transition-colors"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )
      )}

      {services.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center p-10 bg-white rounded-xl border border-orange-200 shadow">
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
          <p className="text-center text-gray-600">
            No services found. Check back later.
          </p>
        </div>
      )}
    </div>
  );
}

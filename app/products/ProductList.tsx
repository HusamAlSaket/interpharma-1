import Link from "next/link";

// Get All Products
async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok: " + res.statusText);
  }

  return res.json();
}

// Fetch All Products Details
export default async function ProductList() {
  const products = await getProducts();

  return (
    <div id="product-details" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {products.map(
        (product: {
          name: string;
          category: string;
          brand: string;
          dosage: string;
          strength: string;
          company: string;
          image_url: string;
        }) => (
          <div
            key={product.name}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full before:absolute before:inset-0 before:z-0 before:bg-gradient-to-br before:from-orange-400/0 before:to-orange-500/0 before:transition-all before:duration-300 hover:before:opacity-100 hover:before:from-orange-400/10 hover:before:to-orange-500/5"
          >
            {/* Top border with animated expansion on hover */}
            <div className="absolute inset-x-0 top-0 h-1 bg-orange-300 rounded-b-full transition-all duration-300 group-hover:h-2 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-300"></div>
            
            {/* Animated corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-orange-300 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-orange-300 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-orange-300 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-orange-300 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>

            {/* Category pill with animated glow */}
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                {product.category}
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 pt-8 relative z-10 flex flex-col flex-grow">
              {/* Product name with hover animation */}
              <div className="h-16 mb-4 overflow-hidden">
                <h2 className="text-2xl font-bold text-orange-600 line-clamp-2 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1">
                  {product.name}
                </h2>
              </div>

              {/* Image container with scale animation */}
              <div className="h-48 mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image_url || "/about.jpg"}
                  width={220}
                  height={220}
                  alt={product.name}
                  className="max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product details with animated highlights */}
              <div className="space-y-6 mb-6">
                <div className="flex group/item">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="h-0.5 w-5 bg-orange-200 rounded-full mr-2 transition-all duration-300 group-hover/item:w-6 group-hover/item:bg-orange-400"></div>
                      <p className="text-orange-500 font-medium transition-all duration-300 group-hover:text-orange-600">Brand:</p>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-700 line-clamp-1 transition-all duration-300 group-hover:text-gray-900 group-hover:font-medium">
                      {product.brand}
                    </p>
                  </div>
                </div>

                <div className="flex group/item">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="h-0.5 w-5 bg-orange-200 rounded-full mr-2 transition-all duration-300 group-hover/item:w-6 group-hover/item:bg-orange-400"></div>
                      <p className="text-orange-500 font-medium transition-all duration-300 group-hover:text-orange-600">Dosage:</p>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-700 line-clamp-1 transition-all duration-300 group-hover:text-gray-900 group-hover:font-medium">
                      {product.dosage}
                    </p>
                  </div>
                </div>

                <div className="flex group/item">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="h-0.5 w-5 bg-orange-200 rounded-full mr-2 transition-all duration-300 group-hover/item:w-6 group-hover/item:bg-orange-400"></div>
                      <p className="text-orange-500 font-medium transition-all duration-300 group-hover:text-orange-600">Strength:</p>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-700 line-clamp-1 transition-all duration-300 group-hover:text-gray-900 group-hover:font-medium">
                      {product.strength}
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufacturer section with glow */}
              <div className="mt-auto pt-4 border-t border-gray-100 transition-all duration-300 group-hover:border-orange-100">
                <div className="flex items-center mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm transition-all duration-300 group-hover:text-gray-600">Manufactured by:</p>
                </div>
                <p className="text-orange-500 pl-6 font-medium truncate transition-all duration-300 group-hover:text-orange-600 group-hover:font-semibold">
                  {product.company}
                </p>
              </div>
            </div>

            {/* Pill icon with rotate animation */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center opacity-80 transition-all duration-300 group-hover:bg-orange-100 group-hover:left-0 group-hover:opacity-100 group-hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7.5"></path>
                <path d="M8 12h8"></path>
                <path d="M17.5 22v-8.5a1 1 0 0 1 1-1h4"></path>
                <path d="M22.5 17.5h-4"></path>
                <path d="M20.5 13.5v7"></path>
              </svg>
            </div>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>
          </div>
        )
      )}

      {products.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-orange-200 shadow-lg">
          <div className="w-20 h-20 mb-6 rounded-full bg-orange-50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 12H4M8.5 8L4 12l4.5 4M15.5 4.2L12 19.8M8.5 4.2L12 19.8"
              />
            </svg>
          </div>
          <p className="text-xl font-medium text-gray-700">No products found</p>
          <p className="text-gray-500 mt-2">
            Our catalog is being updated. Please check back later.
          </p>
          <div className="mt-6">
            <div className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg font-medium">
              Explore other sections
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
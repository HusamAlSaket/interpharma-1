import Hero from "@/app/components/Hero";
import Link from "next/link";
import { notFound } from "next/navigation";

// Allow passing down Params
export const dynamicParams = true;

// Preload the fetch of the services during build time instead of runtime
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_BASE_URL}/services/`);
  const services = await res.json();

  return services.map((service: { id: number }) => ({
    id: service.id.toString(),
  }));
}

// Get the Service id
async function getService(id: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/services/${id}`, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

// Defining the type for params
interface Params {
  id: string;
}
interface ServiceDetailsProps {
  params: any; // Keeping params as any
}

// ServiceDetails component
export default async function ServiceDetails({ params }: ServiceDetailsProps) {
  // Await params to ensure it's resolved before accessing its properties
  const { id } = await params;

  if (!id) throw new Error("Invalid Params");

  const service = await getService(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Hero />

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-80 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Top accent bar */}
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </div>

        {/* Main content card */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top decorative pattern */}
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>

          {/* Corner accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full opacity-10"></div>

          <div className="p-8 md:p-12 relative">
            {/* Service icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-xl bg-orange-100 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              {service.title}
            </h1>

            {/* Divider */}
            <div className="flex justify-center mb-8">
              <div className="h-0.5 w-16 bg-orange-200 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-center md:text-left whitespace-pre-line">
                {service.description}
              </p>
            </div>

            {/* Bottom pattern */}
            <div className="mt-12 flex justify-center space-x-2">
              <div className="h-2 w-2 bg-orange-300 rounded-full"></div>
              <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="font-medium">Back to Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

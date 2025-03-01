export default function Loading() {
    return (
        <div className="relative z-10 services-container bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
            <h1 className="text-xl font-bold">Loading...</h1>
            <p>Please wait while we fetch the latest data.</p>
            <p className="italic">“Patience is not simply the ability to wait - it's how we behave while we're waiting.”</p>
        </div>
    );
}
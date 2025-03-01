// AboutHero.jsx
export default function AboutHero() {
    return (
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 h-[400px] md:h-[500px] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-orange-300 rounded-full opacity-20"></div>
        <div className="absolute -left-20 bottom-10 w-64 h-64 bg-white rounded-full opacity-10"></div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="text-white max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="h-1 w-16 bg-white/60 rounded-full mr-4"></div>
              <span className="text-white/80 tracking-wider uppercase text-sm font-medium">Our Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-orange-100">Us</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-lg">
              Pioneering pharmaceutical research and development in the MENA region since 2017
            </p>
            
            <div className="mt-8 flex items-center">
              <div className="h-1 w-12 bg-white/40 rounded-full"></div>
              <div className="h-1 w-20 bg-white/70 rounded-full ml-2"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white w-full h-auto">
            <path fill="currentColor" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>
    );
  }
  
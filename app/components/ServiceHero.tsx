const Hero = () => {
    return (
      <section id="hero" className="relative h-screen w-full flex items-center">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center brightness-50"></div>
  
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
          Comprehensive Healthcare Services You Can Trust
          </h1>
          <p className="mt-4 text-lg text-gray-300">
          From pharmaceutical innovations to patient-centered care, our expert-driven services are designed to enhance well-being and deliver excellence in healthcare.
          </p>
          
          <div className="mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
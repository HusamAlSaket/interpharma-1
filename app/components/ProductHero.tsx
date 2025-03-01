const Hero = () => {
    return (
      <section id="hero" className="relative h-screen w-full flex items-center">
        <div className="absolute inset-0 bg-[url('/1.png')] bg-cover bg-center brightness-50"></div>
  
        <div className="relative z-10 max-w-3xl mx-auto text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
            Elevating Health, One Innovation at a Time
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Discover precision-crafted pharmaceutical solutions designed for a healthier future. Our commitment to science, quality, and care ensures the best for you and your loved ones.
          </p>
          
          <div className="mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
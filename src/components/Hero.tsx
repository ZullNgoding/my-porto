const Hero: React.FC = () => {
    return (
      <section className="mt-6 py-6 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="bg-gradient-to-b from-[#1F2026] via-[#2A2C33] to-[#1F2026] rounded-2xl shadow-xl p-10 max-w-3xl">
          <div className="h-5 flex space-x-2 mb-6">
            <span className="w-3 h-3 bg-[#FF5F57] rounded-full"></span>
            <span className="w-3 h-3 bg-[#FFBD2E] rounded-full"></span>
            <span className="w-3 h-3 bg-[#28C840] rounded-full"></span>
          </div>
  
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#EDEDED]">
            I'm FullStack {" "}
            <span className="italic text-[#AAAAAA]">Developer.</span>
          </h1>
  
          <p className="mt-4 text-lg md:text-xl text-[#888888]">
            Building Robust & Seamless Applications. <br />
            Passionate about scalable solutions and clean code.
          </p>
        </div>
  
        <div className="mt-20 animate-bounce text-[#666666] text-2xl">
          ↓
        </div>
      </section>
    );
  };
  
  export default Hero;
  
// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import CaseStudy1 from "./components/CaseStudy/CaseStudy1";
import CaseStudy2 from "./components/CaseStudy/CaseStudy2";
import CaseStudy3 from "./components/CaseStudy/CaseStudy3";
import CaseStudy4 from "./components/CaseStudy/CaseStudy4";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      {<Header />}
      <main className="flex flex-col items-center">
         <Hero /> 
         <CaseStudy1 />
         <CaseStudy2 />
         <CaseStudy3 />
         <CaseStudy4 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
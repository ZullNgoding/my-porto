import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      {<Header />}
      <main className="flex flex-col items-center">
         <Hero /> 
         <Info />
         <CaseStudy />
      </main>
      <Footer />
    </div>
  );
}

export default App;

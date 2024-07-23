import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Explore from "./components/Explore";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";
import "./styles.css";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="popular">
          <Popular />
        </section>
        <section id="explore">
          <Explore />
        </section>
        <section id="adventure">
          <Adventure />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

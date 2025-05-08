import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="">
      <Header />
      <main className=" mb-10">
        <AllRoutes />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

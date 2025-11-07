import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
import ProductList from "./Shop/ProductList";

function App() {
  return (
    <div className="bg-white font-satoshi">
      <Announcement />
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductList />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

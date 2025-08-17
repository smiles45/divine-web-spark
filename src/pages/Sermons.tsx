import Header from "@/components/Header";
import Sermons from "@/components/Sermons";
import Footer from "@/components/Footer";

const SermonsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Sermons />
      </main>
      <Footer />
    </div>
  );
};

export default SermonsPage;

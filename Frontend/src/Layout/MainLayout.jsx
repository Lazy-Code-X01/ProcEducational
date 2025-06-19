import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  mt-18">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

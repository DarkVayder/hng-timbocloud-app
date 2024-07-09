`use client`
import Navbar from "@/Components/navbar";
import Header from "@/Components/Header";
import ItemList from "@/Components/ItemList";
import Footer from '@/Components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ItemList />
      <Footer />
    </>
  );
}

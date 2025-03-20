// import ProductCard from "@/components/Card";
import Card from "@/components/Card";
import Footer from "@/pages/footer/page";
import Navbar from "@/pages/header/page";
import GreenShopBanner from "@/pages/swiper/page";
import TopFooter from "@/pages/topFooter/page";
// import ProductCard from "../components/ProductCard";

export default function Home({ posts }) {
  return (
    <div className="w-[1165px] h-[80px] m-auto font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <Navbar />

      <GreenShopBanner />
      <Card />
      <TopFooter />
      <Footer />
      {/* <ProductCard /> */}
      {/* <div>
        {posts.map((post) => (
          <ProductCard key={post.id} product={post} />
        ))}
      </div> */}
  
    </div>
  );
}


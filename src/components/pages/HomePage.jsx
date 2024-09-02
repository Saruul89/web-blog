import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Trending } from "@/components/Trending/Trending";
import { AllBlogPost } from "../Allblog/HomePageAllBlogPost";
import { About } from "../About/About";
import { Footer } from "../footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Trending />
      <AllBlogPost />
      <About />
      <Footer />
    </div>
  );
}

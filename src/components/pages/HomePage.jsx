import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Trending } from "@/components/Trending/Trending";
import { AllBlogPost } from "../AllblogPost/AllBlogPost";
import { About } from "../About/About";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Trending />
      <AllBlogPost />
      <About />
    </div>
  );
}

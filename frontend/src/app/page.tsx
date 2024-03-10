import Footer from "@/shared/ui/components/molecules/Footer";
import Header from "@/shared/ui/components/molecules/Header";
import HeadSection from "@/shared/ui/components/organisms/HeadSection";
import PostsSection from "@/shared/ui/components/organisms/PostsSection";
import WorksSection from "@/shared/ui/components/organisms/WorksSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeadSection />
        <PostsSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}

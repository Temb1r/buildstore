import Header from "@/shared/ui/components/molecules/header";
import HeadSection from "@/shared/ui/components/organisms/HeadSection";
import PostsSection from "@/shared/ui/components/organisms/PostsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeadSection />
        <PostsSection />
      </main>
    </>
  );
}

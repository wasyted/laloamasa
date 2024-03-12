import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import ProfileView from "@/components/profile/ProfileView";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="p-4 mt-4">
        <ProfileView />
      </div>
      <div className="mt-16 sm:mt-0 sm:fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </main>
  );
}

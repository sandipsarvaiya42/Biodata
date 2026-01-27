import HeroSection from "@/components/HeroSection";
import PersonalDetails from "@/components/PersonalDetails";
import FamilyDetails from "@/components/FamilyDetails";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PersonalDetails />
      <FamilyDetails />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

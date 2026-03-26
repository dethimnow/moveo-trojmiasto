import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { InstagramSection } from "@/components/instagram-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyMoveoSection } from "@/components/why-moveo-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <WhyMoveoSection />
        <ServicesSection />
        <AboutSection />
        <FaqSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

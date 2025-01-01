import Header from '@/components/layout/Header';
import HeroSlider from '@/components/home/HeroSlider';
import ProductShowcase from '@/components/home/ProductShowcase';
import DualFeature from '@/components/home/DualFeature';
import ProductSlider from '@/components/home/ProductSlider';
import TravelSection from '@/components/home/TravelSection';
import GiftKitsSection from '@/components/home/GiftKitsSection';
import CorporateGifts from '@/components/home/CorporateGifts';
import StoreLocator from '@/components/home/StoreLocator';
import VirtualConsultation from '@/components/home/VirtualConsultation';
import Quote from '@/components/home/Quote';
import Certifications from '@/components/home/Certifications';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <ProductShowcase />
      <DualFeature />
      <ProductSlider />
      <TravelSection />
      <GiftKitsSection />
      <CorporateGifts />
      <StoreLocator />
      <VirtualConsultation />
      <Quote />
      <Certifications />
      <Footer />
    </>
  );
}
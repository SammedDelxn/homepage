import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import ContactForm from '../components/home/ContactForm';

export const metadata = {
  title: 'GreenScapes - Professional Landscaping Services',
  description: 'Transform your outdoor space with our professional landscaping services. From palm trimming to landscape design, we provide comprehensive solutions.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </>
  );
}

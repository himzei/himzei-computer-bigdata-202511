import Courses from './_components/Courses';
import Hero from './_components/Hero';
import Benefits from './_components/Benefits';
import Testimonials from './_components/Testimonials';
import CourseInfo from './_components/CourseInfo';
import Location from './_components/Location';
import ContactForm from './_components/ContactForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Benefits />
      <Testimonials />
      <CourseInfo />
      <Location />
      <ContactForm />
    </div>
  );
}

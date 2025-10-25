import Courses from './_components/Courses';
import Hero from './_components/Hero';
import Benefits from './_components/Benefits';
import Testimonials from './_components/Testimonials';
import CourseInfo from './_components/CourseInfo';
import Location from './_components/Location';
import ContactForm from './_components/ContactForm';
import Curriculumn from './_components/Curriculumn';
import StructuredData from './_components/StructuredData';

export default function Home() {
  return (
    <div>
      {/* 구조화된 데이터 추가 */}
      <StructuredData type='organization' />
      <StructuredData type='course' />

      <Hero />
      <Courses />
      <Curriculumn />
      <Benefits />
      <Testimonials />
      <CourseInfo />
      <Location />
      <ContactForm />
    </div>
  );
}

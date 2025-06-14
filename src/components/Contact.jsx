import ContactForm from "./ContactComponents/ContactForm";
import SectionHeading from "./SharedComponents/SectionHeading";

function Contact() {
  return (
    <section className="flex flex-col items-center lg:items-start gap-4">
      <SectionHeading mainText="let's work" highlightText="together" />

      <ContactForm />
    </section>
  );
}

export default Contact;

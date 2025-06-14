import ContactForm from "./ContactComponents/ContactForm";
import SectionHeading from "./SharedComponents/SectionHeading";

function Contact() {
  return (
    <section className="">
      <SectionHeading mainText="let's work" highlightText="together" />

      <ContactForm />
    </section>
  );
}

export default Contact;

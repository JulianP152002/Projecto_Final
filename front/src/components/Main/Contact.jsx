function Contact() {
  return (
    <section className="container_contact pb-0 lg:pb-32">
      <h1 className="contact_title">Contactanos</h1>
      <div className="">
        <h3 className="contact_map-title">
          Ubica<span>cion</span>
        </h3>
        <iframe
          className="pt-[5rem] m-auto w-[90%] h-[40rem] lg:h-[60rem] "
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31769.605633269326!2d-73.36533823082112!3d5.537224471330599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1705882468792!5m2!1ses-419!2sco"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Contact;

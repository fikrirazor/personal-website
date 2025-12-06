// src/components/contact/ContactForm.tsx


function ContactForm() {
  return (
    <>
      <div className="mt-12 max-w-4xl mx-auto px-4">
        <div className="max-w-2xs mx-auto px-4 py-2 rounded-tl-lg rounded-br-lg border-1 border border-cream-light">
          <h3 className="text-center text-xl">Send Me A Message</h3>
        </div>
        <form
          
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {/* Name */}
          <div className="relative md:col-span-1">
            <input
              type="text"
              id="name"
              name="name"
              className="
                peer w-full rounded 
                border border-ink 
                bg-cream-light 
                py-2 px-3 text-base text-ink 
                placeholder-transparent outline-none 
                transition-all
                focus:border-clay-rose 
                focus:bg-peach-milk 
                focus:ring-2 focus:ring-clay-rose
              "
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="
                absolute left-3 -top-5 
                text-sm text-ink
                transition-all
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-gray-600
                peer-placeholder-shown:text-base
                peer-focus:-top-5 
                peer-focus:text-sm 
                peer-focus:text-clay-rose
              "
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative md:col-span-2 col-span-1">
            <input
              type="email"
              id="email"
              name="email"
              className="
                peer w-full rounded 
                border border-ink 
                bg-cream-light 
                py-2 px-3 text-base text-ink 
                placeholder-transparent 
                outline-none transition-all
                focus:border-clay-rose 
                focus:bg-peach-milk 
                focus:ring-2 focus:ring-clay-rose
              "
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="
                absolute left-3 -top-5 
                text-sm text-ink 
                transition-all
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-gray-600
                peer-placeholder-shown:text-base
                peer-focus:-top-5 
                peer-focus:text-sm 
                peer-focus:text-clay-rose
              "
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative md:col-span-3 col-span-1">
            <textarea
              id="message"
              name="message"
              className="
                peer h-32 w-full resize-none rounded 
                border border-ink 
                bg-cream-light 
                py-2 px-3 text-base text-ink 
                placeholder-transparent 
                outline-none transition-all
                focus:border-clay-rose 
                focus:bg-peach-milk 
                focus:ring-2 focus:ring-clay-rose
              "
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="message"
              className="
                absolute left-3 -top-5 
                text-sm text-ink 
                transition-all
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-gray-600
                peer-placeholder-shown:text-base
                peer-focus:-top-5 
                peer-focus:text-sm 
                peer-focus:text-clay-rose
              "
            >
              Message
            </label>
          </div>
        </form>

        <button className="mt-10 mx-auto flex rounded bg-cream-light py-2 px-8 text-lg text-ink hover:bg-clay-rose transition">
          Send Message
        </button>
      </div>
    </>
  );
}

export default ContactForm;
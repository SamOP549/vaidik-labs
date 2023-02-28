import Hero from '../../components/Hero';

export default function ContactUs() {

  return (
    <>
      <Hero screen={2} title="Contact Us" bg="/Covers/contact.jpg" />
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
            <div className="text-gray-600">Leave a message and we&apos;ll get back to you.</div>
          </div>
          <img src="/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-100 border border-black" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" placeholder='E-mail' className="w-full p-3 rounded bg-gray-100 border border-black" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" placeholder='Message' rows={3} className="w-full p-3 rounded bg-gray-100 border border-black"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#FF7000] text-gray-50">Send Message</button>
        </form>
      </div>
    </>
  );
}
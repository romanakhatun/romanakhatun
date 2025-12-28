import SectionTitle from "../components/SectionTitle";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  // const contactData = [
  //   {
  //     href: "mailto:romanakhatun2004@gmail.com",
  //     icon: FiMail,
  //     label: "Email Me",
  //     value: "romanakhatun2004@gmail.com",
  //     color: "primary",
  //   },
  //   {
  //     href: "https://linkedin.com/in/romanakhatun",
  //     icon: FiLinkedin,
  //     label: "LinkedIn",
  //     value: "In/Romana-Khatun",
  //     color: "#0077b5",
  //   },
  //   {
  //     href: null,
  //     icon: FiMapPin,
  //     label: "Location",
  //     value: "Dhaka, Bangladesh",
  //     subtitle: "Available for Remote",
  //     color: "primary",
  //   },
  // ];

  return (
    <section id="contact" className="py-24">
      <SectionTitle title1="Get In " title2="Touch" sectionNumber="4" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <a
          href="mailto:romanakhatun2004@gmail.com"
          className="group relative p-8 rounded-3xl border border-base-300 bg-base-100/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
            <FiMail size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <FiMail size={24} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-base-content/50 font-bold mb-1">
              Email Me
            </p>
            <h3 className="truncate text-neutral text-lg">
              romanakhatun2004@gmail.com
            </h3>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/romanakhatun"
          target="_blank"
          rel="noreferrer"
          className="group relative p-8 rounded-3xl border border-base-300 bg-base-100/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 text-[#0077b5]/5 group-hover:text-[#0077b5]/10 transition-colors">
            <FiLinkedin size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] mb-6 group-hover:scale-110 transition-transform">
              <FiLinkedin size={24} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-base-content/50 font-bold mb-1">
              LinkedIn
            </p>
            <h3 className="text-neutral text-lg">In/romana-khatun</h3>
          </div>
        </a>

        {/* Location/WhatsApp Card */}
        <div className="group relative p-8 rounded-3xl border border-base-300 bg-base-100/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 overflow-hidden">
          <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/10 transition-colors">
            <FiMapPin size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <FiMapPin size={24} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-base-content/50 font-bold mb-1">
              Location
            </p>
            <h3 className="text-neutral text-lg italic">Dhaka, Bangladesh</h3>
            <p className="text-base-content/40 text-xs mt-2 uppercase tracking-widest font-bold">
              Available for Remote
            </p>
          </div>
        </div>
      </div>

      {/* "Open to Work" status banner */}
      <div className="mt-12 p-10 rounded-3xl border border-base-300 bg-linear-to-r from-primary/10 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-neutral text-2xl uppercase font-black tracking-tighter italic">
            Currently Open to New Opportunities
          </h4>
          <p className="text-base-content/60 mt-1">
            Full-time Roles • Freelance Projects • Collaborations
          </p>
        </div>
        <a
          href="tel:+8801796953902"
          className="px-8 py-4 rounded-full bg-primary text-neutral font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-primary/20 transition-all active:scale-95"
        >
          Call Me Now
        </a>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from "@/components/Navbar";

export default function IndianBankCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white bg-barca-navy text-foreground">
      <div className="relative z-10">
        <Navbar />
      </div>
      <HeroSection />
      <BriefStrip />
      <ProblemSection />
      <ProjectShowcaseSection />
      <SystemSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-barca-navy px-6 md:px-12 pt-20">
      <div className="absolute inset-0 bg-barca-navy bg-opacity-90 pointer-events-none" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="md:col-span-7 flex flex-col items-start pr-0 md:pr-12"
        >
          <div className="flex flex-col mb-12">
            <h1 className="font-heading text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.85] font-light text-foreground -ml-1 tracking-tight">
              Indian Bank<br />
              App Revamp
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <p className="font-body text-xl font-light text-white/50 max-w-md leading-relaxed">
              Redesigning trust for 130 million customers. A unified digital banking experience for a new India.
            </p>
            <div className="flex gap-3">
              <Pill label="7 Screens" />
              <Pill label="Figma · Protopie" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 8, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="md:col-span-5 relative hidden md:flex items-center justify-center p-12"
        >
          <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-10 -left-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">00 // Indian Bank App</div>
          <div className="relative z-10 w-full max-w-[320px] animate-float">
            <PhoneFrame image="/indianbanklanding.png" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="font-mono text-[0.65rem] text-muted-foreground border border-white/5 bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider">
      {label}
    </div>
  );
}

function PhoneFrame({ image }: { image: string }) {
  return (
    <div className="w-full aspect-[9/19.5] bg-[#15171F] border-[10px] border-[#15171F] rounded-[3.5rem] p-2.5 overflow-hidden relative shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#15171F] rounded-b-3xl z-20" />
      <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-background relative flex items-center justify-center">
        {image ? (
          <img src={image} className="w-full h-full object-cover" alt="Phone screen" referrerPolicy="no-referrer" />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center border border-white/10 rounded-[2.8rem]">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Image Upload</span>
          </div>
        )}
      </div>
    </div>
  );
}

function BriefStrip() {
  const items = [
    { label: 'Role', values: ['Lead UI/UX', 'Designer'] },
    { label: 'Timeline', values: ['6 Weeks', '2024'] },
    { label: 'Tools', values: ['Figma', 'ProtoPie', 'FigJam'] },
    { label: 'Type', values: ['App Revamp', 'Case Study'] },
  ];

  return (
    <section className="border-y border-white/[0.07] py-16 md:py-24 px-6 md:px-12 bg-barca-navy">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {item.label}
            </span>
            {item.values.map(val => (
              <span key={val} className="font-heading text-2xl font-normal leading-tight text-foreground">
                {val}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-24 items-start">
        <h2 className="font-heading text-7xl md:text-8xl leading-none text-white/10 sticky top-32">
          The<br />Problem
          <div className="w-32 h-[1px] bg-white/10 mt-6" />
        </h2>

        <div className="flex flex-col gap-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-body text-2xl md:text-3xl font-extralight leading-[1.6] text-white/70 max-w-3xl"
          >
            Indian Bank completed its merger with Allahabad Bank in 2020 — but the mobile app still felt like two separate products forced together.
            <strong className="text-foreground font-normal"> 130 million customers </strong> faced inconsistent UI patterns, no dark mode, a confusing payment flow, and an onboarding screen that hadn't been touched since 2018.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl font-light leading-[1.8] text-white/40 max-w-2xl"
          >
            The brief was clear: rebuild the experience from scratch. Keep the heritage of a legacy institution, but earn the trust of a digital-first generation.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ProjectShowcaseSection() {
  const screens = [
    {
      tag: "Screen 01",
      title: "Seamless Onboarding",
      body: "Unifying the merger's visual identity from the first touch. We replaced the dated announcement banner with a clean, statistically-driven onboarding flow that builds customer confidence through transparency.",
      img: "/onboarding.png",
      align: "left"
    },
    {
      tag: "Screen 02",
      title: "Biometric Authentication",
      body: "Eliminating entry friction by prioritizing Face ID and Fingerprint access. The login screen serves as the gateway to the personalized 'Vibe Mode' entry, making security feel inviting rather than restrictive.",
      img: "/biometric.png",
      align: "right"
    },
    {
      tag: "Screen 03",
      title: "Unified Home Dashboard",
      body: "A clean, high-density layout that organizes banking services into logical clusters. The new system prioritizes one-tap access to frequent actions like transfers and bill payments.",
      img: "/homedashboard.png",
      align: "left"
    },
    {
      tag: "Screen 04",
      title: "Transaction Intelligence",
      body: "A complete overhaul of the ledger experience. We introduced semantic status indicators and category icons to provide instant visual feedback on spending patterns without visual clutter.",
      img: "/transactionintelligence.png",
      align: "right"
    },
    {
      tag: "Screen 05",
      title: "Vibe Mode (Dark Theme)",
      body: "An editorial-grade dark mode experience that elevates the banking interface. Designed primarily for low-light environments, this theme maintains perfect accessibility while offering a premium aesthetic.",
      img: "/vibemode.png",
      align: "left"
    },
    {
      tag: "Screen 06",
      title: "Contextual Notifications",
      body: "Smart notifications that organize alerts by relevance. We integrated an interactive FAQ layer directly into the panel to resolve customer queries before they result in a support ticket.",
      img: "/notification.png",
      align: "right"
    },
    {
      tag: "Screen 07",
      title: "Optimized Payment Flow",
      body: "Reducing payment steps by 40% through a streamlined bill selection and history mechanism. The final flow prioritizes speed and confirmation, ensuring peace of mind during transactions.",
      img: "/paymentflow.png",
      align: "left"
    }
  ];

  return (
    <section className="py-48 px-6 md:px-12 container mx-auto flex flex-col gap-48 max-w-7xl">
      {screens.map((s, i) => (
        <div key={i} className={`flex flex-col md:flex-row gap-24 items-center ${s.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex-1 flex flex-col gap-6 ${s.align === 'right' ? 'md:pl-12' : 'md:pr-12'}`}
          >
            <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-[0.2em]">{s.tag}</span>
            <h3 className="font-heading text-5xl md:text-6xl font-medium leading-[1.1]">{s.title}</h3>
            <p className="font-body text-lg font-light text-white/50 leading-[1.8] max-w-md">{s.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 relative flex justify-center"
          >
            <div className="w-full max-w-[340px]">
              <PhoneFrame image={s.img} />
            </div>
            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] opacity-20 ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-accent' : 'bg-secondary'}`} />
          </motion.div>
        </div>
      ))}
    </section>
  );
}

function SystemSection() {
  const colors = [
    { name: 'Trust Navy', hex: '#1A3A8F', bg: '#1A3A8F' },
    { name: 'Energy Gold', hex: '#FFB300', bg: '#FFB300' },
    { name: 'Success Green', hex: '#2ECC71', bg: '#2ECC71' },
    { name: 'Error Red', hex: '#E74C3C', bg: '#E74C3C' },
    { name: 'Canvas Light', hex: '#F8F9FA', bg: '#F8F9FA' },
  ];

  return (
    <section className="py-48 px-6 md:px-12 bg-black/20 border-t border-white/[0.03]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl">
        <div>
          <span className="font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest mb-4 inline-block">color architecture</span>
          <h3 className="font-heading text-5xl font-light mb-16 italic">Visual Semantics</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {colors.map(c => (
              <div key={c.hex} className="group flex flex-col gap-3">
                <div
                  className="aspect-square rounded-xl shadow-xl transition-all duration-700 group-hover:scale-95 group-hover:rounded-3xl"
                  style={{ backgroundColor: c.bg }}
                />
                <div className="flex flex-col">
                  <span className="font-mono text-[0.55rem] text-white/30 uppercase tracking-tighter">{c.name}</span>
                  <span className="font-mono text-[0.65rem] text-white/60">{c.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest mb-4 inline-block">typography system</span>
          <h3 className="font-heading text-5xl font-light mb-16 italic">Clinical Precision</h3>

          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-[120px_1fr] items-center border-b border-white/5 pb-8">
              <span className="font-mono text-[0.6rem] text-white/30 uppercase">Primary Display</span>
              <div className="flex flex-col">
                <span className="font-heading text-5xl md:text-6xl text-foreground mb-2">Aa</span>
                <span className="font-body text-xs tracking-widest text-[#8A8FA8] uppercase">Cormorant Garamond</span>
              </div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center border-b border-white/5 pb-8">
              <span className="font-mono text-[0.6rem] text-white/30 uppercase">System Body</span>
              <div className="flex flex-col">
                <span className="font-body text-4xl md:text-5xl text-foreground mb-2 font-light tracking-tight">Aa</span>
                <span className="font-body text-xs tracking-widest text-[#8A8FA8] uppercase">DM Sans Serif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


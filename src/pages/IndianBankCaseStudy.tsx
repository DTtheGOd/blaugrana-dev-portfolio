import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Navbar from "@/components/Navbar";

export default function IndianBankCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white bg-barca-navy text-foreground pb-32">
      <div className="relative z-50">
        <Navbar />
      </div>

      <HeroSection />

      <PreOverviewShowcase />
      
      <div className="container mx-auto max-w-5xl px-6 md:px-12 flex flex-col gap-24 mt-24">
        <Section 
          number="01" 
          title="Overview" 
          content="Indian Bank completed its merger with Allahabad Bank in 2020 — but the mobile app still felt like two separate products forced together. 130 million customers faced inconsistent UI patterns, no dark mode, a confusing payment flow, and an onboarding screen that hadn't been touched since 2018. The bank came to us seeking a responsive app redesign that would help them better serve their diverse customer base, promote trust through transparency, and ultimately increase digital adoption."
        />
        
        <Section 
          number="02" 
          title="Problem" 
          content="Prior to their redesign, Indian Bank faced a number of challenges with their application that were hindering their ability to effectively compete with new-age fintechs. Their previous app was outdated, generic, difficult to navigate, and lacked the modern banking features necessary to drive engagement. In addition, there was a lack of unified branding, which made it difficult for legacy Allahabad Bank customers to feel at home in the new ecosystem."
        />

        <Section 
          number="03" 
          title="Design Process" 
          content="The project began with a comprehensive audit of the existing user journeys to understand the drop-off points. This was followed by extensive competitor research to identify modern banking standards. Working within a team of 6, I helped conduct surveys and research to gather feedback on the new information architecture.\n\nAfter refining the wireframes with the bank's stakeholders, I contributed to developing the high-fidelity screens, incorporating a new unified design system. As mobile banking was crucial for their users, we meticulously crafted the experience for one-handed use, considering best practices for seamless navigation."
        />
      </div>

      <ImageShowcase />

      <div className="container mx-auto max-w-5xl px-6 md:px-12 flex flex-col gap-24 mt-24 mb-32">
        <Section 
          number="04" 
          title="Solution & Results" 
          content="Through careful research, planning, and design iteration, I was able to deliver an application interface that addressed these issues head-on, delivering a seamless banking experience that aligned with Indian Bank's mission to serve a new digital India. I streamlined the payment flow to reduce steps by 40%, and introduced a 'Vibe Mode' (Dark Theme) to elevate the premium feel.\n\nSince launching the new interface, the feedback has been overwhelmingly positive. The intuitive design has significantly reduced support queries and increased feature adoption across all demographics."
        />
      </div>

      <MetricsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 md:px-12 pt-32 pb-12 max-w-7xl mx-auto border-b border-white/[0.07]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-[clamp(3.5rem,6vw,6.5rem)] font-heading font-light tracking-tight text-foreground mb-6 leading-[0.85] -ml-1"
          >
            Indian<br/>Bank
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col gap-1 text-xl font-light text-white/50 mb-12"
          >
            <p>Survey, Research & UI/UX</p>
            <p className="text-sm uppercase tracking-widest text-accent mt-2">Team of 6 • App Revamp</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-x-12 gap-y-8 w-full border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">Timeline</span>
              <span className="font-heading text-xl font-normal leading-tight text-foreground">6 Weeks, 2024</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">Tools</span>
              <span className="font-heading text-xl font-normal leading-tight text-foreground">Figma, ProtoPie</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-6 relative aspect-[4/3] flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <PhoneFrame image="/indianbanklanding.png" />
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-xs italic text-white/30 font-light"
      >
        Pictured above: a quick glance of the home dashboard and transaction flows for the new Indian Bank app.
      </motion.div>
    </section>
  );
}

function PhoneFrame({ image }: { image: string }) {
  return (
    <div className="w-full max-w-[320px] aspect-[9/19.5] bg-[#15171F] border-[10px] border-[#15171F] rounded-[3.5rem] p-2.5 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
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

function Section({ number, title, content }: { number: string, title: string, content: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-baseline gap-4 mb-2">
        <span className="font-mono text-sm text-accent tracking-widest">{number}.</span>
        <h2 className="text-4xl md:text-5xl font-heading text-foreground font-medium tracking-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6 text-lg md:text-xl font-body font-light text-white/60 leading-relaxed max-w-4xl">
        {content.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
}

function ImageShowcase() {
  const images = [
    { src: "/onboarding.png", alt: "Onboarding Flow" },
    { src: "/homedashboard.png", alt: "Home Dashboard" },
    { src: "/transactionintelligence.png", alt: "Transactions" },
    { src: "/vibemode.png", alt: "Dark Theme" },
  ];

  return (
    <section className="mt-24 w-full bg-black/20 border-y border-white/[0.03] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <PhoneFrame image={img.src} />
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center text-sm italic text-white/40 font-light max-w-xl mx-auto">
          Pictured above: views of some of the final approved designs created for the new application.
          <br /><br />
          <span className="text-white/20">(Left to Right: Onboarding, Home Dashboard, Transaction History, Vibe Mode)</span>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="flex items-center justify-center border-t border-white/[0.07] py-32 md:py-48 relative overflow-hidden bg-black/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-accent/5 blur-[150px] rounded-[100%] pointer-events-none opacity-40" />
      
      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 items-center justify-items-center max-w-[1600px] mx-auto">
          <MetricCard value={40} suffix="%" label={<>Decrease In<br/>Payment Steps</>} />
          <MetricCard value={130} suffix="M" label={<>Customer Base<br/>Supported</>} />
          <MetricCard value={2} suffix="x" label={<>Increase In<br/>Biometric Logins</>} />
          <MetricCard value={100} suffix="%" label={<>Brand Elements<br/>Unified</>} />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ value, suffix, label }: { value: number, suffix: string, label: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-center w-full"
    >
      <span className="text-[clamp(4rem,7vw,8rem)] leading-none font-heading text-accent tracking-tighter mb-8 drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]">
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span className="text-xs md:text-sm lg:text-base font-mono tracking-[0.2em] md:tracking-[0.3em] text-white/50 uppercase leading-relaxed">
        {label}
      </span>
    </motion.div>
  );
}

function PreOverviewShowcase() {
  const images = [
    { src: "/biometric.png", alt: "Biometric Authentication" },
    { src: "/notification.png", alt: "Contextual Notifications" },
    { src: "/paymentflow.png", alt: "Optimized Payment Flow" },
  ];

  return (
    <section className="w-full bg-black/10 border-b border-white/[0.03] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <PhoneFrame image={img.src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: [0.19, 1, 0.22, 1] });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


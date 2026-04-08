import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import AiDemoSimulator from "@/components/AiDemoSimulator";

export const metadata: Metadata = {
  title: "AI Digital Human | Virtual Employee for Your Business | Reverb",
  description: "AI Avatar that talks to your clients 24/7. Setup in 5 business days. Integration on any site.",
};

const useCases = [
  {
    icon: "💼",
    title: "Sales Agent",
    desc: "Presents products, answers objections, and guides the client towards completing the order."
  },
  {
    icon: "🛎️",
    title: "Virtual Receptionist",
    desc: "Handles appointments, provides information about services, and frees up your team's time."
  },
  {
    icon: "👨‍💻",
    title: "Support Assistant",
    desc: "Resolves FAQs, clarifies returns or order status, at any time of day or night."
  }
];

const packages = [
  {
    name: "Starter",
    price: "€290",
    period: "/ month",
    features: [
      "1 integrated AI Avatar",
      "Basic knowledge modeling",
      "Up to 1000 conversations / month",
      "Email support"
    ],
    cta: "Request a demo",
  },
  {
    name: "Growth",
    price: "€590",
    period: "/ month",
    features: [
      "Visually personalized AI Avatar",
      "Advanced knowledge base (URL/PDF)",
      "Connection to third-party platforms (CRM)",
      "Up to 5000 conversations / month"
    ],
    cta: "Request a demo",
    recommended: true
  },
  {
    name: "Enterprise",
    price: "On Request",
    period: "",
    features: [
      "Full backend integration",
      "Multiple avatars for different roles",
      "Unlimited conversations",
      "Dedicated Project Manager"
    ],
    cta: "Request a demo",
  }
];

const faqs = [
  {
    q: "How long does the implementation take?",
    a: "On average, a complete setup takes 5 business days, including training the AI on your business data."
  },
  {
    q: "Does it speak English?",
    a: "Yes, our avatars process multiple languages natively (both text and voice/synthesis where applicable), respecting local language nuances."
  },
  {
    q: "Can I customize the appearance?",
    a: "Absolutely. From a more corporate style to a casual one, we find an avatar that visually matches your brand and company values."
  },
  {
    q: "What happens if the client asks questions it doesn't know the answer to?",
    a: "The AI is trained to recognize the limit of its knowledge base. It will politely take the client's details and escalate the conversation to a human operator."
  }
];

export default function AIHumansPageEN() {
  return (
    <div className="bg-[#1a0533] text-white font-sans selection:bg-[#ec4899] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#8b5cf6]/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ec4899]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-1.5 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6] animate-pulse"></span>
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-white/80">
              Powered by Nevronix AI
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-tight mb-8">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] font-medium">your first AI employee</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light tracking-wide leading-relaxed">
            Intelligent avatars that talk, sell, and respond non-stop to your customers.<br className="hidden md:block"/> 
            Set it once. Functional 24/7.
          </p>
        </Reveal>

        <Reveal delay={240}>
           <div className="mt-12">
             <Link
               href="/en/contact?service=ai-digital-human"
               className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-10 py-5 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
             >
               Request a demonstration
             </Link>
           </div>
        </Reveal>
      </section>

      {/* Video Demo Section */}
      <section className="relative px-6 lg:px-10 max-w-6xl mx-auto mb-32 z-10 w-full">
        <Reveal>
           <AiDemoSimulator />
        </Reveal>
      </section>

      {/* Ce poate face - Use Cases */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto py-24 border-t border-white/10 relative">
        <Reveal>
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">What can it do for you?</h2>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
             <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:-translate-y-2">
                   <div className="text-4xl mb-6">{useCase.icon}</div>
                   <h3 className="text-2xl font-medium tracking-wide text-white mb-4">{useCase.title}</h3>
                   <p className="text-white/60 font-light leading-relaxed">{useCase.desc}</p>
                </div>
             </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="px-6 lg:px-10 max-w-5xl mx-auto py-24 text-center">
         <Reveal>
            <div className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-12 lg:p-24 backdrop-blur-sm">
               <div className="text-[#ec4899] text-6xl opacity-50 absolute top-8 left-12">"</div>
               <p className="text-2xl md:text-4xl font-light text-white leading-snug relative z-10 italic">
                  In the first week, I saved 12 hours of customer support. It is simply relentless.
               </p>
               <div className="mt-10 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20"></div>
                  <div className="text-left">
                     <div className="text-sm font-medium text-white">E-commerce Entrepreneur</div>
                     <div className="text-xs text-white/50">Reverb Partner</div>
                  </div>
               </div>
            </div>
         </Reveal>
      </section>

      {/* Pachete si Pricing */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto py-24">
        <Reveal>
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">Investment for the Future</h2>
              <p className="text-white/50 font-light max-w-lg mx-auto">Predictable cost structures for your digital workforce.</p>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
           {packages.map((pkg, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                 <div className={`relative flex flex-col h-full bg-white/5 rounded-3xl backdrop-blur-md p-10 transition-all ${pkg.recommended ? 'border-2 border-[#8b5cf6] shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'border border-white/10 hover:border-white/20'}`}>
                    {pkg.recommended && (
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-white">
                          Most popular
                       </div>
                    )}
                    <h3 className="text-xl font-light tracking-wide text-white mb-2">{pkg.name}</h3>
                    <div className="mb-8 flex items-baseline gap-2">
                       <span className="text-4xl font-medium text-white">{pkg.price}</span>
                       <span className="text-white/40 text-sm">{pkg.period}</span>
                    </div>

                    <ul className="space-y-4 mb-12 flex-1">
                       {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-[15px] font-light text-white/70">
                             <span className="text-[#8b5cf6] mt-0.5">✦</span>
                             {feature}
                          </li>
                       ))}
                    </ul>

                    <Link
                       href="/en/contact?service=ai-digital-human"
                       className={`w-full block text-center py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${pkg.recommended ? 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed]' : 'bg-transparent border border-white/20 text-white hover:bg-white/10'}`}
                    >
                       {pkg.cta}
                    </Link>
                 </div>
              </Reveal>
           ))}
        </div>
      </section>

      {/* FAQ Secțiune */}
      <section className="px-6 lg:px-10 max-w-4xl mx-auto py-24 mb-20 border-t border-white/10">
         <Reveal>
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Frequently asked questions</h2>
            </div>
         </Reveal>

         <div className="space-y-6">
            {faqs.map((faq, idx) => (
               <Reveal key={idx} delay={idx * 50}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                     <h4 className="text-lg font-medium text-white mb-3">{faq.q}</h4>
                     <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
                  </div>
               </Reveal>
            ))}
         </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import "../globals.css";
import PricingCard from "@/components/PricingCard";
import Navbar from "../../components/navbar";
import FeatureCard from "@/components/FeatureCard";
import VisitButton from "@/components/VisitButton";
import SolutionCard from "@/components/SolutionCard";
import LottieWithImages from "../../components/LottieWithImages";
import tailorcard from "../../public/assets/images/tailorcard.svg";
import personalcard from "../../public/assets/images/personalcard.svg";
import futureproof from "../../public/assets/images/futureproofcard.svg";
import disblayimg from "../../public/assets/images/disblay.svg";
import topikoimg from "../../public/assets/images/topiko.svg";
import fleximg from "../../public/assets/images/flex.svg";
import hebt from "../../public/assets/images/hebt.svg";
import Brandpreneuring from "../../public/assets/images/Brandpreneuring.svg";
import marketing from "../../public/assets/images/marketing.svg";
import whitescroll from "../../public/assets/images/blackscroll2.svg";
import blackscroll from "../../public/assets/images/whitescroll2.svg";
import StoryCard from "@/components/StoryCard";
import disblayicon from "../../public/assets/images/disblayicon.svg";
import flexicon from "../../public/assets/images/flexicon.svg";
import hebticon from "../../public/assets/images/hebticon.svg";
import topikoicon from "../../public/assets/images/topikoicon.svg";
import plusIcon from "../../public/assets/images/plus.svg";
import minusIcon from "../../public/assets/images/minus.svg";
import pinkarrow from "../../public/assets/images/pinkarrow.svg";
import twitter from "../../public/assets/images/twitter.svg";
import linkedin from "../../public/assets/images/linkedin.svg";
import insta from "../../public/assets/images/instagram.svg";

const TopikoPage = () => {
  // toggle states for buttons/cards (shared boolean flags)
  const [onStates, setOnStates] = useState(Array(14).fill(false));
  const handleToggles = (index) => {
    setOnStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const tabs = [
    { id: "products", label: "About Topiko Products" },
    { id: "ecosystem", label: "About Ecosystem" },
    { id: "hebt", label: "For Agencies (HEBT)" },
    { id: "marketing", label: "For Businesses (Marketing Suite)" },
    { id: "partners", label: "For Partners" },
  ];

  const faqs = {
    products: [
      {
        q: "What is Disblay, and how is it different from Topiko?",
        a: "Disblay is a quick, link-based mini-site builder that lets businesses share products or services instantly with no website setup required. It’s ideal for micro or home businesses starting online for the first time, and can later evolve into a full Topiko or Flex platform when they’re ready for more features.",
      },
      {
        q: "Who is Topiko best suited for?",
        a: "Topiko is designed for small to medium businesses looking to create a digital presence quickly and efficiently without heavy technical work.",
      },
      {
        q: "Do I need technical skills to use Topiko?",
        a: "No technical skills are required. Topiko is designed for anyone to use with simple tools and guided setup.",
      },
      {
        q: "How quickly can I launch?",
        a: "Most users can set up and launch within a day — it’s that easy.",
      },
      {
        q: "What support do you provide after launch?",
        a: "We provide continuous support, updates, and guidance through your dashboard or support center.",
      },
    ],
    ecosystem: [
      {
        q: "Why does Topiko have different products like Disblay, Topiko, Flex, and HEBT?",
        a: "Topiko’s ecosystem is designed to meet you where you are — and take you forward with your next growth steps, from quick link-based presence with Disblay to full-scale platforms like HEBT.",
      },
    ],
    hebt: [
      {
        q: "What kind of projects can I build with HEBT?",
        a: "HEBT supports websites, e-commerce, subscription, and service booking apps with complete web and mobile delivery.",
      },
      {
        q: "Do I get source code or full customization options with HEBT?",
        a: "Yes. HEBT offers full code access for customization, making it ideal for developers and agencies who want to extend or rebrand the platform.",
      },
    ],
    marketing: [
      {
        q: "Does Topiko Marketing Suite include social media or ad campaigns?",
        a: "Yes. It includes integrated tools for social media, WhatsApp marketing, and ad tracking — helping businesses reach and retain more customers effortlessly.",
      },
      {
        q: "Can I use Marketing Suite even if my website isn’t on Topiko?",
        a: "Absolutely. Our Marketing Suite works independently or integrates with Topiko for better analytics and automation.",
      },
    ],
    partners: [
      {
        q: "How do I become a Topiko partner?",
        a: "You can apply directly through our Partner Program page. After onboarding, you’ll receive training, sales materials, and backend access to manage your clients.",
      },
      {
        q: "What’s the difference between HEBT Partner and Topiko Business Partner programs?",
        a: "HEBT Partners are agencies or developers who use our technology to serve clients. Topiko Business Partners focus on helping local businesses go online using our ecosystem and earn recurring income.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("products");
  const [openIndexes, setOpenIndexes] = useState(
    faqs["products"].map(() => true)
  );

  const handleToggle = (index) => {
    setOpenIndexes((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const cards = [
    {
      image: disblayimg.src,
      title: "Display",
      description: "Share your products or services instantly with a beautiful, easy-to-use digital link.",
      button_title: "disblay",
    },
    {
      image: topikoimg.src,
      title: "Topiko",
      description: "Create your complete digital presence — website, engagement tools, and CRM in one platform.",
      button_title: "topiko",
    },
    {
      image: hebt.src,
      title: "HEBT Platform",
      description: "For businesses ready to scale — powerful, AI-driven systems built for performance.",
      button_title: "hebt",
    },
    {
      image: fleximg.src,
      title: "Topiko Flex",
      description: "Build your brand, your app, your domain — all customized to your business style.",
      button_title: "flex",
    },
    {
      image: marketing.src,
      title: "Topiko Marketing Suite",
      description: "Reach new customers and grow faster with digital marketing tools made for your goals.",
      button_title: "link",
    },
    {
      image: Brandpreneuring.src,
      title: "Brandpreneuring",
      description: "Build your story, visuals, and identity into a brand that stands out.",
      button_title: "link",
    },
  ];

  const stories = [
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Anita R.",
      role: "Boutique Owner",
      city: "Chennai",
      text: "Topiko helped us set up our store and get orders within a week. Support was hands-on and very practical.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Vikram S.",
      role: "Café Owner",
      city: "Bengaluru",
      text: "We switched from a manual process to Topiko — bookings doubled and customer follow-up is effortless now.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Meera P.",
      role: "Digital Agency",
      city: "Mumbai",
      text: "HEBT shortened delivery time. White-label options helped us brand the apps for clients.",
    },
  ];

  const pricingPlans = [
    {
      bgGradient: "from-[#f7f7f7] to-[#ABC7FF8F]",
      icon: disblayicon.src,
      title: "Display",
      price: "₹1,499",
      duration: "/year",
      description: "Quick digital catalog and link-based mini-site.",
      buttonLabel: "Get Started",
      index: 6,
    },
    {
      bgGradient: "from-[#FAE8FF] to-[#F8EFFF]",
      icon: topikoicon.src,
      title: "Topiko",
      price: "₹4,999",
      duration: "/year",
      description: "Complete digital presence with engagement tools and CRM.",
      buttonLabel: "Get Started",
      index: 7,
    },
    {
      bgGradient: "from-[#FFF8E1] to-[#FFF3C4]",
      icon: flexicon.src,
      title: "Flex",
      price: "Starts ₹19,999",
      duration: "/year",
      description: "Fully branded web + app setup with your own domain and branding.",
      buttonLabel: "Request Demo",
      index: 8,
    },
    {
      bgGradient: "from-[#EAE8FF] to-[#E6E8FF]",
      icon: hebticon.src,
      title: "HEBT",
      price: "Custom",
      duration: "(Based on Requirements)",
      description: "AI-powered app and web builder for agencies and enterprises.",
      buttonLabel: "Request Demo",
      index: 9,
    },
  ];

  return (
    <>
      <div
  className="
    min-h-screen flex flex-col
    bg-[radial-gradient(50%_50%_at_50%_50%,#1E2227_0%,#14181E_100%)]
    text-white
  "
>
  <Navbar />

  <header
    id="home"
    className="
      flex items-center justify-center
      min-h-[80vh] sm:min-h-[90vh] md:min-h-screen
      px-4 sm:px-6 md:px-10
      pt-20 md:pt-40 pb-10
    "
  >
    <div className="mx-auto w-full  px-4 sm:px-6 mt-4">
      {/* Responsive grid layout */}
      <div
        className="
          grid grid-cols-1 lg:grid-cols-12 items-center gap-8
          text-center lg:text-left
        "
      >
        {/* Left content */}
        <div className="lg:col-span-7 px-2 sm:px-3 flex flex-col items-center lg:items-start">
          <h1
            className="
              font-[Conthrax] font-semibold
              text-[28px] sm:text-[36px] md:text-[52px] lg:text-[68px]
              leading-tight md:leading-[124%]
              tracking-[-0.02em]
              bg-[radial-gradient(98%_522.28%_at_2%_13.3%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.45)_100%)]
              bg-clip-text text-transparent
              mb-4 sm:mb-6
            "
          >
            Powering Businesses in the Digital Era
          </h1>

          <p
            className="
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[26px] sm:leading-[30px] md:leading-[32px]
              text-white/70
              max-w-[600px]
              mb-6 sm:mb-8
            "
          >
            Topiko is where innovation meets simplicity — helping businesses of
            every size build their digital identity, connect with customers, and
            grow without limits.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#solutions"
              className="
                w-[220px] sm:w-[260px] md:w-[320px] lg:w-[352px]
                h-[54px] sm:h-[60px] md:h-[68px]
                rounded-2xl flex items-center justify-center
                bg-gradient-to-r from-[#b236ac] to-[#700d6c]
                shadow-[ -7px_4px_20px_0px_rgba(0,0,0,0.25)]
                text-white
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                font-medium
                transition-transform duration-300 ease-in-out
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(178,54,172,0.6)]
              "
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right image / Lottie section */}
        <div
          className="
            lg:col-span-5 flex justify-center lg:justify-end
            mt-10 lg:mt-0
          "
        >
          <div
            className="
              w-[240px] sm:w-[300px] md:w-[380px] lg:w-[440px] xl:w-[500px]
              flex items-center justify-center
            "
          >
            <LottieWithImages
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</div>


      <section className="w-full py-16 bg-[#f9f7fc] text-center">
        <div className=" mx-auto px-6">
          <h2 className="font-bold text-[28px] md:text-[32px] mb-4 text-[#0E091F]">Digital isn’t one size fits all and neither is Topiko</h2>
          <p className="text-[#0E091FB3] text-[16px] md:text-[18px] mb-10">Every business has a unique story. Whether you run a shop, a startup, or a large enterprise, <strong> Topiko adapts to your specific journey.</strong> Our tools, onboarding, and support are designed to fit your goals, your pace, and your scale.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <FeatureCard image={tailorcard.src} title="Tailor-made Platforms" description="We design around your business type, ensuring your platform is a custom solution — not just another rigid template." />
            <FeatureCard image={personalcard.src} title="Personalized Onboarding" description="Our experts offer dedicated setup and design assistance, guaranteeing you go live smoothly and confidently." />
            <FeatureCard image={futureproof.src} title="Future-Proof Scaling" description="Start small, expand anytime. Our system grows features and capacity automatically as your business demands increase." />
          </div>
        </div>
      </section>

     <section id="solutions" className="bg-[#F4F5F8] py-20 text-center">
  <div className="mx-auto px-6">
    <h2 className="text-[#0E091F] font-bold text-[32px] md:text-[52px] mb-4">
      Solutions for Every Stage of Growth
    </h2>

    <p className="text-[#383247] text-[18px] leading-[28px] mb-12 max-w-[800px] mx-auto">
      From your first online launch to full-scale enterprise operations,
      <strong> Topiko grows with you.</strong>
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <SolutionCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          showButtons={true}
          learnMoreLink="#"
          visitLabel={`Visit ${card.button_title}`}
          isOn={onStates[index]}
          onToggle={() => handleToggles(index)}
          iconOn={whitescroll.src}
          iconOff={blackscroll.src}
        />
      ))}
    </div>
  </div>
</section>


      <section id="stories" className="bg-white py-24 relative overflow-hidden text-center">
        <div className="mx-auto px-6 ">
          <h2 className="font-bold text-[32px] md:text-[52px] text-[#0E091F] mb-3">Stories of Growth</h2>
          <p className="text-[#383247] text-[18px] mb-16">Real businesses. Real results — what our customers say about Topiko.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative h-[560px] overflow-hidden px-4">
            <div className="animate-[scrollLoop_90s_linear_infinite] flex flex-col gap-6">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {stories.map((story, j) => (
                    <StoryCard key={j} {...story} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="animate-[scrollLoop_55s_linear_infinite] flex flex-col gap-6">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {stories
                    .slice()
                    .reverse()
                    .map((story, j) => (
                      <StoryCard key={j} {...story} />
                    ))}
                </React.Fragment>
              ))}
            </div>

            <div className="animate-[scrollLoop_40s_linear_infinite] flex flex-col gap-6">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {stories.map((story, j) => (
                    <StoryCard key={j} {...story} />
                  ))}
                </React.Fragment>
              ))}
            </div>

            <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          <div className="flex justify-center w-full mt-16">
            <div className="w-full rounded-[28px] bg-gradient-to-r from-[#6738E81A] to-[#BBA4FF1A] flex flex-col md:flex-row items-center justify-between text-center px-6 md:px-12 py-8 gap-6 md:gap-0">
              <div className="flex-1 flex flex-col items-center justify-center px-2">
                <h2 className="font-['Anek_Latin'] font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[38px] sm:leading-[44px] md:leading-[48px] tracking-[-1px] md:tracking-[-1.92px] text-[#0E091F]"><span>10k</span><span className="text-[#6738E8]">+</span></h2>
                <p className="font-['Inter'] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#0E091F99] mt-2">Deployed 10k+ digital assets and experiences</p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center px-2">
                <h2 className="font-['Anek_Latin'] font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[38px] sm:leading-[44px] md:leading-[48px] tracking-[-1px] md:tracking-[-1.92px] text-[#0E091F]"><span>7–14</span><span className="text-[#6738E8]"> Days</span></h2>
                <p className="font-['Inter'] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#0E091F99] mt-2">Average time to launch from brief to live — faster than ever</p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center px-2">
                <h2 className="font-['Anek_Latin'] font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[38px] sm:leading-[44px] md:leading-[48px] tracking-[-1px] md:tracking-[-1.92px] text-[#0E091F]"><span>98</span><span className="text-[#6738E8]">%</span></h2>
                <p className="font-['Inter'] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#0E091F99] mt-2">Customer satisfaction — businesses recommend Topiko to others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white text-center py-20">
        <div className=" mx-auto px-6">
          <h2 className="font-['Anek_Latin'] font-bold text-[32px] md:text-[52px] text-[#0E091F] mb-4">Pricing Built to Suit all Types of Business</h2>
          <p className="font-['Inter'] text-[#383247] text-[16px] md:text-[18px] mb-16">Choose the plan that fits your stage. Start small, scale anytime.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                bgGradient={plan.bgGradient}
                icon={plan.icon}
                title={plan.title}
                price={plan.price}
                duration={plan.duration}
                description={plan.description}
                buttonLabel={plan.buttonLabel}
                isOn={onStates[plan.index]}
                onToggle={() => handleToggles(plan.index)}
                iconOn={whitescroll.src}
                iconOff={blackscroll.src}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full  mx-auto px-6 md:px-12 py-20 md:py-24 rounded-t-[44px] bg-gradient-to-b from-[#1e2227] to-[#14181e] text-center text-white">
        <h2 className="font-['Anek_Latin'] font-bold text-[32px] md:text-[52px] mb-4">Frequently Asked Questions</h2>
        <p className="font-['Inter'] text-[16px] md:text-[18px] text-white/60 mb-12 max-w-[750px] mx-auto">We're here to help you make the right decision. Explore our frequently asked questions and find answers below.</p>

<div
  className="
    flex items-center justify-start md:justify-center 
    gap-3 md:gap-5 
    bg-[#e9e9e9] rounded-full 
    px-3 sm:px-4 py-2 
    overflow-x-auto 
    whitespace-nowrap 
    no-scrollbar 
    mx-auto mb-12 
    w-full sm:w-fit
  "
>
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => {
        setActiveTab(tab.id);
        setOpenIndexes(faqs[tab.id].map(() => true));
      }}
      className={`flex-shrink-0 font-['Anek_Latin'] font-semibold text-[14px] sm:text-[16px] md:text-[18px] 
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-full transition-all duration-300 
        ${
          activeTab === tab.id
            ? "bg-[#0e091f] text-white"
            : "text-[#0e091f] bg-transparent hover:bg-[#d8d8d8]"
        }`}
    >
      {tab.label}
    </button>
  ))}
</div>


        <div className="flex flex-col gap-4 max-w-[900px] mx-auto">
          {faqs[activeTab].map((item, index) => (
            <div key={index} className={`rounded-[24px] bg-[#242933] p-6 text-left transition-all duration-300 ${openIndexes[index] ? "shadow-lg" : ""}`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
                <h6 className="font-['Anek_Latin'] text-[20px] md:text-[24px] font-medium text-white leading-[30px]">{item.q}</h6>
                <img src={openIndexes[index] ? minusIcon.src : plusIcon.src} alt="toggle" className="w-6 h-6" />
              </div>

              {openIndexes[index] && (
                <div className="bg-[#1c2028] rounded-[16px] p-4 mt-3 transition-all duration-300">
                  <p className="font-['Inter'] text-[15px] text-[#e0e0e0]">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

  <div className="mt-16 flex flex-col items-center">
  <h4 className="font-['Anek_Latin'] font-semibold text-[22px]">
    Still have a question?
  </h4>

  <p className="font-['Inter'] text-white/80 mt-2 mb-6">
    Contact us! We will be happy to help you
  </p>

  <div className="flex justify-center">
    <VisitButton
      label="Request Demo"
      isOn={onStates[10]}
      onClick={() => handleToggles(10)}
      iconOn={whitescroll.src}
      iconOff={blackscroll.src}
    />
  </div>
</div>

      </section>

      
<section className="w-full py-10 px-4 bg-white">
  <div className="w-full  mx-auto text-center bg-[#f4f5f8] rounded-[36px] p-4 md:p-20 flex flex-col items-center justify-center gap-12">
    <h2 className="font-['Anek_Latin'] font-bold text-[36px] md:text-[52px] leading-[58px] text-[#0E091F] ">
      Let’s Build Something That Fits You
    </h2>

    <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#383247]">
      Get your tailor-made digital solution, simple to start, designed to grow.
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      {/* Start Now Button */}
      <button
        className={`flex items-center gap-3 rounded-full px-6 py-3 transition-all duration-300 ${
          onStates[11] ? "bg-[#E9E7FF]" : "bg-[#f6f7f9] shadow-md"
        }`}
        onClick={() => handleToggles(11)}
      >
        <span
          className={`w-[44px] h-[44px] flex items-center justify-center rounded-full transition-all duration-300 ${
            onStates[11] ? "bg-[#685EEF]" : "bg-[#262626]"
          }`}
        >
          <img
            src={onStates[11] ? whitescroll.src : pinkarrow.src}
            alt="arrow"
            className="w-[18px] h-[18px]"
          />
        </span>
        <span
          className={`text-[16px] font-medium transition-all duration-300 ${
            onStates[11] ? "text-[#685EEF]" : "text-black"
          }`}
        >
          Start Now
        </span>
      </button>

      {/* Talk to Expert Button */}
      <button
        className={`flex items-center gap-3 rounded-full px-6 py-3 transition-all duration-300 ${
          onStates[12] ? "bg-[#E9E7FF]" : "bg-[#f6f7f9] shadow-md"
        }`}
        onClick={() => handleToggles(12)}
      >
        <span
          className={`w-[44px] h-[44px] flex items-center justify-center rounded-full transition-all duration-300 ${
            onStates[12] ? "bg-[#685EEF]" : "bg-[#262626]"
          }`}
        >
          <img
            src={onStates[12] ? whitescroll.src : blackscroll.src}
            alt="arrow"
            className="w-[18px] h-[18px]"
          />
        </span>
        <span
          className={`text-[16px] font-medium transition-all duration-300 ${
            onStates[12] ? "text-[#685EEF]" : "text-black"
          }`}
        >
          Talk to our Expert
        </span>
      </button>
    </div>
  </div>
</section>

<footer className="bg-white text-[#0E091F] py-10">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
    {/* ---------- Top Section ---------- */}
    <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
      {/* Left Column */}
      <div className="w-full lg:max-w-[460px]">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={topikoicon.src}
            alt="Topiko Logo"
            className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px]"
          />
          <h3 className="font-['Anek_Latin'] font-medium text-[18px] sm:text-[20px] uppercase tracking-[-0.02em]">
            TOPIKO TECHNOLOGIES PVT. LTD.
          </h3>
        </div>

        <div className="mb-6">
          <p className="font-['Inter'] font-medium text-[14px] text-[#0E091F]">
            Address (we work globally)
          </p>
          <p className="font-['Inter'] text-[14px] sm:text-[15px] text-[#0E091FB2] mt-1">
            Hyderabad, Bangalore, Chennai
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          {[twitter, insta, linkedin].map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt="Social Icon"
              className="w-[22px] sm:w-[24px] h-[22px] sm:h-[24px] transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* ---------- Right Column ---------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full lg:w-auto">
        {/* Column 1 */}
        <div>
          <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
            Company
          </h4>
          <ul className="space-y-2">
            {["Home", "Work", "About", "Careers"].map((item) => (
              <li
                key={item}
                className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
            Products
          </h4>
          <ul className="space-y-2">
            {["Topiko", "Disblay", "Flex", "HEBT"].map((item) => (
              <li
                key={item}
                className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
            Services
          </h4>
          <ul className="space-y-2">
            {["Mobile development", "Web development"].map((item) => (
              <li
                key={item}
                className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-['Anek_Latin'] font-medium text-[16px] sm:text-[18px] mb-3">
            Resources
          </h4>
          <ul className="space-y-2">
            {["Insights", "FAQ"].map((item) => (
              <li
                key={item}
                className="font-['Inter'] text-[15px] sm:text-[16px] text-[#0E091FB2] hover:text-[#6738E8] cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* ---------- Bottom Section ---------- */}
    <div
      className="
        flex flex-col sm:flex-row items-center justify-center sm:justify-between
        border-t border-[#eaeaea] pt-6 gap-4 text-center sm:text-left
      "
    >
      <p className="font-['Anek_Latin'] text-[14px] sm:text-[16px] text-[#0E091FB2]">
        © 2025 TOPIKO. All rights reserved.
      </p>

      <p className="font-['Anek_Latin'] text-[14px] sm:text-[16px] text-[#0E091FB2]">
        Building the future of Indian commerce.
      </p>

      <div
        className="
          flex flex-wrap justify-center sm:justify-end
          gap-4 text-[#0E091FB2] text-[13px] sm:text-[14px]
        "
      >
        <a
          href="#"
          className="font-['Inter'] hover:text-[#6738E8] transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-['Inter'] hover:text-[#6738E8] transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="font-['Inter'] hover:text-[#6738E8] transition-colors"
        >
          Cookies Settings
        </a>
      </div>
    </div>
  </div>
</footer>



    </>
  );
};

export default TopikoPage;

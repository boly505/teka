import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  FileText,
  Globe,
  Heart,
  Instagram,
  MessageCircle,
  Music2,
  Phone,
  Sparkles,
} from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { copy, getWhatsAppHref, siteContent, type Locale } from "@/siteContent";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.01,
    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

const floatingDots = [
  { left: "8%", top: "14%", size: 10, delay: 0.3, duration: 10 },
  { left: "22%", top: "74%", size: 16, delay: 1.2, duration: 13 },
  { left: "70%", top: "18%", size: 12, delay: 0.8, duration: 12 },
  { left: "82%", top: "61%", size: 18, delay: 1.8, duration: 11 },
  { left: "56%", top: "36%", size: 8, delay: 0.5, duration: 9 },
  { left: "91%", top: "22%", size: 10, delay: 2.1, duration: 14 },
];

interface ActionCardProps {
  id?: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  featured?: boolean;
}

interface SocialCardProps {
  icon: ReactNode;
  platform: string;
  handle: string;
  href: string;
  accent: string;
}

function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {floatingDots.map((dot, index) => (
        <motion.div
          key={`${dot.left}-${dot.top}`}
          className="absolute rounded-full bg-pink-300/70 blur-[1px]"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, index % 2 === 0 ? 10 : -10, 0],
            opacity: [0.24, 0.62, 0.24],
            scale: [1, 1.22, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,#ffd8ec_0%,rgba(255,216,236,0)_72%)]" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-pink-200/35 blur-3xl" />
      <div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-fuchsia-200/35 blur-3xl" />
    </div>
  );
}

function ActionCard({
  id,
  icon,
  title,
  subtitle,
  href,
  featured = false,
}: ActionCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      id={id}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={`group relative overflow-hidden rounded-[28px] border p-5 text-start shadow-[0_20px_55px_rgba(240,79,154,0.12)] backdrop-blur transition-all ${
        featured
          ? "border-transparent bg-gradient-to-br from-[#ff5ea8] via-[#f04f9a] to-[#a241ff] text-white"
          : "border-white/70 bg-white/82 text-slate-900"
      }`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_45%)]" />
      <div className="relative z-10 flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
            featured ? "bg-white/18 text-white" : "bg-pink-100 text-pink-600"
          }`}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="bidi-copy text-lg font-black tracking-tight">{title}</h3>
          <p
            className={`bidi-copy mt-2 text-sm leading-6 ${
              featured ? "text-pink-50" : "text-slate-500"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 ${
            featured ? "bg-white/16 text-white" : "bg-slate-100 text-pink-600"
          }`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function SocialCard({ icon, platform, handle, href, accent }: SocialCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative overflow-hidden rounded-[24px] border border-white/75 bg-white/82 p-5 shadow-[0_20px_55px_rgba(240,79,154,0.1)] backdrop-blur"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(145deg, ${accent}18, transparent 52%)` }}
      />
      <div className="relative z-10 flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${accent}18`, color: accent }}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-black text-slate-900">
            <bdi className="latin-inline" lang="en">
              {platform}
            </bdi>
          </div>
          <div className="bidi-copy truncate text-sm text-slate-500">{handle}</div>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-pink-500" />
      </div>
    </motion.a>
  );
}

function App() {
  const [lang, setLang] = useState<Locale>("ar");
  const text = copy[lang];
  const whatsappHref = getWhatsAppHref(lang);
  const stats = [
    { value: "1000+", label: text.statCustomers },
    { value: "50+", label: text.statDesigns },
    { value: "5★", label: text.statRating },
  ];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    window.render_game_to_text = () =>
      JSON.stringify({
        view: "home",
        lang,
        menuHref: siteContent.menuHref,
        coordinateSystem: "page layout",
      });
    window.advanceTime = () => {};

    return () => {
      delete window.render_game_to_text;
      delete window.advanceTime;
    };
  }, [lang]);

  function toggleLanguage() {
    setLang((currentLang) => (currentLang === "ar" ? "en" : "ar"));
  }

  return (
    <div
      className="app-shell relative min-h-screen overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <FloatingDecor />
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <motion.main
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header
          className="flex flex-wrap items-center justify-between gap-4"
          variants={itemVariants}
        >
          <div className="glass-panel flex items-center gap-3 rounded-full px-4 py-2.5">
            <BrandLogo src={siteContent.logo.src} alt={siteContent.logo.alt} size="sm" />
            <div className="text-lg font-black text-slate-900">
              <bdi className="latin-inline" lang="en">
                {siteContent.shortName}
              </bdi>
            </div>
          </div>

          <Button
            id="lang-switch"
            variant="outline"
            onClick={toggleLanguage}
            className="rounded-full border-pink-200 bg-white/80 px-5 shadow-sm shadow-pink-100/60 backdrop-blur hover:border-pink-300 hover:bg-white"
          >
            <Globe className="h-4 w-4" />
            {text.languageSwitch}
          </Button>
        </motion.header>

        <div className="mt-8 grid flex-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.section className="text-center lg:text-start" variants={containerVariants}>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-pink-600 shadow-sm shadow-pink-100/70 backdrop-blur"
              variants={itemVariants}
            >
              <Sparkles className="h-4 w-4" />
              <span className="bidi-copy">{text.heroPill}</span>
            </motion.div>

            <motion.h1
              className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              <bdi className="hero-text-gradient latin-inline" lang="en">
                {siteContent.brandName}
              </bdi>
            </motion.h1>

            <motion.p
              className="bidi-copy mt-4 text-lg font-semibold leading-8 text-slate-700 sm:text-xl"
              variants={itemVariants}
            >
              {text.heroSubtitle}
            </motion.p>

            <motion.p
              className="bidi-copy mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
              variants={itemVariants}
            >
              {text.heroBody}
            </motion.p>

            <motion.div className="mt-8 grid gap-4 sm:grid-cols-2" variants={containerVariants}>
              <ActionCard
                id="menu-card"
                icon={<FileText className="h-6 w-6" />}
                title={text.menuTitle}
                subtitle={text.menuSubtitle}
                href={siteContent.menuHref}
                featured
              />
              <ActionCard
                id="whatsapp-card"
                icon={<MessageCircle className="h-6 w-6" />}
                title={text.whatsappTitle}
                subtitle={text.whatsappSubtitle}
                href={whatsappHref}
              />
              <ActionCard
                id="call-card"
                icon={<Phone className="h-6 w-6" />}
                title={text.callTitle}
                subtitle={text.callSubtitle}
                href={siteContent.phone.href}
              />
            </motion.div>
          </motion.section>

          <motion.aside className="flex flex-col items-center gap-8" variants={containerVariants}>
            <motion.div
              className="flex w-full items-center justify-center"
              variants={itemVariants}
            >
              <BrandLogo src={siteContent.logo.src} alt={siteContent.logo.alt} />
            </motion.div>

            <motion.div
              className="grid w-full grid-cols-3 gap-4 text-center"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[24px] px-3 py-4">
                  <div className="hero-text-gradient text-2xl font-black">
                    <bdi className="numeric-inline">{stat.value}</bdi>
                  </div>
                  <div className="bidi-copy mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.aside>
        </div>

        <motion.section className="mt-12" variants={itemVariants}>
          <div className="mb-6 text-center">
            <h2 className="bidi-copy text-2xl font-black text-slate-950">{text.socialTitle}</h2>
            <p className="bidi-copy mt-2 text-sm leading-7 text-slate-500">{text.socialSubtitle}</p>
          </div>
          <motion.div className="grid gap-3 md:grid-cols-3" variants={containerVariants}>
            <SocialCard
              icon={<Instagram className="h-5 w-5" />}
              platform="Instagram"
              handle={siteContent.socials.instagram.handle}
              href={siteContent.socials.instagram.href}
              accent="#e4405f"
            />
            <SocialCard
              icon={<Facebook className="h-5 w-5" />}
              platform="Facebook"
              handle={siteContent.socials.facebook.handle}
              href={siteContent.socials.facebook.href}
              accent="#1877f2"
            />
            <SocialCard
              icon={<Music2 className="h-5 w-5" />}
              platform="TikTok"
              handle={siteContent.socials.tiktok.handle}
              href={siteContent.socials.tiktok.href}
              accent="#111827"
            />
          </motion.div>
        </motion.section>

        <motion.footer className="mt-10 py-8 text-center" variants={itemVariants}>
          <div dir="ltr" className="flex items-center justify-center gap-2 text-slate-400">
            <bdi className="latin-inline" lang="en">
              Made with
            </bdi>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
            </motion.div>
            <bdi className="latin-inline" lang="en">
              by
            </bdi>
            <a
              href="https://wa.me/201015594319"
              target="_blank"
              rel="noreferrer noopener"
              className="latin-inline font-semibold text-pink-500 underline-offset-4 transition hover:underline"
            >
              Mohamed Belal
            </a>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
}

export default App;

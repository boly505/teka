export type Locale = "ar" | "en";

export const siteContent = {
  brandName: "Teka Desserts",
  shortName: "Teka",
  logo: {
    src: "/logo.png",
    alt: "Teka Desserts logo",
  },
  menuHref: "/menu/index.html",
  phone: {
    label: "+20 1099489654",
    href: "tel:+201099489654",
  },
  whatsapp: {
    label: "+20 1099489654",
    number: "201099489654",
    message: {
      ar: "مرحبًا Teka Desserts، عايز أطلب أوردر.",
      en: "Hello Teka Desserts, I would like to order.",
    },
  },
  socials: {
    instagram: {
      href: "https://www.instagram.com/desert_tika?igsh=MWpibWxnMWx0cTBzdg==",
      handle: "تابعنا على إنستجرام",
    },
    facebook: {
      href: "https://www.facebook.com/share/18UMDykcYb/",
      handle: "تابعنا على فيسبوك",
    },
    tiktok: {
      href: "https://www.tiktok.com/@tekadessert?_r=1&_t=ZS-94kVkSC11in",
      handle: "تابعنا على تيك توك",
    },
  },
} as const;

export const copy = {
  ar: {
    languageSwitch: "English",
    heroPill: "Online Dessert Shop",
    heroSubtitle: "حلويات فاخرة بتصاميم مبتكرة ونكهات لا تُنسى",
    heroBody:
      "نقدم لكِ أشهى الحلويات المصنوعة بأجود المكونات وبأيدٍ مصرية. اطلبي الآن واستمتعي بطعم لا يُقاوم!",
    menuTitle: "المنيو",
    menuSubtitle: "شاهدي كل حلوياتنا",
    whatsappTitle: "واتساب",
    whatsappSubtitle: "للطلب والاستفسار",
    callTitle: "اتصال",
    callSubtitle: "اتصلي بنا مباشرة",
    socialTitle: "تابعينا على السوشيال ميديا",
    socialSubtitle: "للتعرف على أحدث العروض والتصاميم",
    statCustomers: "عميلة سعيدة",
    statDesigns: "تصميم فريد",
    statRating: "تقييم ممتاز",
  },
  en: {
    languageSwitch: "العربية",
    heroPill: "Online Dessert Shop",
    heroSubtitle: "Luxury desserts with innovative designs and unforgettable flavors",
    heroBody:
      "We offer you the most delicious desserts made with the finest ingredients by Egyptian hands. Order now and enjoy an irresistible taste!",
    menuTitle: "Menu",
    menuSubtitle: "View all our desserts",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "For orders & inquiries",
    callTitle: "Call",
    callSubtitle: "Call us directly",
    socialTitle: "Follow us on Social Media",
    socialSubtitle: "For latest offers and designs",
    statCustomers: "Happy Customers",
    statDesigns: "Unique Designs",
    statRating: "Excellent Rating",
  },
} as const;

export function getWhatsAppHref(locale: Locale) {
  const message = siteContent.whatsapp.message[locale];
  return `https://wa.me/${siteContent.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

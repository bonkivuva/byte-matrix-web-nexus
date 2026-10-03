export const siteConfig = {
  name: "Byte Matrix Technologies",
  tagline: "Enterprise IT infrastructure, managed with precision.",
  phoneDisplay: "+254 724 367 794",
  phoneHref: "tel:+254724367794",
  email: "info@bytematrixtechnologies.co.ke",
  location: "Nairobi, Kenya",
  whatsapp: "https://wa.me/254724367794?text=Hello%2C%20I%27d%20like%20to%20discuss%20enterprise%20IT%20support.",
  socials: {
    x: "https://x.com/ByteMatrixTech",
    facebook: "https://www.facebook.com/share/1BSjKFRCUd/",
    instagram: "https://www.instagram.com/byte_matrix_technologies",
  },
} as const;

export const primaryNavigation = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/#industries" },
  { label: "About", to: "/#about" },
  { label: "Case Studies", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

export const serviceInterests = [
  "Managed IT Services",
  "IT Infrastructure & Hardware",
  "Network & Connectivity",
  "Cloud & Cybersecurity",
  "Custom Software & Web Applications",
  "Professional Hardware Procurement",
  "Other",
] as const;
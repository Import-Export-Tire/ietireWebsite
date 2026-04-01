import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ietires.com'),
  title: {
    default: "Import Export Tire | Wholesale Tire Distributor in Western PA Since 1972",
    template: "%s | Import Export Tire",
  },
  description: "Western Pennsylvania's trusted wholesale tire distributor since 1972. Competitive B2B pricing on Falken, Kenda, Nexen, Atturo, Milestar, Lionhart, Lexani, Cosmo & more. Over 100,000 tires in stock. Same-day shipping from Latrobe & Uniontown, PA.",
  keywords: [
    "wholesale tires",
    "wholesale tire distributor",
    "tire distribution",
    "B2B tires",
    "wholesale tire warehouse",
    "tire wholesaler near me",
    "bulk tires",
    "tire supplier",
    "Falken tires wholesale",
    "Kenda tires wholesale",
    "Nexen tires wholesale",
    "Atturo tires wholesale",
    "Milestar tires wholesale",
    "Lionhart tires wholesale",
    "Lexani tires wholesale",
    "Cosmo tires wholesale",
    "Arroyo tires",
    "RBP tires",
    "American Roadstar tires",
    "Lanvigator tires",
    "Pennsylvania tire distributor",
    "Western PA tire supplier",
    "Latrobe PA tires",
    "Uniontown PA tires",
    "Pittsburgh area tire distributor",
    "tire wholesale warehouse PA",
    "commercial tires wholesale",
    "passenger tires wholesale",
    "truck tires wholesale",
    "same day tire shipping",
    "tire dealer supply",
    "open a tire wholesale account",
  ],
  authors: [{ name: "Import Export Tire" }],
  creator: "Import Export Tire",
  publisher: "Import Export Tire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ietires.com",
    siteName: "Import Export Tire",
    title: "Import Export Tire | Wholesale Tire Distributor in Western PA Since 1972",
    description: "Western PA's trusted wholesale tire distributor. Over 100,000 tires in stock from 13+ brands. Competitive B2B pricing, same-day shipping from Latrobe & Uniontown.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Import Export Tire team — wholesale tire distribution in Western Pennsylvania since 1972",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Tire | Wholesale Tire Distributor Since 1972",
    description: "Western PA's trusted wholesale tire distributor. 100,000+ tires in stock, 13+ brands, same-day shipping.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ietires.com",
  },
  category: "business",
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Latrobe, Pennsylvania",
    "geo.position": "40.2884;-79.3817",
    "ICBM": "40.2884, -79.3817",
  },
};

// JSON-LD: LocalBusiness schema
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ietires.com/#business",
  name: "Import Export Tire",
  alternateName: "IE Tire",
  description: "Western Pennsylvania's trusted wholesale tire distributor since 1972. Over 100,000 tires in stock with competitive B2B pricing and same-day shipping.",
  url: "https://www.ietires.com",
  telephone: "+1-724-539-8705",
  email: "sales@ietires.com",
  foundingDate: "1972",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 20,
    maxValue: 50,
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "410 Unity Street",
      addressLocality: "Latrobe",
      addressRegion: "PA",
      postalCode: "15650",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "350 Pittsburgh Street",
      addressLocality: "Uniontown",
      addressRegion: "PA",
      postalCode: "15401",
      addressCountry: "US",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2884,
    longitude: -79.3817,
  },
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "West Virginia" },
    { "@type": "State", name: "Ohio" },
    { "@type": "State", name: "Maryland" },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card, Wire Transfer",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  image: "https://www.ietires.com/images/og-image.jpg",
  logo: "https://www.ietires.com/favicon.svg",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wholesale Tires",
    itemListElement: [
      "Falken", "Kenda", "Nexen", "Atturo", "Milestar",
      "Lionhart", "Lexani", "Cosmo", "Arroyo", "RBP",
      "American Roadstar", "Lanvigator", "Venom Power", "Lancaster",
    ].map(brand => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: `${brand} Tires`, category: "Tires" },
    })),
  },
  aggregateRating: undefined, // Add when reviews are available
};

// JSON-LD: WebSite schema (enables sitelinks search box in Google)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ietires.com/#website",
  name: "Import Export Tire",
  url: "https://www.ietires.com",
  publisher: {
    "@id": "https://www.ietires.com/#business",
  },
};

// JSON-LD: JobPosting schema for all active positions
const jobPostingJsonLd = [
  {
    title: "Warehouse Associate",
    description: "Load/unload trucks, organize inventory, and ensure accurate order fulfillment in our tire distribution warehouse. Full-time position with competitive hourly pay, health insurance, 401(k), and paid time off.",
    location: "Latrobe, PA",
  },
  {
    title: "Warehouse Picker",
    description: "Pick and prepare tire orders for shipment. Operate pallet jacks and ensure order accuracy in a fast-paced environment. Full-time with competitive hourly pay, health insurance, 401(k), and paid time off.",
    location: "Latrobe, PA",
  },
  {
    title: "Inventory Specialist",
    description: "Manage inventory counts, track stock levels, coordinate with purchasing, and maintain accurate inventory records. Full-time with competitive salary, health insurance, 401(k), and growth opportunity.",
    location: "Latrobe, PA",
  },
  {
    title: "Warehouse Management",
    description: "Supervise warehouse team, optimize operations, manage scheduling, and ensure safety compliance. 3+ years experience required. Full-time with competitive salary, full benefits, 401(k) match.",
    location: "Latrobe, PA",
  },
  {
    title: "Shift Supervisor",
    description: "Lead warehouse team during assigned shift. Coordinate daily operations, handle issues, and maintain productivity standards. Full-time with competitive salary, health insurance, 401(k), and advancement opportunity.",
    location: "Latrobe, PA",
  },
  {
    title: "Delivery Driver (CDL)",
    description: "Deliver tires to wholesale customers throughout Western PA. CDL Class A or B required. Full-time with top driver pay, home daily, full benefits, and newer equipment.",
    location: "Latrobe, PA",
  },
  {
    title: "Inside Sales Representative",
    description: "Build relationships with wholesale accounts, process orders, and provide excellent customer service to our B2B clients. Full-time with base + commission, growth opportunity, and health benefits.",
    location: "Uniontown, PA",
  },
  {
    title: "Technology / IT Support",
    description: "Support IT infrastructure, troubleshoot hardware/software issues, maintain inventory systems, and assist with technology projects. Full-time with competitive salary, full benefits, and professional development.",
    location: "Latrobe, PA",
  },
  {
    title: "Administrative Assistant",
    description: "Provide administrative support, manage schedules, handle correspondence, and assist with office operations. Full-time with competitive salary, health insurance, 401(k).",
    location: "Latrobe, PA",
  },
].map(job => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
  datePosted: "2025-03-01",
  validThrough: "2026-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Import Export Tire",
    sameAs: "https://www.ietires.com",
    logo: "https://www.ietires.com/favicon.svg",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.location.split(",")[0].trim(),
      addressRegion: "PA",
      addressCountry: "US",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "US",
  },
  directApply: true,
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
        />
      </head>
      <body className="bg-dark-950 text-white antialiased">
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}

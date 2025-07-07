import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Tushar Khatri - Tech Enthusiast & Mobile App Developer",
  description:
    "Tech enthusiast building creative apps with Flutter, Firebase, and AI. Currently diving into native Android development with Java and sharpening problem-solving skills in DSA.",
  keywords: ["Tushar Khatri", "Flutter Developer", "Mobile Developer", "Firebase", "Android", "Java", "DSA"],
  authors: [{ name: "Tushar Khatri" }],
  creator: "Tushar Khatri",
  openGraph: {
    title: "Tushar Khatri - Tech Enthusiast & Mobile Developer",
    description:
      "Tech enthusiast building creative apps with Flutter, Firebase, and AI. Currently diving into native Android development with Java and sharpening problem-solving skills in DSA.",
    url: "https://tusharkhatri.in",
    siteName: "Tushar Khatri Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tushar Khatri - Tech Enthusiast & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Khatri - Tech Enthusiast & Mobile Developer",
    description: "Tech enthusiast building creative apps with Flutter, Firebase, and AI.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return <Portfolio />
}

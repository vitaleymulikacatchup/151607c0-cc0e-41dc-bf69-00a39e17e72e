"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Zap, Crown } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="StartDown"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Solutions", id: "features" },
            { name: "Pricing", id: "/pricing" },
            { name: "Resources", id: "/contact" }
          ]}
          button={{
            text: "Get Started",
            href: "https://startdown.io/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Smart Investment Solutions for Your Future"
          description="StartDown empowers investors with intelligent portfolio management, real-time analytics, and personalized investment strategies designed for sustainable growth."
          tag="Investment Platform"
          tagIcon={Sparkles}
          background={{ variant: "canvas-reveal" }}
          imageSrc="https://img.b2bpic.net/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg"
          imageAlt="Investment dashboard interface"
          buttons={[
            { text: "Start Investing", href: "/pricing" },
            { text: "Learn More", href: "#features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="Powerful Features for Smarter Investing"
          description="Our platform combines advanced technology with financial expertise to deliver comprehensive investment tools."
          tag="Platform Capabilities"
          features={[
            {
              id: "1",
              title: "Portfolio Diversification Engine",
              author: "StartDown Analytics Team",
              description: "Automatically diversify across asset classes with AI-powered recommendations that balance risk and return based on your investment goals.",
              tags: ["AI", "Portfolio"],
              imageSrc: "https://img.b2bpic.net/free-photo/analyzing-business-chart_1098-19461.jpg",
              imageAlt: "Portfolio diversification visualization"
            },
            {
              id: "2",
              title: "Real-Time Market Analytics",
              author: "StartDown Research Division",
              description: "Access comprehensive market data, trends, and insights updated in real-time. Make informed decisions with professional-grade analytics tools.",
              tags: ["Analytics", "Real-Time"],
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-digital-tablet-with-bar-graph_1098-3523.jpg",
              imageAlt: "Market analytics dashboard"
            },
            {
              id: "3",
              title: "Enterprise-Grade Security",
              author: "StartDown Security Team",
              description: "Bank-level encryption and multi-factor authentication protect your investments. Full compliance with international financial regulations.",
              tags: ["Security", "Compliance"],
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-lock-with-metal-chain_23-2148578050.jpg",
              imageAlt: "Security protection interface"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Trusted by thousands of investors worldwide. Our track record speaks for itself."
          tag="By The Numbers"
          metrics={[
            {
              id: "1",
              value: "$2.3B",
              description: "Assets under management across our platform"
            },
            {
              id: "2",
              value: "47K+",
              description: "Active investors building wealth with StartDown"
            },
            {
              id: "3",
              value: "18.5%",
              description: "Average annual return outperforming market benchmarks"
            },
            {
              id: "4",
              value: "99.9%",
              description: "Platform uptime and security rating"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Investors Say"
          description="Join thousands of satisfied investors who have grown their wealth with StartDown."
          tag="Success Stories"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "CEO, TechVentures Inc",
              testimonial: "StartDown has transformed how I manage my investment portfolio. The analytics tools are incredibly intuitive and the results speak for themselves.",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              handle: "Founder, Growth Capital",
              testimonial: "The platform's AI recommendations helped us optimize our portfolio allocation. We've seen consistent outperformance since switching to StartDown.",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emily Watson",
              handle: "Investment Manager",
              testimonial: "Security and transparency are paramount in our industry. StartDown delivers on both fronts with enterprise-grade infrastructure and clear reporting.",
              imageSrc: "https://img.b2bpic.net/free-photo/business-woman-banner-concept-with-copy-space_23-2149601533.jpg",
              imageAlt: "Emily Watson"
            },
            {
              id: "4",
              name: "David Park",
              handle: "Financial Advisor, Wealth Partners",
              testimonial: "I recommend StartDown to all my clients. The combination of advanced technology and expert guidance makes wealth building accessible to everyone.",
              imageSrc: "https://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84733.jpg",
              imageAlt: "David Park"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "Executive Director",
              testimonial: "Best investment platform I've used. The customer support team is responsive, and the tools are constantly improving based on user feedback.",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "6",
              name: "James Mitchell",
              handle: "Portfolio Manager",
              testimonial: "StartDown's diversification engine has been game-changing for our firm. We've reduced risk while improving returns across all client accounts.",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "James Mitchell"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <FooterBaseReveal
        columns={[
          {
            title: "Platform",
            items: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Security", href: "https://startdown.io/security" },
              { label: "API Docs", href: "https://startdown.io/api" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "https://startdown.io/about" },
              { label: "Blog", href: "https://startdown.io/blog" },
              { label: "Careers", href: "https://startdown.io/careers" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Legal",
            items: [
              { label: "Privacy Policy", href: "https://startdown.io/privacy" },
              { label: "Terms of Service", href: "https://startdown.io/terms" },
              { label: "Compliance", href: "https://startdown.io/compliance" },
              { label: "Cookie Settings", href: "https://startdown.io/cookies" }
            ]
          }
        ]}
        copyrightText="© 2025 StartDown. All rights reserved. Invest with confidence."
      />
    </ThemeProvider>
  );
}
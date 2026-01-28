"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Sparkles, Crown } from "lucide-react";

export default function PricingPage() {
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
            { name: "Solutions", id: "/" },
            { name: "Pricing", id: "/pricing" },
            { name: "Resources", id: "/contact" }
          ]}
          button={{
            text: "Get Started",
            href: "https://startdown.io/signup"
          }}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Investment Plan"
          description="Select the perfect plan to start your investment journey. Upgrade anytime as your portfolio grows."
          tag="Transparent Pricing"
          tagIcon={Zap}
          plans={[
            {
              id: "starter",
              price: "$0/mo",
              name: "Starter",
              badge: "Popular Choice",
              badgeIcon: Sparkles,
              buttons: [
                { text: "Get Started", href: "https://startdown.io/signup?plan=starter" },
                { text: "Learn More", href: "/" }
              ],
              features: [
                "Up to $50K in investments",
                "Basic portfolio tracking",
                "Weekly market updates",
                "Mobile app access",
                "Email support"
              ]
            },
            {
              id: "pro",
              price: "$9.99/mo",
              name: "Professional",
              badge: "Most Popular",
              badgeIcon: Crown,
              buttons: [
                { text: "Start Pro Trial", href: "https://startdown.io/signup?plan=pro" },
                { text: "Chat with Us", href: "/contact" }
              ],
              features: [
                "Unlimited investments",
                "Advanced analytics",
                "AI portfolio optimization",
                "Real-time alerts",
                "Priority support",
                "Tax optimization tools"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                { text: "Schedule Demo", href: "/contact" },
                { text: "Contact Sales", href: "https://startdown.io/contact-sales" }
              ],
              features: [
                "White-label solutions",
                "Institutional pricing",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced API access",
                "24/7 phone support"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about StartDown, our investment strategies, and how to get started."
          tag="Support"
          faqs={[
            {
              id: "1",
              title: "How do I get started with StartDown?",
              content: "Getting started is simple! Sign up for an account, complete our quick risk assessment, fund your account, and our AI will recommend your initial portfolio allocation. Most investors are fully set up within 15 minutes."
            },
            {
              id: "2",
              title: "Is my money secure on StartDown?",
              content: "Yes. StartDown uses bank-level encryption (AES-256), multi-factor authentication, and stores assets with certified custodians. We're fully compliant with SEC regulations and maintain $250K FDIC insurance per account."
            },
            {
              id: "3",
              title: "What are the fees involved?",
              content: "StartDown operates on a transparent, low-fee model. Starter accounts are free. Pro accounts are $9.99/month. Enterprise clients pay custom rates. We charge no hidden fees, no trading commissions, and no asset management fees on top of the platform fee."
            },
            {
              id: "4",
              title: "Can I withdraw my money anytime?",
              content: "Absolutely. You can withdraw your funds anytime with no penalties. Most withdrawals process within 1-3 business days. We believe your money should be accessible whenever you need it."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/people-working-call-center_23-2149288189.jpg"
          imageAlt="Customer support and FAQ"
          mediaPosition="right"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated on Market Insights"
          description="Get weekly investment tips, market analysis, and exclusive opportunities delivered to your inbox. Join 50,000+ investors who trust StartDown."
          useInvertedBackground="noInvert"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. See our privacy policy for details."
        />
      </div>

      <FooterBaseReveal
        columns={[
          {
            title: "Platform",
            items: [
              { label: "Features", href: "/" },
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
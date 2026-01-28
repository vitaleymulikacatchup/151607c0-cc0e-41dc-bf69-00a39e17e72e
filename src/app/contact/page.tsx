"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ContactPage() {
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

      <div id="support" data-section="support">
        <MetricCardFourteen
          title="Our support team is here to help you succeed with your investment journey."
          tag="Support Excellence"
          metrics={[
            {
              id: "1",
              value: "<2min",
              description: "Average response time for customer inquiries"
            },
            {
              id: "2",
              value: "98.5%",
              description: "Customer satisfaction rating for our support team"
            }
          ]}
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions About Getting Started"
          description="Here are answers to the most frequently asked questions about StartDown and our investment platform."
          tag="Quick Help"
          faqs={[
            {
              id: "1",
              title: "How quickly can I start investing?",
              content: "You can start investing immediately after account verification. Most users complete setup within 15 minutes and make their first investment the same day."
            },
            {
              id: "2",
              title: "What's the minimum investment amount?",
              content: "There's no minimum investment required. You can start with any amount you're comfortable with, whether it's $10 or $10,000."
            },
            {
              id: "3",
              title: "How do I contact customer support?",
              content: "You can reach our support team via email, live chat, or phone. Pro and Enterprise customers receive priority support with faster response times."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/people-working-call-center_23-2149288189.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
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
"use client";

import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

type BlogPost = {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    imageSrc: string;
    imageAlt?: string;
    authorName: string;
    authorAvatar: string;
    date: string;
    onBlogClick?: () => void;
};

const defaultPosts: BlogPost[] = [
    {
        id: "1",        category: "Design",        title: "UX review presentations",        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",        imageSrc: "/placeholders/placeholder3.avif",        imageAlt: "Abstract design with purple and silver tones",        authorName: "Olivia Rhye",        authorAvatar: "/placeholders/placeholder3.avif",        date: "20 Jan 2025",        onBlogClick: () => console.log("Blog 1 clicked"),
    },
    {
        id: "2",        category: "Development",        title: "Building scalable applications",        excerpt: "Learn the best practices for building applications that can handle millions of users.",        imageSrc: "/placeholders/placeholder4.webp",        imageAlt: "Development workspace",        authorName: "John Smith",        authorAvatar: "/placeholders/placeholder4.webp",        date: "18 Jan 2025",        onBlogClick: () => console.log("Blog 2 clicked"),
    },
    {
        id: "3",        category: "Marketing",        title: "Content strategy essentials",        excerpt: "Discover how to create a content strategy that drives engagement and conversions.",        imageSrc: "/placeholders/placeholder3.avif",        imageAlt: "Marketing strategy board",        authorName: "Sarah Johnson",        authorAvatar: "/placeholders/placeholder3.avif",        date: "15 Jan 2025",        onBlogClick: () => console.log("Blog 3 clicked"),
    },
    {
        id: "4",        category: "Product",        title: "Product management 101",        excerpt: "Everything you need to know to become an effective product manager in 2025.",        imageSrc: "/placeholders/placeholder4.webp",        imageAlt: "Product planning session",        authorName: "Mike Davis",        authorAvatar: "/placeholders/placeholder4.webp",        date: "12 Jan 2025",        onBlogClick: () => console.log("Blog 4 clicked"),
    },
];

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

                if (!apiUrl || !projectId) {
                    console.warn("NEXT_PUBLIC_API_URL or NEXT_PUBLIC_PROJECT_ID not configured, using default posts");
                    setIsLoading(false);
                    return;
                }

                const url = `${apiUrl}/posts/${projectId}?status=published`;
                const response = await fetch(url, {
                    method: "GET",                    headers: {
                        "Content-Type": "application/json"},
                });

                if (response.ok) {
                    const resp = await response.json();
                    const data = resp.data;
                    if (Array.isArray(data) && data.length > 0) {
                        const mappedPosts = data.map((post: any) => ({
                            id: post.id || String(Math.random()),
                            category: post.category || "General",                            title: post.title || "Untitled",                            excerpt: post.excerpt || post.content.slice(0, 30) || "",                            imageSrc: post.imageUrl || "/placeholders/placeholder3.avif",                            imageAlt: post.imageAlt || post.title || "",                            authorName: post.author?.name || "Anonymous",                            authorAvatar: post.author?.avatar || "/placeholders/placeholder3.avif",                            date: post.date || post.createdAt || new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
                            onBlogClick: () => console.log(`Blog ${post.id} clicked`),
                        }));
                        setPosts(mappedPosts);
                    }
                } else {
                    console.warn(`API request failed with status ${response.status}, using default posts`);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
            <ReactLenis root>
                <div className="min-h-screen bg-background">
                    <NavbarLayoutFloatingInline
                        brandName="StartDown"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "Solutions", id: "solutions" },
                            { name: "Pricing", id: "pricing" },
                            { name: "Resources", id: "resources" }
                        ]}
                        button={{ text: "Get Started", href: "https://startdown.io/signup" }}
                    />

                    {isLoading ? (
                        <div className="w-content-width mx-auto py-20 text-center">
                            <p className="text-foreground">Loading posts...</p>
                        </div>
                    ) : (
                        <BlogCardOne
                            blogs={posts}
                            title="Latest Articles"
                            description="Insights and updates from our team"
                            textboxLayout="default"
                            useInvertedBackground="noInvert"
                            animationType="slide-up"
                            carouselMode="buttons"
                        />
                    )}

                    <FooterBaseReveal
                        columns={[
                            {
                                title: "Platform",                                items: [
                                    { label: "Features", href: "features" },
                                    { label: "Pricing", href: "pricing" },
                                    { label: "Security", href: "https://startdown.io/security" },
                                    { label: "API Docs", href: "https://startdown.io/api" }
                                ]
                            },
                            {
                                title: "Company",                                items: [
                                    { label: "About Us", href: "https://startdown.io/about" },
                                    { label: "Blog", href: "https://startdown.io/blog" },
                                    { label: "Careers", href: "https://startdown.io/careers" },
                                    { label: "Contact", href: "contact" }
                                ]
                            },
                            {
                                title: "Legal",                                items: [
                                    { label: "Privacy Policy", href: "https://startdown.io/privacy" },
                                    { label: "Terms of Service", href: "https://startdown.io/terms" },
                                    { label: "Compliance", href: "https://startdown.io/compliance" },
                                    { label: "Cookie Settings", href: "https://startdown.io/cookies" }
                                ]
                            }
                        ]}
                        copyrightText="© 2025 StartDown. All rights reserved. Invest with confidence."
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
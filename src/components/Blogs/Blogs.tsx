import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Blogs.css";

const Blogs = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const blogs = [
    {
      id: 1,
      link: "https://dev.to/dainyjose/edge-to-edge-styling-in-react-native-on-android-15-2ihd",
      title: "Edge-to-Edge Styling in React Native on Android 15",
      description:
        "Google’s Android 15 pushes developers toward edge-to-edge design, requiring apps to extend content behind status and navigation bars. In React Native, default layout padding may cause unwanted spacing. This guide shows how to enable immersive layouts, style system bars, and apply quick fixes. ",
      time: "3 min read",
      topic: "Edge-to-Edge UI",
      tags: "React Native, Android, UI",
    },
    {
      id: 2,
      link: "https://dev.to/dainyjose/understanding-google-plays-16-kb-page-size-requirement-for-android-apps-phd",
      title:
        "Understanding Google Play’s 16 KB Page Size Requirement for Android Apps",
      description:
        "Starting with Android 15, apps must support 16 KB page sizes for Google Play compliance. This article explains the “what” and “why” behind the requirement. It also walks through ways to test and fix builds that don’t meet this new criterion.",
      time: "3 min read",
      topic: "App Size Compliance",
      tags: "Android, Performance, Mobile",
    },
    {
      id: 3,
      link: "https://dev.to/dainyjose/troubleshooting-16-kb-page-size-issues-2pfe",
      title: "Troubleshooting 16 KB Page Size Issues",
      description:
        "If your app fails the 16 KB page size requirement, this post helps you debug and resolve it. It covers updating Gradle, NDK settings, and target SDK adjustments. Best practices are shared to prevent rejections on Google Play.",
      time: "2 min read",
      topic: "Android Debugging",
      tags: "Android, Debugging, Mobile",
    },
    {
      id: 4,
      link: "https://dev.to/dainyjose/the-life-of-a-react-native-developer-from-code-to-app-store-nnb",
      title: "The Life of a React Native Developer: From Code to App Store",
      description:
        "This article walks through a React Native developer’s workflow, from writing UI components to handling network, performance, and publication. It shows challenges, best practices, and deployment tips.",
      time: "3 min read",
      topic: "Developer Road Map",
      tags: "React Native, Developer Life, Deployment",
    },
    {
      id: 5,
      link: "https://dev.to/dainyjose/setting-up-react-native-expo-bare-typescript-development-environment-on-macos-38hi",
      title:
        "Setting Up React Native (Expo Bare + TypeScript) Development Environment on macOS",
      description:
        "Set up a React Native project using Expo’s bare workflow and TypeScript on macOS. The post guides through installing Node, JDK, Xcode, Pod setup, and essential dev tools. By the end, your environment is ready for mobile development.",
      time: "2 min read",
      topic: "Development Setup",
      tags: "React Native, Expo, TypeScript",
    },
    {
      id: 6,
      link: "https://dev.to/dainyjose/razorpay-integration-in-react-native-with-nodejs-webhooks-and-mongodb-12dd",
      title:
        "Razorpay Integration in React Native with Node.js Webhooks and MongoDB",
      description:
        "Step-by-step guide to integrate Razorpay payments into a React Native app using Node.js backend. Covers order creation, webhook verification, and storing transaction data in MongoDB. Ideal for mobile apps needing secure payment flow.",
      time: "3 min read",
      topic: "Payment Integration",
      tags: "React Native, Node.js, Payments",
    },
    {
      id: 7,
      link: "https://dev.to/dainyjose/git-complete-commands-cheat-sheet-for-developers-96j",
      title: "Git Complete Commands Cheat Sheet for Developers",
      description:
        "A well-organized cheat sheet of Git commands developers use daily. From branching to merges, stash to rebase, this covers essential workflows. Good to keep as a quick reference.",
      time: "2 min read",
      topic: "Git Mastery",
      tags: "Git, Productivity, Tools",
    },
    {
      id: 8,
      link: "https://dev.to/dainyjose/15-must-have-vs-code-extensions-for-react-native-development-2025-5g37",
      title:
        "15 Must-Have VS Code Extensions for React Native Development (2025)",
      description:
        "Boost your dev productivity with these VS Code extensions — from linting, formatting, debugging to UI aids. Each extension includes use cases and installation steps.  ",
      time: "3 min read",
      topic: "VS Code Productivity",
      tags: "React Native, VS Code, Productivity",
    },
  ];

  return (
    <section id="blogs">
      <h5>My Latest Dev.to Posts</h5>
      <h2>Blogs</h2>
      <Swiper
        className="container blogs__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }} // auto slide
      >
        {blogs.map((blog) => (
          <SwiperSlide
            className="blogs_card"
            key={blog.id}
          >
            <span className="blog-topic">{blog.topic}</span>
            <h5 className="blog_title">{blog.title}</h5>
            <p className="blog_description">{blog.description}</p>
            <div className="blog-tags">
              {blog.tags.split(",").map((tag, index) => (
                <span
                  className="blog-hashtag"
                  key={index}
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
            <div className="blog-footer">
              <span>⏱{" " + blog.time}</span>
              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
              >
                Read More →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blogs;

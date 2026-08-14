import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Blogs.css";
import blogs from "../../data/blogs.json";

const Blogs = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <section id="blogs">
      <h5>My Latest Dev.to Posts</h5>
      <h2>Blogs</h2>
      <p className="blogs_subtitle">
        Writing about real-world React Native development challenges, debugging, performance
        optimization, mobile architecture, and deployment workflows.
      </p>
      <Swiper
        className="container blogs__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }} // auto slide
      >
        {blogs.slice(0, 15).map(blog => (
          <SwiperSlide className="blogs_card" key={blog.id}>
            <span className="blog-topic">{blog.topic}</span>
            <h5 className="blog_title">{blog.title}</h5>
            <p className="blog_description">{blog.description}</p>
            <div className="blog-tags">
              {blog.tags.map((tag, index) => (
                <span className="blog-hashtag" key={index}>
                  #{tag.trim()}
                </span>
              ))}
            </div>
            <div className="blog-footer">
              <span>⏱{" " + blog.time}</span>
              <a href={blog.link} target="_blank" rel="noreferrer">
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

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Newsletter from '../../components/Newsletter';
import BlogCard from '../../components/BlogCard';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Using your existing Social Links structure
  const socialLinks = [
    { iconClass: 'ri-twitter-x-line', url: 'https://x.com/rennystrips' },
    { iconClass: 'ri-facebook-fill', url: 'https://www.facebook.com/rennypvtltd' },
    { iconClass: 'ri-linkedin-fill', url: 'https://www.linkedin.com/company/rennystrips/' },
    { iconClass: 'ri-instagram-line', url: 'https://www.instagram.com/rennystrips/' },
  ];

  useEffect(() => {
    const fetchBlogData = async () => {
      window.scrollTo(0, 0);
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/api/blogs/${slug}`);
        setBlog(res.data.data);

        // Fetch Related Posts
        const listRes = await axios.get(`http://localhost:3000/api/blogs`);
        const others = listRes.data.data
          .filter(b => b.slug !== slug)
          .slice(0, 2);
        setRelatedBlogs(others);
      } catch (err) {
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);

  if (loading) return <div className="h-screen flex items-center justify-center font-poppins text-blue text-xl">Loading...</div>;
  if (!blog) return <div className="h-screen flex items-center justify-center font-poppins">Blog not found.</div>;

  return (
    <div className="font-helvetica">
      <div className="flex flex-col items-center font-poppins justify-center px-6 py-16 bg-white">
        
        {/* Title Block - Styling matched to 65px/semibold */}
        <h1 className="text-[65px] text-blue font-semibold text-center leading-tight">
          {blog.title}
        </h1>
        <span className="font-semibold text-center mb-9 mt-2">
          {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
          })}
        </span>

        {/* Main Image - Same w-5xl sizing */}
        <img src={blog.mainImage} alt={blog.title} className="w-5xl rounded-lg" />

        {/* Dynamic Content Area */}
        <div className="px-6 py-16 max-w-5xl">
          
          {/* Intro Paragraph */}
          <p className="mb-5 leading-relaxed text-gray-700">
            {blog.excerpt}
          </p>

          {/* Dynamic Sections Loop */}
          {blog.bodySections?.map((section, index) => (
            <div key={index}>
              {section.type === 'heading' && (
                <h3 className="mt-8 mb-3 text-blue hover:text-blue-800 text-lg font-semibold">
                  {section.content}
                </h3>
              )}

              {section.type === 'paragraph' && (
                <p className="mb-5 leading-relaxed text-gray-700">
                  {section.content}
                </p>
              )}

              {section.type === 'bullet-list' && (
                <ul className="list-disc pl-6 space-y-6 mt-4">
                  {section.listItems.map((item, i) => (
                    <li key={i}>
                      <h4 className="mb-1 text-blue hover:text-blue-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="leading-relaxed text-gray-700">{item.description}</p>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === 'numbered-list' && (
                <ol className="list-decimal pl-6 space-y-6 mt-4">
                  {section.listItems.map((item, i) => (
                    <li key={i}>
                      <h3 className="mb-2 text-blue hover:text-blue-800 text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="mb-5 leading-relaxed text-gray-700">{item.description}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>

        {/* Navigation & Sharing */}
        <div className="border-t w-full pt-6 flex items-center justify-between">
          <Link to="/blogs" className="text-gray-600 hover:text-blue transition font-medium">
            ← Previous
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-gray-600">Share This Post</span>
            {socialLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xl text-gray-600 hover:text-blue-900 transition"
              >
                <i className={item.iconClass} />
              </a>
            ))}
          </div>
        </div>

        {/* Related Posts Section */}
        <div>
          <h1 className="text-xl font-semibold text-blue text-center hover:text-blue-800 m-10">
            Related Posts
          </h1>
          <div className="flex gap-6 items-center justify-center w-4xl rounded-lg shadow-md mb-10">
            {relatedBlogs.map((rel) => (
              <BlogCard
                key={rel._id}
                to={`/blog/${rel.slug}`}
                image={rel.mainImage}
                title={rel.title}
                date={new Date(rel.publishedAt || rel.createdAt).toLocaleDateString()}
                excerpt={rel.excerpt}
              />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-100 w-full flex items-center justify-center mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
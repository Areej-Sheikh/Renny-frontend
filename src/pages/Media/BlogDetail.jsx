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
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${slug}`);
        setBlog(res.data.data);

        // Fetch Related Posts
        const listRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
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

        {/* Title Block */}
        <h1 className="text-4xl md:text-[65px] text-blue font-semibold text-center leading-tight">
          {blog.title}
        </h1>
        <span className="font-semibold text-center mb-9 mt-2">
          {new Date(blog.date || blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
          })}
        </span>

        {/* Main Image */}
        <img src={blog.mainImage} alt={blog.title} className="w-full max-w-5xl rounded-lg" />

        {/* Dynamic Content Area */}
        <div className="px-6 py-16 w-full max-w-5xl">

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

              {/* IMAGE SECTION INTEGRATION - Using your schema's 'image' and 'content' (caption) */}
              {section.type === 'image' && (
                <div className="my-8 flex flex-col items-center">
                  <img src={section.image} alt={section.content || ""} className="rounded-lg max-w-full" />
                  {section.content && <p className="mt-2 text-sm italic text-gray-500 text-center">{section.content}</p>}
                </div>
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

              {/* TABLE SECTION - Integrated into dynamic loop */}
              {section.type === 'table' && section.table && section.table.rows && section.table.rows.length > 0 && (
                <div className="my-12 overflow-x-auto shadow-sm rounded-xl border border-gray-100 font-helvetica">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue text-white">
                        {section.table.headers?.map((header, hIdx) => (
                          <th key={hIdx} className="p-4 font-bold uppercase tracking-wider text-sm border-r border-white/20 last:border-r-0">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-4 text-gray-700 text-base border-r border-gray-100 last:border-r-0">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}


        </div>

        {/* Navigation & Sharing */}
        <div className="border-t w-full pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-4xl rounded-lg shadow-md mb-10">
            {relatedBlogs.map((rel) => (
              <BlogCard
                key={rel._id}
                to={`/blog/${rel.slug}`}
                image={rel.mainImage}
                title={rel.title}
                // Updated date source
                date={new Date(rel.date || rel.publishedAt || rel.createdAt).toLocaleDateString()}
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
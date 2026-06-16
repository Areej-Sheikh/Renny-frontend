import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Newsletter from "../../components/Newsletter";
import PageSpinner from "../../components/PageSpinner.jsx";
import SEO from "../../components/SEO.jsx";
import { API_BASE_URL } from "../../lib/api";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openRelatedIndex, setOpenRelatedIndex] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      window.scrollTo(0, 0);
      setLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/blogs/${slug}`,
        );
        setBlog(res.data.data);

        const listRes = await axios.get(
          `${API_BASE_URL}/api/blogs`,
        );
        const others = listRes.data.data
          .filter((b) => b.slug !== slug)
          .slice(0, 5);
        setRelatedBlogs(others);
      } catch (err) {
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
    console.log(blog);
  }, [slug]);

  if (loading) return <PageSpinner />;
  if (!blog)
    return (
      <div className="h-screen flex items-center justify-center font-helvetica">
        Blog not found.
      </div>
    );

  const headings =
    blog.bodySections
      ?.filter((section) => section.type === "heading")
      .map((section) => section.content) || [];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <>
      <SEO
        title={blog.seoTitle || `Blog | Renny Strips`}
        description={
          blog.seoDescription ||
          "Explore steel industry insights, manufacturing trends, engineering expertise, and industrial updates from Renny Strips."
        }
        keywords={
          blog.seoKeywords ||
          "Renny Strips blog, steel industry insights, manufacturing trends, industrial articles, engineering blogs"
        }
        url={`https://rennystrips.com/blog/${slug}`}
      />
      <div className="font-helvetica bg-white">
        {/* 1. Hero Header */}
        <div className="flex flex-col items-center px-6 pt-16">
          <h1 className="text-4xl md:text-[55px] text-blue font-semibold text-center leading-tight max-w-5xl">
            {blog.title}
          </h1>
          <span className="font-semibold text-center mb-9 mt-2 text-gray-500">
            {new Date(
              blog.date || blog.publishedAt || blog.createdAt,
            ).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <img
            src={blog.mainImage}
            alt={blog.title}
            className="w-full object-cover max-w-5xl rounded-xl shadow-lg"
          />
        </div>

        {/* 2. THREE COLUMN LAYOUT - items-start is critical for sticky behavior */}
        <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT SIDE: Table of Contents */}
          <aside className="hidden lg:block w-1/4 xl:w-1/5 z-100 sticky top-24 pr-6 self-start h-fit">
            <div className="border-l-2 border-gray-100 pl-4">
              <h4 className="font-bold text-blue mb-6 uppercase text-sm tracking-[0.2em]">
                Table Of Contents
              </h4>
              <nav className="flex flex-col gap-4">
                {headings.map((heading, i) => (
                  <a
                    key={i}
                    href={`#${slugify(heading)}`}
                    className="text-gray-500 hover:text-blue-900 hover:font-bold text-sm font-medium transition-all duration-300 ease-in-out hover:translate-x-1"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MIDDLE: Main Content */}
          <main className="w-full lg:w-3/5">
            {blog.excerpt && (
              <p className="mb-8 leading-relaxed text-lg md:text-xl text-gray-800 italic border-l-4 border-blue-900 pl-4">
                {blog.excerpt}
              </p>
            )}

            <div className="space-y-3">
              {blog.bodySections?.map((section, index) => {
                const prevType =
                  index > 0 ? blog.bodySections[index - 1].type : null;
                const isConsecutiveParagraphs =
                  section.type === "paragraph" && prevType === "paragraph";
                const isConsecutiveSubPoints =
                  section.type === "sub-point" && prevType === "sub-point";
                const isParagraphToSubPoint =
                  section.type === "sub-point" && prevType === "paragraph";
                const isSubPointToParagraph =
                  section.type === "paragraph" && prevType === "sub-point";

                let wrapperClass = "";
                if (isConsecutiveParagraphs) {
                  wrapperClass = "!mt-2";
                } else if (isConsecutiveSubPoints) {
                  wrapperClass = "!mt-0";
                } else if (isParagraphToSubPoint) {
                  wrapperClass = "!mt-1";
                } else if (isSubPointToParagraph) {
                  wrapperClass = "!mt-2";
                }

                return (
                  <div key={index} className={wrapperClass}>
                    {/* HEADINGS */}
                    {section.type === "heading" && (
                      <h2
                        id={slugify(section.content)}
                        className="mt-10 text-blue hover:text-blue-900 transition-colors text-xl md:text-2xl font-bold scroll-mt-28 mb-4"
                      >
                        {section.content}
                      </h2>
                    )}

                    {/* SUB HEADING */}
                    {section.type === "sub-heading" && (
                      <h3 className="mt-6 mb-3 text-lg md:text-xl font-semibold text-blue">
                        {section.content}
                      </h3>
                    )}

                    {/* PARAGRAPHS */}
                    {section.type === "paragraph" && (
                      <p className="leading-relaxed text-gray-700 text-base md:text-lg mb-3">
                        {section.content}
                      </p>
                    )}

                    {/* SUB POINT */}
                    {section.type === "sub-point" && (
                      <p className="text-gray-700 text-base md:text-lg mb-1">
                        {section.content}
                      </p>
                    )}

                    {/* Bullet & Numbered Lists */}
                    {(section.type === "bullet-list" ||
                      section.type === "numbered-list") && (
                      <div className="mb-6">
                        {section.type === "bullet-list" ? (
                          <ul className="list-disc ml-6 space-y-4 text-gray-700 text-base md:text-lg">
                            {section.listItems?.map((item, i) => (
                              <li key={i} className="pl-2">
                                {typeof item === "object" ? (
                                  <>
                                    <strong className="text-blue">
                                      {item.title}
                                    </strong>{" "}
                                    {item.descriptions &&
                                    item.descriptions.length > 0 ? (
                                      <div className="space-y-2 mt-2">
                                        {item.descriptions.map((desc, dIdx) => (
                                          <p
                                            key={dIdx}
                                            className="leading-relaxed text-gray-700 text-sm md:text-base"
                                          >
                                            {desc}
                                          </p>
                                        ))}
                                      </div>
                                    ) : (
                                      item.description
                                    )}
                                  </>
                                ) : (
                                  item
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ol className="list-decimal ml-6 space-y-4 text-gray-700 text-base md:text-lg">
                            {section.listItems?.map((item, i) => (
                              <li key={i} className="pl-2">
                                {typeof item === "object" ? (
                                  <>
                                    <strong className="text-blue">
                                      {item.title}
                                    </strong>{" "}
                                    {item.descriptions &&
                                    item.descriptions.length > 0 ? (
                                      <div className="space-y-2 mt-2">
                                        {item.descriptions.map((desc, dIdx) => (
                                          <p
                                            key={dIdx}
                                            className="leading-relaxed text-gray-700 text-sm md:text-base"
                                          >
                                            {desc}
                                          </p>
                                        ))}
                                      </div>
                                    ) : (
                                      item.description
                                    )}
                                  </>
                                ) : (
                                  item
                                )}
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    )}

                    {/* IMAGES */}
                    {section.type === "image" && (
                      <figure className="my-8">
                        <img
                          src={section.url || section.image}
                          alt={section.caption || section.content || ""}
                          className="w-full object-cover rounded-lg shadow-sm"
                        />
                        {(section.caption || section.content) && (
                          <figcaption className="text-center text-sm text-gray-400 mt-2">
                            {section.caption || section.content}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* TABLE */}
                    {section.type === "table" && (
                      <div className="overflow-x-auto my-6">
                        {typeof section.table === "string" ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: section.table }}
                            className="table-auto w-full text-left prose prose-table:border-collapse prose-td:border prose-th:border prose-td:p-2 prose-th:p-2"
                          />
                        ) : Array.isArray(section.table) ? (
                          <table className="min-w-full border-collapse border border-gray-300">
                            <tbody>
                              {section.table.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={
                                    rIdx === 0 ? "bg-gray-100 font-bold" : ""
                                  }
                                >
                                  {Array.isArray(row) ? (
                                    row.map((cell, cIdx) => (
                                      <td
                                        key={cIdx}
                                        className="border border-gray-300 px-4 py-2"
                                      >
                                        {cell}
                                      </td>
                                    ))
                                  ) : (
                                    <td className="border border-gray-300 px-4 py-2">
                                      {JSON.stringify(row)}
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : section.table &&
                          typeof section.table === "object" &&
                          section.table.rows ? (
                          <table className="min-w-full border-collapse border border-gray-300">
                            {section.table.headers && (
                              <thead className="bg-gray-100">
                                <tr>
                                  {section.table.headers.map((h, i) => (
                                    <th
                                      key={i}
                                      className="border border-gray-300 px-4 py-2 text-left"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                            )}
                            <tbody>
                              {section.table.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {Array.isArray(row) ? (
                                    row.map((cell, cIdx) => (
                                      <td
                                        key={cIdx}
                                        className="border border-gray-300 px-4 py-2"
                                      >
                                        {cell}
                                      </td>
                                    ))
                                  ) : (
                                    <td className="border border-gray-300 px-4 py-2">
                                      {JSON.stringify(row)}
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : section.content ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                            className="table-auto w-full text-left prose prose-table:border-collapse prose-td:border prose-th:border prose-td:p-2 prose-th:p-2"
                          />
                        ) : (
                          <div className="p-4 border border-dashed border-gray-300 text-gray-500 text-center">
                            Table data is empty or invalid.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </main>

          {/* RIGHT SIDE: Related Posts */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 static lg:sticky top-24 self-start">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 border-b pb-2 text-sm uppercase tracking-wider">
                Recent Blogs
              </h4>
              <div className="flex flex-col gap-2">
                {relatedBlogs.map((rel, idx) => (
                  <div
                    key={rel._id}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <button
                      onClick={() =>
                        setOpenRelatedIndex(
                          openRelatedIndex === idx ? null : idx,
                        )
                      }
                      className="w-full py-3 text-left flex justify-between items-center text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    >
                      <span className="truncate pr-2">{rel.title}</span>
                      <span className="text-gray-400">
                        {openRelatedIndex === idx ? "−" : "+"}
                      </span>
                    </button>

                    {openRelatedIndex === idx && (
                      <div className="pb-4 animate-in fade-in slide-in-from-top-1 duration-300">
                        <Link to={`/blog/${rel.slug}`} className="group block">
                          <img
                            src={rel.mainImage}
                            alt=""
                            className="w-full h-32 object-cover rounded-md mb-2 shadow-sm group-hover:opacity-90 transition-opacity"
                          />
                          <p className="text-xs font-bold text-blue group-hover:underline">
                            Read Article →
                          </p>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-20 bg-gray-100">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

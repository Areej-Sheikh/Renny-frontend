import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import BlogBanner from '../../assets/BlogBanner.png';
import BlogCard from '../../components/BlogCard.jsx';

import blog1 from '../../assets/blog1.jpeg';
import blog2 from '../../assets/blog2.jpeg';
import blog3 from '../../assets/blog3.jpeg';
import blog4 from '../../assets/blog4.jpeg';
import blog5 from '../../assets/blog5.jpg';
import blog6 from '../../assets/blog6.jpg';
import blog7 from '../../assets/blog7.jpg';
import blog8 from '../../assets/blog8.jpg';
import blog9 from '../../assets/blog9.jpeg';
import blog10 from '../../assets/blog10.jpg';
import blog11 from '../../assets/blog11.png';
import blog12 from '../../assets/blog12.png';
import blog13 from '../../assets/blog13.png';
import blog14 from '../../assets/blog14.jpg';
import blog15 from '../../assets/blog15.jpeg';
import blog16 from '../../assets/blog16.jpg';
import blog17 from '../../assets/blog17.jpg';
import blog18 from '../../assets/blog18.jpg';
import blog19 from '../../assets/blog19.jpg';
import blog20 from '../../assets/blog20.jpg';
import blog21 from '../../assets/blog21.jpg';
import blog22 from '../../assets/blog22.jpg';

const Blogs = () => {
  return (
    <div className="font-helvetica ">
      <Navbar />
      <div>
        <img
          src={BlogBanner}
          alt="Blog Banner"
          className="w-full h-40 object-cover mb-4"
        />
        <div className="bg-gray-100 px-6 py-16 font-helvetica">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              to="/kwikstage-scaffolding/"
              image={blog1}
              alt="Kwikstage Scaffolding"
              title="Kwikstage Scaffolding Expert Insights for Better Construction Performance"
              date="December 9, 2025"
              excerpt="Construction projects demand dependable systems that can adapt to diverse site challenges while ensuring productivity and worker safety. Kwikstage Scaffolding has emerged as one of the most reliable modular choices in modern construction."
            />

            {/* Blog 2 */}
            <BlogCard
              to="/scaffolding-formworks-innovation/"
              image={blog2}
              alt="Scaffolding and Formworks Innovation"
              title="Scaffolding and Formworks Frames Innovations Driving Faster and Safer Building"
              date="November 29, 2025"
              excerpt="Construction projects are getting more demanding as structures rise higher, timelines shrink, and safety expectations grow stronger."
            />

            {/* Blog 3 */}
            <BlogCard
              to="/scaffolding-steel-props-jacks/"
              image={blog3}
              alt="Steel Props and Jacks"
              title="Ultimate Guide to Scaffolding Steel Props and Jacks for Strength and Safety"
              date="November 18, 2025"
              excerpt="Reliable propping systems can often make the difference between a smooth operation and one fraught with instability."
            />

            {/* Blog 4 */}
            <BlogCard
              to="/wire-rod-manufacturers-india/"
              image={blog4}
              alt="Wire Rod Manufacturers"
              title="Explore the Leading Wire Rod Manufacturers in India for Superior Industrial Applications"
              date="November 14, 2025"
              excerpt="Industry professionals look beyond availability — they seek precision in manufacturing and steel solutions that genuinely perform."
            />
            {/* Blog 5 */}
            <BlogCard
              to="/top-ringlock-scaffolding-manufacturer/"
              image={blog5}
              alt=""
              title="Top Qualities to Look for in a Reliable Ringlock Scaffolding Manufacturer in India"
              date="October 23, 2025"
              excerpt="When it comes to selecting a dependable Ringlock Scaffolding Manufacturer in India, the decision goes far beyond just comparing prices or delivery timelines. The right manufacturer ensures your construction project stands on a foundation of safety, strength, and sustainability. "
            />
            {/* Blog 6 */}
            <BlogCard
              to="/square-hollow-pipe-manufacturers"
              image={blog6}
              alt=""
              title="GI Square Hollow Pipe Manufacturers in India Providing Durable Solutions for Industries"
              date="October 22, 2025"
              excerpt="GI Square Hollow Pipe Manufacturers in India play a pivotal role in supplying high-quality steel solutions that meet the demanding requirements of multiple industries."
            />

            {/* Blog 7 */}
            <BlogCard
              to="/forging-billets"
              image={blog7}
              alt=""
              title="Renny Forging Billets: Precision-Engineered for Performance"
              date="September 24, 2025"
              excerpt="Renny Strips stands among the foremost manufacturers of forging billets in India, delivering high-performance billets and blooms that meet the stringent demands of global industries. "
            />

            {/* Blog 8 */}
            <BlogCard
              to="/ltd-design-centre"
              image={blog8}
              alt=""
              title="Renny Strips Ltd Design Centre: One of India’s Key Hubs for Customized Green Steel Solutions"
              date="September 22, 2025"
              excerpt="Renny Strips Ltd stands among a select league of globally driven Indian structural steel manufacturers with complete vertical integration from hot rolling and forging to scaffolding and formwork systems, tube forming & precision fabrication."
            />

            {/* Blog 9 */}
            <BlogCard
              to="/scaffolding-and-formwork-company"
              image={blog9}
              alt=""
              title="Trusted Scaffolding and Formwork Company in India Delivering Safety and Strength"
              date="September 16, 2025"
              excerpt="Renny Strips stands out as a leading Scaffolding and Formwork Company in India, committed to providing robust construction solutions that prioritize both safety and structural strength. "
            />

            {/* Blog 10 */}
            <BlogCard
              to="/the-right-erw-pipe-manufacturer"
              image={blog10}
              alt=""
              title="How to Choose the Right ERW Pipe Manufacturer in India"
              date="August 28, 2025"
              excerpt="When it comes to construction, infrastructure, oil & gas, and industrial projects, ERW (Electric Resistance Welded) pipes play a vital role. They are used for structural strength, fluid transportation, and precision engineering. With so many ERW pipe manufacturers in India, selecting the right partner can feel overwhelming."
            />

            {/* Blog 11 */}
            <BlogCard
              to="/building-a-strong-sustainable-future"
              image={blog11}
              alt=""
              title="India Rising: Renny’s Role in Building a Strong, Sustainable Future"
              date="August 22, 2025"
              excerpt="India is still young, vibrant, and evolving—its ambitions stretching as far as its horizons. Every day, the nation grows stronger, driven by an unshakable vision of progress."
            />

            {/* Blog 12 */}
            <BlogCard
              to="/best-scaffolding-formwork-manufacturers"
              image={blog12}
              alt=""
              title="Top Qualities That Set the Best Scaffolding & Formwork Manufacturers in India Apart"
              date="August 20, 2025
"
              excerpt="Spend even a day on a construction site where deadlines are slipping, and you’ll quickly realize, poor scaffolding can bring everything to a halt. Shaky joints, missing parts, unstable platforms, it’s not just frustrating, it’s risky."
            />

            {/* Blog 13 */}
            <BlogCard
              to="/gi-pipes-tubes"
              image={blog13}
              alt=""
              title="Renny GI Pipes & Tubes: Engineered for India’s Rising Infrastructure Demands"
              date="July 28, 2025"
              excerpt="Renny, one of India’s leading manufacturers of GI Pipes and Tubes, is driving the future of infrastructure with precision-engineered solutions that deliver unmatched strength, corrosion resistance, and longevity."
            />

            {/* Blog 14 */}
            <BlogCard
              to="/key-narrow-hr-coil-manufacturing"
              image={blog14}
              alt=""
              title="Renny: Key Narrow HR Coil Manufacturing in India"
              date="July 17, 2025"
              excerpt="In today’s dynamic industrial landscape, the demand for high-performance steel coils is evolving rapidly. Industries are no longer satisfied with basic functionality—they require materials that offer precision, strength and adaptability to meet modern design complexities and production efficiencies. "
            />

            {/* Blog 15 */}
            <BlogCard
              to="/ms-black-round-pipes"
              image={blog15}
              alt=""
              title="Renny MS Black Round Pipes – Powering the Backbone of New Age Construction"
              date="July 9, 2025"
              excerpt="Renny Strips Ltd. stands at the forefront of steel innovation, proudly leading the MS Black Pipe manufacturing sector in India. With decades of expertise and a relentless focus on quality, Renny is one of North India’s most prominent integrated steel manufacturers, with in-house production facilities ensuring consistency, strength, and timely supply."
            />

            {/* Blog 16 */}
            <BlogCard
              to="/global-powerhouse-in-scaffolding-formwork"
              image={blog16}
              alt=""
              title="India’s Rise as a Global Powerhouse in Scaffolding & Formwork Sourcing"
              date="July 5, 2025
"
              excerpt="Renny Strips is a leading manufacturer of scaffolding and formwork systems in India, driving the industry’s growth with world-class engineering, integrated manufacturing, and a global outlook."
            />

            {/* Blog 17 */}
            <BlogCard
              to="/precision-engineering-for-structural-excellence"
              image={blog17}
              alt=""
              title="Precision Engineering for Structural Excellence"
              date="June 24, 2025"
              excerpt="Renny: India’s Trusted Partner for High-Performance Machine Components in Scaffolding & Formwork Systems. In today’s high-speed construction landscape, the demand for durable, accurate & adaptable machine components more critical than ever. Whether it’s a metro tunnel in progress or a multi-story commercial tower rising its foundations, precision components form the hidden strength behind every successful formwork and  structure."
            />

            {/* Blog 18 */}
            <BlogCard
              to="/forging-billets-precision-engineered"
              image={blog18}
              alt=""
              title="Renny Forging Billets: Precision-Engineered for Performance"
              date="June 14, 2025"
              excerpt="Renny Strips stands among the foremost manufacturers of forging billets in India, delivering high-performance billets and blooms that meet the stringent demands of global industries. Our premium-grade billets are engineered for exceptional forgeability, strength, and structural integrity—making them the preferred choice across sectors such as automotive, railways, construction, oil & gas & heavy engineering."
            />

            {/* Blog 19 */}
            <BlogCard
              to="/wire-rods-precision-performance"
              image={blog19}
              alt=""
              title="Renny Wire Rods: Precision, Performance & Trust — Engineered for the Future of Industry"
              date="May 16, 2025"
              excerpt="In today’s rapidly evolving industrial ecosystem, wire rods play a pivotal role as a foundational material across sectors like automotive, construction, engineering, and electricals. The demand for wire rods is driven by increasing production volumes, tighter tolerance requirements, greater mechanical consistency and cost-efficiency across manufacturing lines."
            />

            {/* Blog 20 */}
            <BlogCard
              to="/trends-and-market-dynamics-of-erw-pipes"
              image={blog20}
              alt=""
              title="Trends and Market Dynamics of ERW Pipes in India: Renny Strips Leading the Way as one of best Manufacturer of ERW Pipes in India"
              date="May 8, 2025"
              excerpt="The Electric Resistance Welded (ERW) pipes industry in India is undergoing remarkable growth and evolution, propelled by significant infrastructure investments, innovative manufacturing practices, and dynamic market demands. "
            />

            {/* Blog 21 */}
            <BlogCard
              to="/revolutionizing-the-construction-industry"
              image={blog21}
              alt=""
              title="Renny: Revolutionizing The Construction Industry"
              date="April 24, 2025"
              excerpt="India’s Scaffolding & Formwork sector is experiencing a significant transformation in 2025, propelled by Technological Advancements, Sustainable Practices & a Surge in Infrastructure & Housing Projects."
            />

            {/* Blog 22 */}
            <BlogCard
              to="/global-trends-in-erw-ms-black-pipes"
              image={blog22}
              alt=""
              title="Global Trends in ERW MS Black Pipes – Renny Strips, India’s Leading Manufacturer, Powering Progress & Redefining Structural Excellence"
              date="April 17, 2025"
              excerpt="As the infrastructure, construction & manufacturing sectors surge globally, the demand for high-quality ERW MS (Mild Steel) Black Pipes is stronger than ever. From skyscrapers and industrial sheds to pipelines and machinery, these pipes are the backbone of countless engineering and structural applications. "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

{
  /* 
 1 <Link to="/kwikstage-scaffolding/" ></Link>

 2 <Link to="/scaffolding-formworks-innovation/" ></Link>

 3 <Link to="/scaffolding-steel-props-jacks/" ></Link>

 4 <Link to="/wire-rod-manufacturers-india/" ></Link>

 5 <Link to="/top-ringlock-scaffolding-manufacturer/" ></Link>

 6 <Link to="/square-hollow-pipe-manufacturers" ></Link>
  
 7 <Link to="/forging-billets" ></Link>
  
 8 <Link to="/ltd-design-centre" ></Link>
  
 9 <Link to="/scaffolding-and-formwork-company" ></Link>
  
 10 <Link to="/the-right-erw-pipe-manufacturer" ></Link>
  
 11 <Link to="/building-a-strong-sustainable-future" ></Link>
  
 12 <Link to="/best-scaffolding-formwork-manufacturers" ></Link>
  
 13 <Link to="/gi-pipes-tubes" ></Link>
  
 14 <Link to="/key-narrow-hr-coil-manufacturing" ></Link>
  
 15 <Link to="/ms-black-round-pipes" ></Link>
  
  16 <Link to="/global-powerhouse-in-scaffolding-formwork" ></Link>
  
  17 <Link to="/precision-engineering-for-structural-excellence" ></Link>
  
  18 <Link to="/forging-billets-precision-engineered" ></Link>
  
 19 <Link to="/wire-rods-precision-performance" ></Link>
  
  20 <Link to="/trends-and-market-dynamics-of-erw-pipes" ></Link>
  
  21 <Link to="/revolutionizing-the-construction-industry" ></Link>
  
  22<Link to="/global-trends-in-erw-ms-black-pipes"></Link> */
}

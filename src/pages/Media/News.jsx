
import news from '../../assets/news.png';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpeg';
import news3 from '../../assets/news3.png';
import news4 from '../../assets/news4.jpg';
import news5 from '../../assets/news5.jpg';
import news6 from '../../assets/news6.jpeg';
import news7 from '../../assets/news7.png';
import news8 from '../../assets/news8.png';
import news9 from '../../assets/news9.jpg';
const News = () => {
  const newsData = [
    {
      id: 1,
      title:
        'Renny Strips reshapes construction with sustainable scaffolding and formwork solutions',
      desc: 'Renny Strips is driving India’s urban revolution on a sustainable basis by providing cutting-edge scaffolding and formwork solutions that prioritise safety, reduce carbon footprint, and enable smart vertical growth across the country.',
      link: 'https://aceupdate.com/renny-strips-reshapes-construction-with-sustainable-scaffolding-and-formwork-solutions/',
      img: news1,
    },
    {
      id: 2,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security. Steel scaffolding offers a safe working platform at heights, enhances accessibility, and facilitates free movement of material and equipment.',
      link: 'https://odishabiznewz.com/news/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news2,
    },
    {
      id: 3,
      title:
        'Renny Strips Sets New Benchmarks in Scaffolding Safety and Reliability',
      desc: 'Steel formwork and scaffolding are the cornerstones of contemporary construction, infusing strength, efficiency, and security.',
      link: 'https://businessnewsthisweek.com/business/renny-strips-sets-new-benchmarks-in-scaffolding-safety-and-reliability/',
      img: news3,
    },
    {
      id: 4,
      title:
        'Renny Strips leads sustainable manufacturing with 22 MW solar power plant',
      desc: "Renny Strips, India's exclusive manufacturer of customised green steel solutions for the scaffolding and formwork industry, has installed a cutting-edge 22 MW solar power plant across 100 acres.",
      link: 'https://www.projectstoday.com/News/Renny-Strips-leads-sustainable-manufacturing-with-22-MW-solar-power-plant',
      img: news4,
    },
    {
      id: 5,
      title: 'Renny Strips Powers Ahead with 22MW Solar Energy Initiative',
      desc: 'Renny Strips Pvt. Ltd., with its specialized expertise in fabrication and forging, stands as India’s exclusive manufacturer of end-to-end customized green steel solutions for the scaffolding and formwork industry.',
      link: 'https://electronicsera.in/renny-strips-powers-ahead-with-22mw-solar-energy-initiative/',
      img: news5,
    },
    {
      id: 6,
      title: 'First-ever 1000 MW thermal power plant commissioned in India',
      desc: 'First-ever 1000 MW thermal power plant commissioned in India at Tamnar.',
      link: 'https://pdf.equipmentindia.com//Monthly-Edition/PDF-version/January-2025/index.html',
      img: news6,
    },
    {
      id: 7,
      title:
        'Rennystrips to Showcase Premium Solutions at Bauma Conexpo India 2024',
      desc: 'Rennystrips Pvt. Ltd. announced its participation in Bauma Conexpo India 2024, taking place from December 11–14 at the India Expo Centre, Greater Noida.',
      link: 'https://gyanmuse.com/rennystrips-to-showcase-premium-solutions-at-bauma-conexpo-india-2024/',
      img: news7,
    },
    {
      id: 8,
      title: 'Renny Strips Shines at bauma CONEXPO INDIA',
      desc: 'Renny Strips, a pioneer in the building material industry, proudly participated in bauma CONEXPO INDIA.',
      link: 'https://www.apnnews.com/renny-strips-shines-at-bauma-conexpo-india/',
      img: news8,
    },
    {
      id: 9,
      title: 'Renny Strips Shines at bauma CONEXPO INDIA',
      desc: 'Held from 11th to 14th December at the India Expo Centre, Greater Noida, bauma CONEXPO INDIA is a vital platform for innovation and global industry connections.',
      link: 'https://www.apnnews.com/renny-strips-shines-at-bauma-conexpo-india/',
      img: news9,
    },
  ];

  return (
    <div className="font-helvetica ">
      <div>
        <img
          src={news}
          alt="News Banner"
          className="w-full h-40 object-cover mb-4"
        />
      </div>
      <div className="bg-gray-100 px-6 py-16 font-helvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow group flex flex-col"
            >
              <img
                src={news.img}
                alt={news.title || `News ${index + 1}`}
                className="w-full h-40 object-cover mb-4 rounded"
              />

              {news.title && (
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              )}

              {news.desc && (
                <p className="text-gray-600 text-sm flex-grow">{news.desc}</p>
              )}

              {news.link && (
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-medium text-blue group-hover:text-blue-800 transition"
                >
                  Read More →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

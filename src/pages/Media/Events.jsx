import { motion, useScroll, useTransform } from 'framer-motion';
import EventSection from '../../components/EventSection';

import events1 from '../../assets/events1.mp4';
import events2 from '../../assets/events2.mp4';
import events3 from '../../assets/events3.mp4';
import events4 from '../../assets/events4.mp4';
import banner from '../../assets/Image.webp';

const eventsData = [
  {
    id: 1,
    title: 'Renny @ bauma CONEXPO INDIA 2024',
    date: 'December 21, 2024',
    video: events1,
    desc: `Renny marked a strong presence at bauma CONEXPO INDIA 2024 by unveiling 
      its latest innovations in scaffolding and formwork systems. The event brought 
      together industry leaders, engineers, and construction professionals from 
      across the country. Live demonstrations, expert discussions, and interactive 
      showcases highlighted Renny’s commitment to safety, sustainability, and 
      future-ready infrastructure solutions.`,
  },
  {
    id: 2,
    title: 'Strengthening Tomorrow',
    date: 'October 19, 2024',
    video: events2,
    desc: `The “Strengthening Tomorrow” initiative, organized with the Bureau of 
      Indian Standards, focused on quality benchmarks and evolving construction 
      standards. The session encouraged collaboration, knowledge exchange, and 
      alignment with national safety regulations, reinforcing Renny’s dedication to 
      delivering reliable and compliant construction solutions.`,
  },
  {
    id: 3,
    title: 'World Nature Conservation Day',
    date: 'October 19, 2024',
    video: events3,
    desc: `On World Nature Conservation Day, Renny emphasized environmental 
      responsibility through sustainability initiatives and awareness programs. 
      Employees actively participated in eco-friendly activities, reflecting the 
      company’s belief that innovation and growth must coexist with environmental 
      stewardship and responsible manufacturing practices.`,
  },
  {
    id: 4,
    title: 'Diwali Celebration',
    date: 'October 20, 2025',
    video: events4,
    desc: `The Diwali celebration at Renny brought employees together in a vibrant 
      display of culture, unity, and gratitude. Traditional décor, festive 
      activities, and shared moments created a warm atmosphere, strengthening team 
      bonds and reinforcing Renny’s people-first workplace culture.`,
  },
];

const Events = () => {
  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <motion.div className="font-helvetica overflow-hidden">
      {/* Banner */}
      <motion.div
        style={{ y: bannerY }}
        className="relative h-[70vh] w-full overflow-hidden"
      >
        <img
          src={banner}
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0" />
        <motion.h1 className="absolute bottom-24 left-20 text-white text-5xl font-bold tracking-wide">
          EVENTS
        </motion.h1>
      </motion.div>

      {/* Event Sections */}
      {eventsData.map((event, idx) => (
        <EventSection key={event.id} event={event} index={idx} />
      ))}
    </motion.div>
  );
};

export default Events;

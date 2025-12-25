import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import events from '../../assets/Events.png';
import events1 from '../../assets/events1.mp4';
import events2 from '../../assets/events2.mp4';
import events3 from '../../assets/events3.mp4';
import events4 from '../../assets/events4.mp4';
const Events = () => {
  const eventsData = [
    {
      id: 1,
      video: events1,
      title: 'Renny @ bauma CONEXPO INDIA 2024',
      desc: 'Renny unveiled its latest scaffolding and formwork innovations.',
      date: 'December 21, 2024',
    },
    {
      id: 2,
      video: events2,
      title: 'Strengthening Tomorrow',
      desc: 'The Bureau of Indian Standards (BIS) organized an exposure.',
      date: 'October 19, 2024',
    },
    {
      id: 3,
      video: events3,
      title: 'World Nature Conservation Day',
      desc: 'At Renny, our dedication to sustainability and eco-friendly practices.',
      date: 'October 19, 2024',
    },
    {
      id: 4,
      video: events4,
      title: 'Diwali Celebration',
      desc: 'Diwali celebration at Renny.',
      date: 'October 20, 2025',
    },
  ];

  return (
    <div className="font-helvetica ">
      <Navbar />
      <div>
        <img
          src={events}
          alt="Events Banner"
          className="w-full h-40 object-cover mb-4"
        />
      </div>
      <div className="bg-gray-100 px-6 py-16 font-helvetica">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {eventsData.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Video */}
              <video
                src={event.video}
                controls
                className="w-full h-48 object-fill "
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>

                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>

                <p className="text-sm text-gray-600 flex-grow">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;

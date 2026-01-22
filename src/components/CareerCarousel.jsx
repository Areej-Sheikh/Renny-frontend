import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const successStories = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1699899657680-421c2c2d5064?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 2,
    name: 'John Miller',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 3,
    name: 'Emily Carter',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1623184662645-73d7fcb58595?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 5,
    name: 'Sophia Wilson',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1689775381221-c9227210cae5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 6,
    name: 'Daniel Anderson',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1746194060000-3615371d42bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1665224752123-a2ea29dddcb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 8,
    name: 'Chris Thompson',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1765438869208-dbbd863334bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 9,
    name: 'Ava Robinson',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1740153204601-b2baf50a3f46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
  {
    id: 10,
    name: 'Ethan Walker',
    role: 'Team Member · Early Career Professional',
    image:
      'https://images.unsplash.com/photo-1757620765404-a1ee66df5e27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid praesentium sunt autem eligendi doloremque ipsum perferendis repellendus vitae maxime! Voluptatum consequatur minima numquam a inventore dolorum ad hic dolores enim ducimus. Repellat, beatae! Veniam aliquid quae sed, neque ea voluptas tempore tempora ratione necessitatibus dicta iusto, error nostrum, similique quos!',
  },
];

const CareerCarousel = () => {
  return (
    <section className="bg-[#eff6ff] h-3xl  py-20">
      <div className=" mx-auto px-6">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pb-16"
        >
          {successStories.map(story => (
            <SwiperSlide key={story.id}>
              {/* Card */}
              <div className="flex flex-col md:flex-row bg-blue text-white rounded-3xl shadow-lg overflow-hidden max-w-5xl mx-auto h-[420px]">
                {/* Image */}
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-8 md:p-10 relative">
                  {/* Quote Icon */}
                  <span className="absolute top-6 right-8 text-[#292c44] text-7xl opacity-10 leading-none">
                    “
                  </span>

                  <p className="text-lg text-white leading-relaxed mb-8">
                    {story.quote}
                  </p>

                  <div>
                    <h4 className="font-semibold text-[#292c44] text-lg">
                      {story.name}
                    </h4>
                    <p className="text-sm text-white">{story.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CareerCarousel;

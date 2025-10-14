import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css";

const testimonials = [
  { quote: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.", name: "Diksha S", course: "Business Intelligence (BI)", link: "#" },
  { quote: "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.", name: "Chethan B", course: "Go (golang) course", link: "#" },
  { quote: "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.", name: "Batchu K", course: "Java course", link: "#" },
  { quote: "The course structure is amazing and helped me land a better job.", name: "Riya M", course: "Python course", link: "#" },
  { quote: "I could switch my career to data science successfully after taking this course.", name: "Amit K", course: "Data Science course", link: "#" }
];

// ✅ Custom arrow components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow next`}
      style={{ ...style }}
      onClick={onClick}
    >
      ›
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      ‹
    </button>
  );
}

export default function TestimonialCarousel() {
  const settings = {
  dots: false,
  infinite: false,   // ❗ stop looping
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } }
  ]
};


  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">
        See what others are achieving through learning
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-slide">
            <div className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <a href={t.link} className="testimonial-course">
                    View this {t.course}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

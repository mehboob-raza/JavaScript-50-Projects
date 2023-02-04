const testimonialContainer = document.querySelector(".testimonial-container");

const testimonial = document.querySelector(".testimonial");

const userImage = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const userRole = document.querySelector(".role");

const testimonials = [
  {
    name: "john",
    role: "marketig",
    img: "https://randomuser.me/api/portraits/men/26.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam cupiditate culpa, obcaecati quas tenetur omnis, officia facere aspernatur ex, reprehenderit rem? Odio, ab ullam cumque porro eveniet officia vero.",
  },

  {
    name: "wicky",
    role: "DB",
    img: "https://randomuser.me/api/portraits/men/16.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam cupiditate culpa, obcaecati quas tenetur omnis, officia facere aspernatur ex, reprehenderit rem? Odio, ab ullam cumque porro eveniet officia vero.",
  },

  {
    name: "jerry",
    role: "Programmer",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam cupiditate culpa, obcaecati quas tenetur omnis, officia facere aspernatur ex, reprehenderit rem? Odio, ab ullam cumque porro eveniet officia vero.",
  },

  {
    name: "johnii",
    role: "Doctor",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam cupiditate culpa, obcaecati quas tenetur omnis, officia facere aspernatur ex, reprehenderit rem? Odio, ab ullam cumque porro eveniet officia vero.",
  },
  {
    name: "qwerty",
    role: "Engineer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam cupiditate culpa, obcaecati quas tenetur omnis, officia facere aspernatur ex, reprehenderit rem? Odio, ab ullam cumque porro eveniet officia vero.",
  },
];

var idx = 1;

function updateTestimonial() {
    // console.log(idx < testimonials.length - 1)

  if (idx < testimonials.length - 1) {
    const { name, role, img, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = img;
    userName.innerHTML = name;
    userRole.innerHTML = role;
    idx++;
  }
  else{
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);

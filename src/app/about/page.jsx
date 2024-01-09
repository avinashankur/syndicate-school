import styles from "./about.module.scss";
import Image from "next/image";
import AboutCard from "../../../components/AboutCard/AboutCard";

const About = () => {
  return (
    <div className="container">
      <h1 className={styles.heading}>About</h1>
      <div className={styles.flex}>
        <AboutCard
          image="/hero1.jpg"
          title="the school"
          statement="Syndicate National School, established by visionary leader Suin Singh in 1985, is the epitome of educational excellence in Northern India. With over three decades of nurturing young minds, the school excels in providing a holistic learning experience.
          The state-of-the-art facilities include a well-equipped sports complex, modern canteen, nursery to 12th-grade classes, air-conditioned classrooms, and subject-specific labs. The dedicated faculty fosters academic brilliance and character development, ensuring a balanced growth for every student. Emphasizing community service and extracurricular activities, the school creates compassionate and socially-conscious individuals. Syndicate National School takes pride in its cherished legacy, where learning is a joyous journey and students find their true potential amidst an environment of love and care."
        />
        <AboutCard
          image="/jesus.jpg"
          title="the chairman"
          statement="Welcome to Syndicate National School, an epitome of excellence and elegance. As Chairman, I lead an institution dedicated to nurturing brilliant minds and future leaders. Our holistic approach blends academics, sports, arts, and character-building. Our esteemed faculty, coupled with top-notch infrastructure, ensures a superior learning experience. We instill values of integrity, empathy, and resilience, fostering compassionate global citizens. With a diverse and inclusive community, we celebrate unity in differences. Join us in shaping a brighter future for our children, our nation, and the world. Together, let's embark on a journey of knowledge, growth, and limitless possibilities."
          name="- Late. Jesus Singh"
        />
        <AboutCard
          image="/manager.jpg"
          title="the manager"
          statement="Welcome to Syndicate National School, where beauty meets intellect. As the Manager, I take pride in leading an institution that values compassion and excellence. Our school is a haven for nurturing young minds, encouraging them to explore their potential in academics, arts, sports, and co-curricular activities. We believe in holistic development, fostering not just bright minds but also kind hearts. Our dedicated faculty and state-of-the-art facilities ensure a superior learning experience. At Syndicate National School, we celebrate diversity and promote a culture of empathy and mutual respect. Join us in creating a harmonious world, one thoughtful step at a time."
          name="- Riya Singhania"
        />
        <AboutCard
          image="/treasure.jpg"
          title="the treasure"
          statement="Hey there! Welcome to Syndicate National School, where elegance meets excellence. As a board member and the largest shareholder, I take pride in our commitment to nurturing young minds to become future leaders and scholars. With a passion for music and top-notch facilities, join us on this extraordinary journey of learning and growth."
          name="- Jahnvi Roy"
        />
        <AboutCard
          image="/samurai.jpg"
          title="the principal"
          statement="Welcome to Syndicate National School, where the spirit of a warrior meets the pursuit of knowledge. As Principal Toyotomi Hideyoshi, I bring the discipline of a black belt and the wisdom of a samurai to lead this elegant institution. We believe in empowering our students with the virtues of courage, perseverance, and respect, fostering not only academic excellence but also character development. Our dedicated faculty and state-of-the-art facilities provide a conducive environment for growth and learning. Join us in embracing the way of the warrior-scholar, as we forge future leaders who will conquer challenges and make a positive impact on the world."
          name="- Toyotomi Hideyoshi"
        />
        <AboutCard
          image="/chef.jpg"
          title="the chef"
          statement="
          Namaste, dear food aficionados of Syndicate National School! Get ready to embark on a delicious culinary adventure with Chef Golu Roy at the helm of our delightful canteen. As the mastermind behind the flavors that ignite joy in every bite, my secret ingredients are love, laughter, and a sprinkle of humor. From lip-smacking treats to wholesome meals, I'm dedicated to nourishing both body and soul. With a heart full of love for cooking and a knack for connecting with students, I assure you an unforgettable gastronomic journey. So, grab your forks, and let's tickle those taste buds together! Bon appétit!"
          name="- Golu Roy"
        />
      </div>
    </div>
  );
};

export default About;

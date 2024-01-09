import styles from "./page.module.scss";
import Image from "next/image";
import heroOne from "/public/hero1.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container" id="home-page">
      <div className="hero-school-credential">
        <h1 className="w-full">SYNDICATE NATIONAL SCHOOL</h1>
        <p>
          Dholakpur, New Delhi, 400154, +91 01586 4431 5465,{" "}
          <Link href="mailto:syndicatenational@info.com">
            syndicatenational@info.com
          </Link>
        </p>
      </div>
      <div className="hero-images">
        <Image src={heroOne} fill></Image>
      </div>
      <marquee behavior="" direction="" className="">
        <Link href="/admission">Admission for 2023-2024 Open. Apply Now.</Link>
      </marquee>
      <div className={styles.trendingSection}>
        <h3>@Trending Now <span className={styles.hide}>(Click on the text to see full Image)</span></h3>
        <div className={styles.trendingCardHolder}>
          <div>
            <Image src="/trending1.jpg" fill />
            <span>Hajmola Singh awarded for the Code Hacathon 2024. Hajmola has done his primary and higher education from Syndicate National School in the from 2004-2022.
            </span>
          </div>
          <div>
            <Image src="/trending3.jpg" fill />
            <span>Hajmoli Singh awarded for the best Art and Craft design in the year 2023. She has done her higher schooling from Sydicate National School Prayagraj from 2018-2022.
            </span>
          </div>
          <div>
            <Image src="/trending4.jpg" fill />
            <span>Syndicate National School Delhi received an award for being the best school in the Delhi and NCR region. It has crossed its own records from 12 points and all the other school are behind from atleast 40 points.
            </span>
          </div>
          <div>
            <Image src="/trending2.jpg" fill />
            <span>Sakura Chan, of Japan came India exclusively for the education of Sydicate National School and got the Ashok Chakra for cutest girl of the academic year 2023..
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./terms.module.scss";

const termsAndConditions = () => {
  const terms = [
    {
      id: 1,
      title: "Introduction",
      content: "Welcome to the Syndicate National School website. These Terms and Conditions govern your use of our website and outline the terms under which you may access and interact with our services. By accessing or using the website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.",
    },

    {
      id: 2,
      title: "Eligibility",
      content: "Our school website is intended for use by parents or guardians of students enrolled in our nursery to 12th-grade programs. Visitors under the age of 12 must obtain parental consent before using the website.",
    },
    {
      id: 3,
      title: "Accuracy and Updates",
      content: "We strive to provide accurate and up-to-date information on our website. However, we do not warrant the completeness, accuracy, or reliability of any information or content provided herein. The school reserves the right to make changes to the website's content, facilities, and services without prior notice. While we make every effort to keep the website current, some information may be subject to change and may not always reflect real-time updates.",
    },
    {
      id: 4,
      title: "Itellectual Property",
      content: "All content on the website, including text, images, graphics, logos, and other materials, are protected by intellectual property rights owned or licensed by the school. Visitors may not use, reproduce, modify, or distribute any content without prior written consent from the school. Unauthorized use of any materials on the website may violate copyright, trademark, and other laws.",
    },
    {
      id: 5,
      title: "Privacy and Data Protection",
      content: "Our Privacy Policy governs the collection, use, and disclosure of personal information submitted on the website. By using the website, you consent to the practices outlined in our Privacy Policy. We take data protection seriously and employ industry-standard security measures to safeguard your information. However, please be aware that no online platform is entirely secure, and you use the website at your own risk.",
    },
    {
      id: 6,
      title: "Student Enrollment",
      content: "Enrollment in our nursery to 12th-grade programs is subject to meeting admission criteria and availability of seats. The school reserves the right to accept or decline any application. Admission is granted based on merit, entrance exams (if applicable), and meeting specific age requirements for each grade.",
    },
    {
      id: 7,
      title: "Curriculum and Subjects",
      content: "We offer a comprehensive curriculum covering all core and elective subjects required by the education board. The curriculum is designed to foster critical thinking, creativity, and practical skills, preparing students for academic excellence and future challenges. The school may update the curriculum periodically to meet evolving educational standards and incorporate the latest teaching methodologies.",
    },
    {
      id: 8,
      title: "Code of Conduct",
      content: "Students, parents, and visitors are expected to adhere to the school's code of conduct. This code outlines behavioral expectations that promote a safe, respectful, and inclusive learning environment. Students are encouraged to be punctual, disciplined, and respectful towards their peers, teachers, and staff. Any form of bullying, harassment, or inappropriate behavior is strictly prohibited.",
    },
    {
      id: 9,
      title: "Attendance and Punctuality",
      content: "Regular attendance is crucial for academic success. Students are expected to maintain good attendance and punctuality. Parents are requested to inform the school in advance of any absences due to illness or other reasons. Excessive unexcused absences may affect a student's academic progress and may be subject to disciplinary action.",
    },
    {
      id: 10,
      title: "Fee Structure and Payment",
      content: "Details of the school fee structure, payment schedule, and refund policy are provided separately. The school endeavors to maintain transparent fee policies, ensuring parents are informed of all relevant fees and charges. Parents are required to adhere to the payment schedule to ensure the smooth functioning of the school.",
    },
    {
      id: 11,
      title: "Health and Safety",
      content: "The school prioritizes the health and safety of students, faculty, and staff. Parents are required to provide necessary medical information about their child, including any allergies or medical conditions. In case of any health emergencies, the school will follow established protocols and communicate with parents accordingly.",
    },
    {
      id: 12,
      title: "Parent-School Communication",
      content: "Effective communication between parents and the school is essential for a student's academic progress. Parents are encouraged to actively participate in parent-teacher meetings, school events, and engage with the school through official communication channels. The school will regularly update parents on student progress, events, and any important announcements.",
    },
    {
      id: 13,
      title: "Termination",
      content: "The school reserves the right to terminate a student's enrollment under certain circumstances. Grounds for termination may include non-compliance with these terms and conditions, inadequate academic progress, or disciplinary reasons. Termination decisions are at the sole discretion of the school management, and parents will be informed of the reasons in writing.",
    },
    {
      id: 14,
      title: "Governing Law and Jurisdiction",
      content: "These Terms and Conditions are governed by the laws of India and any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.",
    },
    {
      id: 15,
      title: "Contact Us",
      content: "If you have any questions or concerns about these Terms and Conditions or any other aspects of our school, please contact us at syndicatenational[at]info[dot]com/+91 01586 4431 5465.",
    },
    // {
    //   id: 13,
    //   title: "",
    //   content: "",
    // },
  ];

  return (
    <div className="container">
      <div className={styles.wrap}>
        <h1>Terms and Conditions</h1>
        <div className={styles.termsAndConditions}>
          {terms.map((terms) => (
            <div className = {styles.margin}>
              <h2>
                {terms.id}. {terms.title}
              </h2>
              <p>{terms.content}</p>
            </div>
          ))}

            <p>By using our website, you signify your agreement to these Terms and Conditions. We encourage you to review these terms periodically, as they may be updated without notice. Thank you for choosing Syndicate National School as your partner in education. We look forward to a fruitful and rewarding journey together.</p>

        </div>
      </div>
    </div>
  );
};

export default termsAndConditions;

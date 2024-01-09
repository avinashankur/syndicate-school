import React from "react";
import styles from "./academicsidebar.module.scss";
import Link from "next/link";

const AcademicSidebar = () => {
  return (
    <div className={styles.wrap}>
      <h3>Navigation</h3>
      <div>
        <Link href="/academics">Overview</Link>
      </div>
      <div className={styles.cbse}>
        <p>CBSE DETAILS</p>
        <Link href="">Teacher's Details</Link>
        <Link href="">Academic Session Details</Link>
        <Link href="">Affilation Details</Link>
        <Link href="">Salary Details</Link>
        <Link href="">Buildings & Library</Link>
        <Link href="">Enrollment & Result</Link>
        <Link href="">Fee Structure</Link>
        <Link href="">Financial Status</Link>
        <Link href="">Grievance/Resdressal Offer</Link>
        <Link href="">Infrastructer Details</Link>
        <Link href="">Number of Teaching Staff</Link>
        <Link href="">NOC & Recognition Detail</Link>
        <Link href="">School Mgmt & Land</Link>
        <Link href="">School Details</Link>
        <Link href="">School Committees</Link>
      </div>
      <div><Link href="">Admission Withdrawl</Link></div>
      <div><Link href="">Academic Session</Link></div>
      <div><Link href="">Syllabus</Link></div>
      <div><Link href="">Teaching Methodolgy</Link></div>
      <div><Link href="">Rules & Regulation</Link></div>
      <div><Link href="/academics/search-tc">Seach TC</Link></div>
      <div><Link href="">Examination & Entrance</Link></div>
    </div>
  );
};

export default AcademicSidebar;

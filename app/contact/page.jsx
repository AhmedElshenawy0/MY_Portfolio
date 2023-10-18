"use client";
import { useRef } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cems9ne",
        "template_cf1eovo",
        form.current,
        "pp1JrQdOIXvKCPqWU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>Contact Info</h3>
        <p className={styles.tele}>
          <LocalPhoneIcon />
          +20 1550051760
        </p>
        <p className={styles.tele}>
          <LocationOnIcon />
          New Damietta, Damietta, Egypt
        </p>
        <p className={styles.tele}>
          <MailOutlineIcon />
          ahmed1111ahmed0404@gmail.com
        </p>
        <div className={styles.social}>
          <Link
            href="https://www.linkedin.com/in/ahmed-elshenawy-134a81234/"
            target="_blank"
          >
            <FiLinkedin className={styles.icon} />
          </Link>
          <Link href="https://github.com/AhmedElshenawy0" target="_blank">
            <TbBrandGithub className={styles.icon} />
          </Link>
        </div>
      </div>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <h3>Send a message</h3>
        <input
          className={styles.input}
          placeholder="Name"
          type="text"
          name="user_name"
        />
        <input
          className={styles.input}
          placeholder="Email"
          type="email"
          name="user_email"
        />
        <textarea placeholder="Mesage" rows={7} name="message" />
        <input className={styles.submit} type="submit" value="Send" />
      </form>
    </div>
  );
}

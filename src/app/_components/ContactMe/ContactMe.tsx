"use client";
import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact-me.module.scss"; // Adjust the path as necessary
import { isValidEmail } from "./Utils";

function ContactMe() {
  const [error, setError] = useState({
    email: false,
    required: false,
    name: false,
  });
  const [userInput, setUserInput] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const checkRequired = () => {
    const isNameEmpty = !userInput.from_name;
    const isFormIncomplete =
      !userInput.from_email || !userInput.message || isNameEmpty;

    setError({
      ...error,
      required: isFormIncomplete,
      name: isNameEmpty,
    });
  };

  const handleSendMail = async (e: FormEvent) => {
    e.preventDefault();

    if (error.required || error.name || error.email) {
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      throw new Error("Missing required EmailJS environment variables.");
    }

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        userInput,
        publicKey
      );

      if (res.status === 200) {
        setUserInput({
          from_name: "",
          from_email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.contactMeSection}>
      <h1>Contact Me</h1>
      <div className={styles.contactMeContainer}>
        <div className={styles.formContainer}>
          <p>
            {
              "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
            }
          </p>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label>Your Name:</label>
              <input
                type="text"
                maxLength={100}
                required
                value={userInput.from_name}
                onChange={(e) =>
                  setUserInput({ ...userInput, from_name: e.target.value })
                }
                onBlur={checkRequired}
              />
              {error.name && (
                <p className={styles.errorMessage}>Please provide your name!</p>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Your Email:</label>
              <input
                type="email"
                maxLength={100}
                required
                value={userInput.from_email}
                onChange={(e) =>
                  setUserInput({ ...userInput, from_email: e.target.value })
                }
                onBlur={() => {
                  checkRequired();
                  setError({
                    ...error,
                    email: !isValidEmail(userInput.from_email),
                  });
                }}
              />
              {error.email && (
                <p className={styles.errorMessage}>
                  Please provide a valid email!
                </p>
              )}
            </div>

            <div className={styles.textareaGroup}>
              <label>Your Message:</label>
              <textarea
                maxLength={500}
                rows={4}
                required
                value={userInput.message}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                onBlur={checkRequired}
              />
            </div>

            <div className={styles.buttonContainer}>
              {error.required && (
                <p className={styles.errorMessage}>All fields are required!</p>
              )}
              <button className={styles.submitButton} onClick={handleSendMail}>
                <span>
                  Send Message
                  <img
                    style={{
                      height: "30px",
                      verticalAlign: "middle",
                      marginLeft: "0.2rem",
                    }}
                    src="/email.svg"
                  ></img>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <img
            src="/images/contact-me/linkedin.svg"
            alt="LinkedIn"
            className={styles.socialIcon}
          />
          <img
            src="/images/contact-me/github.svg"
            alt="GitHub"
            className={styles.socialIcon}
          />
          <img
            src="/images/contact-me/discord.svg"
            alt="Discord"
            className={styles.socialIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

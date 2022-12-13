import styles from "./ContactUs.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
export default function ContactUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const config = fetch("https://teambatography.vercel.app/api/contact", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    try {
      const response = await config;
      if (response.status == 200) {
        reset();
        toast.success("Your email was sent, successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.notify}>
        <div></div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.panel}>
          <div className={styles.contacts}>
            <div>
              <Image src="/email.svg" alt="email-icon" width={35} height={35} />
              <p>Teambatography@gmail.com</p>
            </div>
            <div>
              <Image src="/phone.svg" alt="phone-icon" width={35} height={35} />
              <p>489-9897</p>
            </div>
            <div>
              <Image
                src="/location.svg"
                alt="location-icon"
                width={35}
                height={35}
              />
              <p>Imus city, Cavite, Philippines</p>
            </div>
          </div>
          <div className={styles.socmed}>
            <p className={styles.title2}>Follow Us On:</p>
            <div>
              <Link href="https://www.facebook.com/" target="_blank">
                <Image
                  src="/facebook.svg"
                  alt="facebook-icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/instagram.svg"
                  alt="instagram-icon"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="twitter-icon"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p className={styles.title1}>Get In Touch</p>
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            className={styles.text}
          />
          {errors.name?.type === "required" && (
            <p className={styles.alert} role="alert">
              Name is required
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            className={styles.text}
          />
          {errors.email?.type === "required" && (
            <p className={styles.alert} role="alert">
              Email is required
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            {...register("subject", { required: true })}
            aria-invalid={errors.subject ? "true" : "false"}
            className={styles.text}
          />
          {errors.subject?.type === "required" && (
            <p className={styles.alert} role="alert">
              Subject is required
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className={styles.message}
          />
          {errors.message?.type === "required" && (
            <p className={styles.alert} role="alert">
              Message is required
            </p>
          )}
        </div>
        <input className={styles.submit} type="submit"></input>
      </form>
    </div>
  );
}

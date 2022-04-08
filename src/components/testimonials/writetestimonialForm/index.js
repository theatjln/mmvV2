import { useForm } from "react-hook-form";
import { useState } from "react";

import Button from "../../button";
import classes from "./index.module.scss";

export default function WritetestimonialForm({ handleModalOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formStatus, setFormStatus] = useState(null);

  async function onSubmit(data) {
    console.log(data);
    await fetch("/api/testimonial", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() =>
        setFormStatus({
          message:
            "Success! Your testimonial will be published once approved. Thank you!",
          status: "success",
        }),
      )
      .catch((error) => {
        console.log(`fetch error: ${error}`);
        setFormStatus({
          message: "Oops! Something went wrong. Try again later!",
          status: "error",
        });
      });

    setTimeout(() => {
      handleModalOpen();
    }, 3000);
  }

  return (
    <div className={classes.wrapper}>
      {!formStatus && (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.formTitle}>Testimonial</h2>
          <p className={classes.info}>Write your experience about the site.</p>
          <div className={classes.formGroup}>
            <input
              placeholder="Name"
              type="text"
              {...register("name", {
                required: "This is required.",
              })}
            />
            {errors.name?.message && (
              <p className={classes.errorMessage}>{errors.name?.message}</p>
            )}
          </div>
          <div className={classes.formGroup}>
            <input
              placeholder="Job Position"
              type="text"
              {...register("work", {
                required: "This is required.",
              })}
            />
            {errors.work?.message && (
              <p className={classes.errorMessage}>{errors.work?.message}</p>
            )}
          </div>
          <div className={classes.formGroup}>
            <input
              placeholder="Email (optional)"
              type="email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email?.message && (
              <p className={classes.errorMessage}>{errors.email?.message}</p>
            )}
          </div>
          <div className={classes.formGroup}>
            <textarea
              placeholder="Message"
              {...register("message", { required: "This is required." })}
            ></textarea>
            {errors.message?.message && (
              <p className={classes.errorMessage}>{errors.message?.message}</p>
            )}
          </div>
          <Button type="submit">Post Testimonial</Button>
        </form>
      )}
      {formStatus && formStatus.status === "success" && (
        <p className={classes.successStatus}>{formStatus.message}</p>
      )}
      {formStatus && formStatus.status === "error" && (
        <p className={classes.errorStatus}>{formStatus.message}</p>
      )}
    </div>
  );
}

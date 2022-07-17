import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();

    // const templateParams = {
    //   from_name: data.name,
    //   from_email: data.email,
    //   to_name: 'anna.noukou@gmail.com',
    //   subject: "Website",
    //   message_html: data.message,
    // };
 
    emailjs.sendForm('service_7urnjyw', 'template_6alxy13', form.current, 'user_0KL9MIxvcWypVJfzvev8L')
      .then((result) => {
          console.log("Message submited: " + JSON.stringify(data));
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


  };

  return (
    <>
      <form ref={form} className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            {...register(
              "email",
              {
                required: "Email is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              },
              { required: true }
            )}
            type="email"
            placeholder="Email *"
          />
          {errors.email && (
            <span className="invalid-feedback">{errors.email.message}</span>
          )}
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required</span>
          )}
        </div>
        {/* End .third */}

        <div className="anoukou_tm_button">
          <button type="submit" className="color">
            Submit
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;

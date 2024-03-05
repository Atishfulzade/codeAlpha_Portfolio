import React, { useState, useRef } from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { earth } from "../assets";
import { staggerContainer } from "../utils/motion";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_56ul77j",
        "template_4k83gy9",
        {
          from_name: form.name,
          to_name: "Atish",
          from_email: form.email,
          to_email: "atishfulzade1234@gmail.com",
          message: form.message,
        },
        "x9g--AzI31sD6cCnF"
      )
      .then(() => {
        setLoading(false);
        toast("Message send sucessfully!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong ", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 w-full overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label htmlFor="name" className="flex flex-col ">
              <span className="text-white mb-4 font-medium">Your name</span>
              <input
                type="text"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
                name="name"
                placeholder="Enter full name"
                value={form.name}
                onChange={handleChange}
                id="name"
              />
            </label>
            <label htmlFor="email" className="flex flex-col ">
              <span className="text-white mb-4 font-medium">Your email</span>
              <input
                type="email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                id="email"
              />
            </label>
            <label htmlFor="msg" className="flex flex-col ">
              <span className="text-white mb-4 font-medium">Your message</span>
              <textarea
                rows={5}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border-none"
                name="message"
                placeholder="Enter message"
                value={form.message}
                onChange={handleChange}
                id="msg"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none border-none font-bold text-white shadow-lg w-fit shadow-primary rounded-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <div className="h-[350px] xl:flex-1 xl:h-auto md:h-full md:w-[500px] flex justify-center items-center ">
            <img
              src={earth}
              alt="Earth"
              className="object-contain w-full md:mt-24 md:ml-56 transition animate-spin-slow"
            />
          </div>
        </motion.div>
      </div>
      <span className="hash-span">&nbsp;</span>
    </motion.section>
  );
};

export default Contact;

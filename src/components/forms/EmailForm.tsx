"use client";
import axios from "axios";
import { useFormik } from "formik";
import { useMemo } from "react";
import { object, string } from "yup";

interface IEmailForm {}

function EmailForm({}: IEmailForm) {
  const validationSchema = object().shape({
    email: string()
      .email("이메일형식으로 입력해주세요.")
      .required("필수값입니다."),
    subject: string().required("필수값입니다.").min(1),
    message: string().required("필수값입니다.").min(1),
  });

  const formik = useFormik<any>({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async ({ email, subject, message }) => {
      try {
        axios.post("/api/mail", { email, subject, message }).then((res) => {
          console.log(res);
        });
      } catch (error) {}
    },
  });

  const isAvailableNext = useMemo(() => {
    return !(formik.isValid && formik.dirty) || formik.isSubmitting;
  }, [formik.values]);

  return (
    <section>
      <form
        className="grid max-w-[500px] mx-auto p-3 bg-color-blue rounded-md"
        onSubmit={formik.handleSubmit}
      >
        <label>Your Email</label>
        <input
          type="email"
          className="px-1 text-black"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label>Subject</label>
        <input
          type="text"
          className="px-1 text-black"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
        />
        <label>Message</label>
        <textarea
          cols={30}
          rows={10}
          className="p-1 text-black"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <button
          className={`mt-2  text-black ${
            !!isAvailableNext ? "bg-slate-400" : "bg-color-yellow"
          }`}
          disabled={!!isAvailableNext}
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default EmailForm;

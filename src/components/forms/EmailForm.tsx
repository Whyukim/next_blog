"use client";
interface IEmailForm {}

function EmailForm({}: IEmailForm) {
  return (
    <section>
      <form className="grid p-3 bg-color-blue rounded-md">
        <label>Your Email</label>
        <input type="text" className="px-1 text-black" />
        <label>Subject</label>
        <input type="text" className="px-1 text-black" />
        <label>Message</label>
        <textarea cols={30} rows={10} className="p-1 text-black" />
        <button className="mt-2 bg-color-yellow text-black">Submit</button>
      </form>
    </section>
  );
}

export default EmailForm;

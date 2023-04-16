import EmailForm from "@/components/forms/EmailForm";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

interface Icontact {}

function contact({}: Icontact) {
  return (
    <div className="grid gap-8">
      <section className="grid justify-center">
        <h1 className="text-lg font-bold text-center">Contact me</h1>
        <span className="text-sm text-center">hyuk@gmail.com</span>
        <div className=" mt-5 flex justify-center gap-3 mb-3">
          <div className="text-center cursor-pointer group">
            <AiFillGithub className="group-hover:fill-blue-500" size="2em" />
          </div>
          <div className="text-center cursor-pointer group">
            <AiFillYoutube className="group-hover:fill-blue-500" size="2em" />
          </div>
          <div className="text-center cursor-pointer group">
            <SiVelog className="group-hover:fill-blue-500" size="2em" />
          </div>
        </div>
        <strong className="text-xl text-center">Or Send me an email</strong>
      </section>
      <EmailForm />
    </div>
  );
}

export default contact;

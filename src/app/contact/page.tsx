import EmailForm from "@/components/forms/EmailForm";

interface Icontact {}

function contact({}: Icontact) {
  return (
    <div className="grid gap-8">
      <section className="grid justify-center">
        <h1 className="text-lg font-bold text-center">Contact me</h1>
        <span className="text-sm text-center">hyuk@gmail.com</span>
        <div className="flex justify-center gap-3 mb-3">
          <div className="text-center">아이콘1</div>
          <div className="text-center">아이콘2</div>
          <div className="text-center">아이콘3</div>
        </div>
        <strong className="text-xl text-center">Or Send me an email</strong>
      </section>
      <EmailForm />
    </div>
  );
}

export default contact;

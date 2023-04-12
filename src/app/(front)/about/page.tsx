import Profile from "@/components/Profile";

interface Iabout {}

function about({}: Iabout) {
  return (
    <div className="grid gap-5">
      <Profile />

      <section className="py-[20px] bg-color-gray text-center text-black">
        <ul className="grid gap-5">
          <li>
            <h3 className="font-bold">Who am I?</h3>
            <p>
              개발을 사랑하는 프론트엔드 개발자
              <br />
              사람과 디자인을 담는 웹앱을 만들고 있음
            </p>
          </li>
          <li>
            <h3 className="font-bold">Who am I?</h3>
            <p>
              개발을 사랑하는 프론트엔드 개발자
              <br />
              사람과 디자인을 담는 웹앱을 만들고 있음
            </p>
          </li>
          <li>
            <h3 className="font-bold">Who am I?</h3>
            <p>
              개발을 사랑하는 프론트엔드 개발자
              <br />
              사람과 디자인을 담는 웹앱을 만들고 있음
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default about;

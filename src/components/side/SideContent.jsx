import React from "react";
import { side, socialIcon } from "../../data/Data";
import sideImg from "../../images/_DSC6530.jpg";
import ReactTypingEffect from "react-typing-effect";
// import { RiMoneyDollarCircleLine } from "react-icons/ri"
// import { FiDownloadCloud } from "react-icons/fi"

// const Progress = ({ done, title, back }) => {
//   return (
//     <div className="progress">
//       <div
//         className={`progress_done ${back}`}
//         style={{
//           opacity: 1,
//           width: `${done}%`,
//         }}
//       ></div>
//       <div className="progress_num">
//         {/* <h4>{done}.</h4> */}
//       </div>
//       <div className="progress_title">
//         <h3> {title}</h3>
//       </div>
//     </div>
//   );
// };

export const SideContent = () => {
  return (
    <>
      <section className="sideContent">
        {/* Profile image */}
        <div className="sideContent_top">
          <div className="sideContent_top_img">
            <img src={sideImg} alt="side" width="100%" />
            <div className="sideContent_top_img_name">
            <ReactTypingEffect text={["Parinya Khemthong"]} speed={100} eraseDelay={200} className="sideContent_top_img_name_typingeffect" />
              {/* <h3>Parinya Khemthong</h3>
              <span>Programmer - Developer</span> */}
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="sideContent_bottom">
          <div className="sideContent_bottom_skill">
            <h3>My Basic Skills</h3>
            {side.map((data) => (
              <div className={data.class}>
                {/* skill1-7 */}
                <span>{data.icon}</span>
                <h4>{data.text}</h4>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="sideContent_bottom_social">
            <h3>Contact Me</h3>
            {socialIcon.map((icons) => (
              <div className={icons.class}>
                <span>{icons.icon}</span>
                {/* <h4>{icons.text}</h4> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

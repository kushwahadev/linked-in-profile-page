import Image from "next/image";
function Introduction() {
  return (
    <div className="border-2 border-solid border-white h-auto w-1/2">
      {/* profile background */}
      <div className="background-img h-20">
        background image
        <div>icon</div>
      </div>

      {/* profile pic  */}
      <div className="profile-pic border-2 border-solid border-white">
        profile pic
      </div>

      {/* profile details  */}
      <div className="intro  p-4 border-2 border-solid border-white">
        <div>edit pen</div>
        <h3>name</h3>
        <h4>designation</h4>
        <h3>schooling</h3>
      </div>
    </div>
  );
}

export default Introduction;

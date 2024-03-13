import profile from "../../images/profile.png";
const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-2 border-b-2 container mx-auto">
      <h2 className="text-[#111] text-4xl font-bold">Knowledge Cafe</h2>
      <img src={profile} alt="ellipse" />
    </header>
  );
};

export default Header;

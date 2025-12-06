  import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profil from "../components/Profil";
import Project from "../components/Project";






export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>my first next project</h1>
      <Footer/>.
      <div className="grid grid-cols-3 gap-4">
        <Profil name="obed" sex="male" age={30} nationality="nigeria" />
        <Profil name="dan" sex="male" age={28} nationality="nigeria" />
        <Profil name="buikem" sex="male" age={24} nationality="nigeria" />
        <Profil name="joy" sex="female" age={32} nationality="nigeria" />
        <Profil name="alex" sex="female" age={23} nationality="nigeria" />
        <Profil name="john" sex="male" age={40} nationality="nigeria" />
        <Profil name="lisa" sex="female" age={33} nationality="nigeria" />
      </div>
     
     

    </div>
    
  );
}
 
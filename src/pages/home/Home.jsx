
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";



export default function Home() {
    return (
        <>

        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
    );
}

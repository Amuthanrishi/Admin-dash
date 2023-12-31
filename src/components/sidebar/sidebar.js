import "./sidebar.css";
import codebyte from "../../assets/codebyte.jpeg"


const Sidebar = ({sidebaropen, closeSidebar}) => {
    return (
        <div className={sidebaropen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img width="45"  src={codebyte} alt="codebyte"/>
                    <h1>Codersbyte</h1>

                </div>
                <i className="fa fa-times" 
                id="sidebarIcon" 
                onClick={() => closeSidebar()} 
                ></i>

            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>MNG</h2>
                <div className="sidebar__link">                   
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#" >Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#" >Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i class="fa fa-file-contract"></i>
                    <a href="#" >Contracts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#" >Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#" >Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-day"></i>
                    <a href="#" >Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-word"></i>
                    <a href="#" >Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money-bill"></i>
                    <a href="#" >Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-coins"></i>
                    <a href="#" >Paygrade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off" aria-hidden="true"></i>
                    <a href="#" >Log out</a>
                </div>
            </div>


        </div>
    )

    
}

export default Sidebar;
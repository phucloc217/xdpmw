import React from "react";
import ContentWrapper from "./ContentWrapper";
 function Navbar(){
     return (
        <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">QLSV</div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Trang Chủ</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Khoa
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog" />
              <span>Công nghệ thông tin</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Khóa 2017</h6>
                <a className="collapse-item" href="buttons.html">D17_TH01</a>
                <a className="collapse-item" href="cards.html">D17_TH02</a>
              </div>
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Khóa 2019</h6>
                <a className="collapse-item" href="buttons.html">D19_TH01</a>
                <a className="collapse-item" href="cards.html">D19_TH02</a>
              </div>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
        <ContentWrapper/>
        
      </div>
     )
 }
 export default Navbar
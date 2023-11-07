import React from 'react'
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto"><Link className="navbar-brand" href="/login">
            <div className="brand-logo"><img className="logo" src="images/logo/logo.png" /></div>
            <h2 className="brand-text mb-0">Fsssssrest</h2>
          </Link></li>
        <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon" /><i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="bx-disc" /></a></li>
      </ul>
    </div>
    <div className="shadow-bottom" />
    <div className="main-menu-content">
      <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style>
        <li className=" nav-item"><a href="index.html"><i className="bx bx-home-alt" /><span className="menu-title" data-i18n="Dashboard">Dashboard</span><span className="badge badge-light-danger badge-pill badge-round float-right mr-2">2</span></a>
          <ul className="menu-content">
            <li><a href="dashboard-ecommerce.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="eCommerce">eCommerce</span></a>
            </li>
            <li className="active"><a href="dashboard-analytics.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Analytics">Analytics</span></a>
            </li>
          </ul>
        </li>
        <li className=" navigation-header"><span>Apps</span>
        </li>
        <li className=" nav-item"><a href="app-email.html"><i className="bx bx-envelope" /><span className="menu-title" data-i18n="Email">Email</span></a>
        </li>
        <li className=" nav-item"><a href="app-chat.html"><i className="bx bx-chat" /><span className="menu-title" data-i18n="Chat">Chat</span></a>
        </li>
        <li className=" nav-item"><a href="app-todo.html"><i className="bx bx-check-circle" /><span className="menu-title" data-i18n="Todo">Todo</span></a>
        </li>
        <li className=" nav-item"><a href="app-calendar.html"><i className="bx bx-calendar" /><span className="menu-title" data-i18n="Calendar">Calendar</span></a>
        </li>
        <li className=" nav-item"><a href="app-kanban.html"><i className="bx bx-grid-alt" /><span className="menu-title" data-i18n="Kanban">Kanban</span></a>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-file" /><span className="menu-title" data-i18n="Invoice">Invoice</span></a>
          <ul className="menu-content">
            <li><a href="app-invoice-list.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Invoice List">Invoice List</span></a>
            </li>
            <li><a href="app-invoice.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Invoice">Invoice</span></a>
            </li>
            <li><a href="app-invoice-edit.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Invoice Edit">Invoice Edit</span></a>
            </li>
            <li><a href="app-invoice-add.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Invoice Add">Invoice Add</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="app-file-manager.html"><i className="bx bx-save" /><span className="menu-title" data-i18n="File Manager">File Manager</span></a>
        </li>
        <li className=" navigation-header"><span>UI Elements</span>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-repeat" /><span className="menu-title" data-i18n="Content">Content</span></a>
          <ul className="menu-content">
            <li><a href="content-grid.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Grid">Grid</span></a>
            </li>
            <li><a href="content-typography.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Typography">Typography</span></a>
            </li>
            <li><a href="content-text-utilities.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Text Utilities">Text Utilities</span></a>
            </li>
            <li><a href="content-syntax-highlighter.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Syntax Highlighter">Syntax Highlighter</span></a>
            </li>
            <li><a href="content-helper-classes.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Helper Classes">Helper Classes</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="colors.html"><i className="bx bx-droplet" /><span className="menu-title" data-i18n="Colors">Colors</span></a>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-bulb" /><span className="menu-title" data-i18n="Icons">Icons</span></a>
          <ul className="menu-content">
            <li><a href="icons-livicons.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="LivIcons">LivIcons</span></a>
            </li>
            <li><a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="boxicons">Boxicons</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-square-rounded" /><span className="menu-title" data-i18n="Card">Card</span></a>
          <ul className="menu-content">
            <li><a href="card-basic.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Basic">Basic</span></a>
            </li>
            <li><a href="card-actions.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Card Actions">Card Actions</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="widgets.html"><i className="bx bx-grid" /><span className="menu-title" data-i18n="Card Widgets">Widgets</span><span className="badge badge-light-primary badge-pill badge-round float-right">New</span></a>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-briefcase-alt-2" /><span className="menu-title" data-i18n="Components">Components</span></a>
          <ul className="menu-content">
            <li><a href="component-alerts.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Alerts">Alerts</span></a>
            </li>
            <li><a href="component-buttons-basic.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Buttons">Buttons</span></a>
            </li>
            <li><a href="component-breadcrumbs.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Breadcrumbs">Breadcrumbs</span></a>
            </li>
            <li><a href="component-carousel.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Carousel">Carousel</span></a>
            </li>
            <li><a href="component-collapse.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Collapse">Collapse</span></a>
            </li>
            <li><a href="component-dropdowns.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Dropdowns">Dropdowns</span></a>
            </li>
            <li><a href="component-list-group.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="List Group">List Group</span></a>
            </li>
            <li><a href="component-modals.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Modals">Modals</span></a>
            </li>
            <li><a href="component-pagination.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Pagination">Pagination</span></a>
            </li>
            <li><a href="component-navbar.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Navbar">Navbar</span></a>
            </li>
            <li><a href="component-tabs-component.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Tabs Component">Tabs Component</span></a>
            </li>
            <li><a href="component-pills-component.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Pills Component">Pills Component</span></a>
            </li>
            <li><a href="component-tooltips.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Tooltips">Tooltips</span></a>
            </li>
            <li><a href="component-popovers.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Popovers">Popovers</span></a>
            </li>
            <li><a href="component-badges.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Badges">Badges</span></a>
            </li>
            <li><a href="component-pill-badges.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Pill Badges">Pill Badges</span></a>
            </li>
            <li><a href="component-progress.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Progress">Progress</span></a>
            </li>
            <li><a href="component-media-objects.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Media Objects">Media Objects</span></a>
            </li>
            <li><a href="component-spinner.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Spinner">Spinner</span></a>
            </li>
            <li><a href="component-bs-toast.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Toasts">Toasts</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-briefcase" /><span className="menu-title" data-i18n="Extra Components">Extra Components</span></a>
          <ul className="menu-content">
            <li><a href="ex-component-avatar.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Avatar">Avatar</span></a>
            </li>
            <li><a href="ex-component-chips.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Chips">Chips</span></a>
            </li>
            <li><a href="ex-component-divider.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Divider">Divider</span></a>
            </li>
          </ul>
        </li>
        <li className=" navigation-header"><span>Forms &amp; Tables</span>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-check" /><span className="menu-title" data-i18n="Form Elements">Form Elements</span></a>
          <ul className="menu-content">
            <li><a href="form-inputs.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Input">Input</span></a>
            </li>
            <li><a href="form-input-groups.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Input Groups">Input Groups</span></a>
            </li>
            <li><a href="form-number-input.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Number Input">Number Input</span></a>
            </li>
            <li><a href="form-select.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Select">Select</span></a>
            </li>
            <li><a href="form-radio.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Radio">Radio</span></a>
            </li>
            <li><a href="form-checkbox.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Checkbox">Checkbox</span></a>
            </li>
            <li><a href="form-switch.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Switch">Switch</span></a>
            </li>
            <li><a href="form-textarea.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Textarea">Textarea</span></a>
            </li>
            <li><a href="form-quill-editor.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Quill Editor">Quill Editor</span></a>
            </li>
            <li><a href="form-file-uploader.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="File Uploader">File Uploader</span></a>
            </li>
            <li><a href="form-date-time-picker.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Date & Time Picker">Date &amp; Time Picker</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="form-layout.html"><i className="bx bx-slider" /><span className="menu-title" data-i18n="Form Layout">Form Layout</span></a>
        </li>
        <li className=" nav-item"><a href="form-wizard.html"><i className="bx bx-list-plus" /><span className="menu-title" data-i18n="Form Wizard">Form Wizard</span></a>
        </li>
        <li className=" nav-item"><a href="form-validation.html"><i className="bx bx-check-shield" /><span className="menu-title" data-i18n="Form Validation">Form Validation</span></a>
        </li>
        <li className=" nav-item"><a href="form-repeater.html"><i className="bx bx-detail" /><span className="menu-title" data-i18n="Form Repeater">Form Repeater</span></a>
        </li>
        <li className=" nav-item"><a href="table.html"><i className="bx bx-grid-alt" /><span className="menu-title" data-i18n="Table">Table</span></a>
        </li>
        <li className=" nav-item"><a href="table-extended.html"><i className="bx bx-table" /><span className="menu-title" data-i18n="bx bx-selection">Table extended</span></a>
        </li>
        <li className=" nav-item"><a href="table-datatable.html"><i className="bx bx-map-alt" /><span className="menu-title" data-i18n="Datatable">Datatable</span></a>
        </li>
        <li className=" navigation-header"><span>Pages</span>
        </li>
        <li className=" nav-item"><a href="page-user-profile.html"><i className="bx bx-user" /><span className="menu-title" data-i18n="User Profile">User Profile</span></a>
        </li>
        <li className=" nav-item"><a href="page-faq.html"><i className="bx bx-help-circle" /><span className="menu-title" data-i18n="FAQ">FAQ</span></a>
        </li>
        <li className=" nav-item"><a href="page-knowledge-base.html"><i className="bx bx-error-circle" /><span className="menu-title" data-i18n="Knowledge Base">Knowledge Base</span></a>
        </li>
        <li className=" nav-item"><a href="page-search.html"><i className="bx bx-search" /><span className="menu-title" data-i18n="Search">Search</span></a>
        </li>
        <li className=" nav-item"><a href="page-account-settings.html"><i className="bx bx-wrench" /><span className="menu-title" data-i18n="Account Settings">Account Settings</span></a>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-user-plus" /><span className="menu-title" data-i18n="User">User</span></a>
          <ul className="menu-content">
            <li><a href="page-users-list.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="List">List</span></a>
            </li>
            <li><a href="page-users-view.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="View">View</span></a>
            </li>
            <li><a href="page-users-edit.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Edit">Edit</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-building" /><span className="menu-title" data-i18n="Starter kit">Starter kit</span></a>
          <ul className="menu-content">
            <li><a href="../../../starter-kit/ltr/vertical-menu-boxicons-template/sk-layout-1-column.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="1 column">1 column</span></a>
            </li>
            <li><a href="../../../starter-kit/ltr/vertical-menu-boxicons-template/sk-layout-2-columns.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="2 columns">2 columns</span></a>
            </li>
            <li><a href="../../../starter-kit/ltr/vertical-menu-boxicons-template/sk-layout-fixed-navbar.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Fixed navbar">Fixed navbar</span></a>
            </li>
            <li><a href="../../../starter-kit/ltr/vertical-menu-boxicons-template/sk-layout-fixed.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Fixed layout">Fixed layout</span></a>
            </li>
            <li><a href="../../../starter-kit/ltr/vertical-menu-boxicons-template/sk-layout-static.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Static layout">Static layout</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-lock-open-alt" /><span className="menu-title" data-i18n="Authentication">Authentication</span></a>
          <ul className="menu-content">
            <li><a href="auth-login.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Login">Login</span></a>
            </li>
            <li><a href="auth-register.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Register">Register</span></a>
            </li>
            <li><a href="auth-forgot-password.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Forgot Password">Forgot Password</span></a>
            </li>
            <li><a href="auth-reset-password.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Reset Password">Reset Password</span></a>
            </li>
            <li><a href="auth-lock-screen.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Lock Screen">Lock Screen</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-share-alt" /><span className="menu-title" data-i18n="Miscellaneous">Miscellaneous</span></a>
          <ul className="menu-content">
            <li><a href="page-coming-soon.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Coming Soon">Coming Soon</span></a>
            </li>
            <li><a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Error">Error</span></a>
              <ul className="menu-content">
                <li><a href="error-404.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n={404}>404</span></a>
                </li>
                <li><a href="error-500.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n={500}>500</span></a>
                </li>
              </ul>
            </li>
            <li><a href="page-not-authorized.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Not Authorized">Not Authorized</span></a>
            </li>
            <li><a href="page-maintenance.html" target="_blank"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Maintenance">Maintenance</span></a>
            </li>
          </ul>
        </li>
        <li className=" navigation-header"><span>Charts &amp; Maps</span>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-pie-chart-alt" /><span className="menu-title" data-i18n="Charts">Charts</span><span className="badge badge-pill badge-round badge-light-success float-right mr-2">3</span></a>
          <ul className="menu-content">
            <li><a href="chart-apex.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Apex">Apex</span></a>
            </li>
            <li><a href="chart-chartjs.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Chartjs">Chartjs</span></a>
            </li>
            <li><a href="chart-chartist.html"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Chartist">Chartist</span></a>
            </li>
          </ul>
        </li>
        <li className=" nav-item"><a href="maps-google.html"><i className="bx bx-globe" /><span className="menu-title" data-i18n="Google Maps">Google Maps</span></a>
        </li>
        <li className=" navigation-header"><span>Extensions</span>
        </li>
        <li className=" nav-item"><a href="ext-component-sweet-alerts.html"><i className="bx bx-error" /><span className="menu-title" data-i18n="Sweet Alert">Sweet Alert</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-toastr.html"><i className="bx bx-map-alt" /><span className="menu-title" data-i18n="Toastr">Toastr</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-noui-slider.html"><i className="bx bx-slider-alt" /><span className="menu-title" data-i18n="NoUi Slider">NoUi Slider</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-drag-drop.html"><i className="bx bx-copy-alt" /><span className="menu-title" data-i18n="Drag & Drop">Drag &amp; Drop</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-tour.html"><i className="bx bx-paper-plane" /><span className="menu-title" data-i18n="Tour">Tour</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-swiper.html"><i className="bx bx-tab" /><span className="menu-title" data-i18n="l18n">Swiper</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-treeview.html"><i className="bx bx-menu-alt-left" /><span className="menu-title" data-i18n="l18n">Treeview</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-block-ui.html"><i className="bx bx-fullscreen" /><span className="menu-title" data-i18n="l18n">Block-UI</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-media-player.html"><i className="bx bx-music" /><span className="menu-title" data-i18n="l18n">Media Player</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-miscellaneous.html"><i className="bx bx-sitemap" /><span className="menu-title" data-i18n="Miscellaneous">Miscellaneous</span></a>
        </li>
        <li className=" nav-item"><a href="ext-component-i18n.html"><i className="bx bx-globe" /><span className="menu-title" data-i18n="i18n">i18n</span></a>
        </li>
        <li className=" navigation-header"><span>Others</span>
        </li>
        <li className=" nav-item"><a href="#"><i className="bx bx-menu" /><span className="menu-title" data-i18n="Menu Levels">Menu Levels</span></a>
          <ul className="menu-content">
            <li><a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Second Level</span></a>
            </li>
            <li><a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Second Level">Second Level</span></a>
              <ul className="menu-content">
                <li><a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Third Level</span></a>
                </li>
                <li><a href="#"><i className="bx bx-right-arrow-alt" /><span className="menu-item" data-i18n="Third Level">Third Level</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="disabled nav-item"><a href="#"><i className="bx bx-unlink" /><span className="menu-title" data-i18n="Disabled Menu">Disabled Menu</span></a>
        </li>
        <li className=" navigation-header"><span>Support</span>
        </li>
        <li className=" nav-item"><a href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation" target="_blank"><i className="bx bx-folder" /><span className="menu-title" data-i18n="Documentation">Documentation</span></a>
        </li>
        <li className=" nav-item"><a href="https://pixinvent.ticksy.com/" target="_blank"><i className="bx bx-purchase-tag-alt" /><span className="menu-title" data-i18n="Raise Support">Raise Support</span></a>
        </li>
      </ul>
    </div>
  </div>
  )
}

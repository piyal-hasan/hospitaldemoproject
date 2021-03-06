<div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item mr-auto"><a class="navbar-brand" href="../../../html/ltr/vertical-menu-template-dark/index.html">
                    <div class="brand-logo"></div>
                    <h2 class="brand-text mb-0">Vuexy</h2>
                </a></li>
            <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class=" nav-item"><a href="index.html"><i class="feather icon-home"></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span><span class="badge badge badge-warning badge-pill float-right mr-2">2</span></a>
                <ul class="menu-content">
                    <li class="active"><a href="dashboard-analytics.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Analytics">Analytics</span></a>
                    </li>
                    <li><a href="dashboard-ecommerce.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="eCommerce">eCommerce</span></a>
                    </li>
                </ul>
            </li>
           
            <li class=" nav-item"><a href="#"><i class="feather icon-user"></i><span class="menu-title" data-i18n="User">Administator</span></a>
                <ul class="menu-content">
                <li><a href="{{url('/permissions')}}"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="List">Permission</span></a>
                    </li>
                    <li><a href="{{url('/roles')}}"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="View">Role</span></a>
                    </li>
                    <li><a href="{{url('/users')}}"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Edit">Users</span></a>
                    </li>
                </ul>
            </li>
           
        </ul>
    </div>
</div>
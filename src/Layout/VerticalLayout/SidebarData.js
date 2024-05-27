const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,
    },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "3"
    },
    {
        label: "Usuarios",
        icon: "mdi mdi-account-multiple-outline",
        subItem: [
            { sublabel: "Gestión de usuarios", link: "/GestionClientes" },        ],
    },
    {
        label: "Clientes",
        icon: "mdi mdi-account-tie-outline",
        subItem: [
            { sublabel: "Gestión de clientes", link: "/GestionClientes" },
        ],
    },
    {
        label: "Paquetes",
        icon: "mdi mdi-package-variant",
        subItem: [
            { sublabel: "Presentación", link: "/auth-login" },
            { sublabel: "Tracking", link: "/auth-register" },
            { sublabel: "Incidentes", link: "/auth-recoverpw" },
                ],
    },
    {
        label: "Empleados",
        icon: "mdi mdi-account-hard-hat",
        subItem: [
            { sublabel: "Gestión de empleados", link: "/pages-starter" },
        ],
    },
        {
            label: "Vehículos",
            icon: "mdi mdi-truck-delivery",
            subItem: [
                { sublabel: "Gestión de vehículos", link: "/vehiculos" },
            ],        
    },
    {
        label: "Rutas",
        icon: "mdi mdi-map-marker-distance",
        subItem: [
            { sublabel: "Asignación de rutas", link: "/tables-basic" },
            { sublabel: "Destino", link: "/tables-listjs" },
            { sublabel: "Bodegas", link: "/table-datatables" },
            { sublabel: "Direcciones", link: "/table-datatables" },
        ],
    },
    {
        label: "Ordenes",
        icon: "mdi mdi-reorder-horizontal",
        subItem: [
            { sublabel: "Gestión de ordenes", link: "/tables-basic" },
            { sublabel: "Tipo de pago", link: "/tables-listjs" },
            { sublabel: "Tupo de envío", link: "/table-datatables" },
        ],
    },
    {
        label: "Ubicación",
        icon: "ri-map-pin-line",
        subItem: [
            { sublabel: "Google Maps", link: "/maps-google" },
            { sublabel: "Vector Maps", link: "/maps-vector" },
        ],
    },
  
]
export default SidebarData;
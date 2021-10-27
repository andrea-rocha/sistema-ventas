export default {
    top: [{
            name: 'Inicio',
            url: '/home',
            icon: 'Home',
        },
        {
            name: 'Gestión',
            icon: 'Cloud',
            children: [
                {
                    name: 'Empleados',
                    url: '/pages/empleados',
                },
                {
                    name: 'Factura',
                    url: '/apps/invoice',
                },
                {
                    name: 'Gestión de Ventas',
                    url: '/apps/ventas',
                },
                {
                    name: 'Gestión de Productos',
                    url: '/apps/productos',
                },
            ],
        },
        {
            divider: true,
        },
    
    ],
    bottom: [
        {
            name: 'Cuenta',
            url: '/dashboard',
            icon: 'User',
            badge: {
                variant: 'success',
            },
        },
    ],
};
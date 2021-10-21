export default {
    top: [{
            name: 'Inicio',
            url: '/home',
            icon: 'Home',
        },
        {
            name: 'Paginas',
            icon: 'File',
            children: [{
                    name: 'Login',
                    url: '/pages/blank',
                },
                {
                    name: 'Sub Navigation',
                    url: '/pages/subnav',
                },
                {
                    name: 'Empleados',
                    url: '/pages/empleados',
                },
            ],
        },
        {
            name: 'Gestión',
            icon: 'Cloud',
            children: [{
                    name: 'Analytics',
                    url: '/apps/analytics',
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
                text: '3',
            },
        },
    ],
};
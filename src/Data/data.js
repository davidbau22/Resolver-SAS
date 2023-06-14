export const userAdmin = 
    {
        id:1,
        name:'admin',
        email:'admin@example.com',
        password:'12345',
        role:'administrador',
        isAdmin:'true'

    };

export const userTechnician = 
    {
        id:2,
        name:'technician',
        email:'technician@example.com',
        password:'12345',
        role:'technician',
        isAdmin:'false'
    };

export const subsidiaryList = [
    {
        id:1,
        subsidiaryType:'A',
    },
    {
        id:2,
        subsidiaryType:'B',
    },
];

export const subsidiary_A = [
    {
        id:1,
        subsidiaryType:'A',
        workers:[
            {
                id:1,
                subsidiary:'A',
                name:'Ramon Valdez',
                currentlyStatus:'inactive',
                assingedResources:[],
                visitedClients:[]
            },
            {
                id:2,
                subsidiary:'A',
                name:'Manuel Santos',
                currentlyStatus:'inactive',
                assingedResources:[],
                visitedClients:[]
            },
        ]
       
    }
]   

export const subsidiary_B = [
    {

        id:2,
        subsidiaryType:'B',
        workers:[
            {
                id:1,
                subsidiary:'B',
                name:'Juan Perez',
                currentlyStatus:'inactive',
                assingedResources:[],
                visitedClients:[]
            },
            {
                id:2,
                subsidiary:'B',
                name:'Jose Rios',
                currentlyStatus:'inactive',
                assingedResources:[],
                visitedClients:[]
            },
        ]

    }
]    

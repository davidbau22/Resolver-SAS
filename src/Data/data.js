export const userAdmin = 
    {
        id:1,
        name:'admin',
        email:'admin@example.com',
        password:'12345',
        role:'admin',
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

export const subsidiary_A = [
    {
       subsidiary:{
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
                currentlyStatus:'active',
                assingedResources:[],
                visitedClients:[]
            },
        ]
       }
    }
]    
export const subsidiary_B = [
    {
       subsidiary:{
        id:1,
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
                currentlyStatus:'active',
                assingedResources:[],
                visitedClients:[]
            },
        ]
       }
    }
]    

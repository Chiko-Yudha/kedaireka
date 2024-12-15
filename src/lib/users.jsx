import { useSession } from "vinxi/http";  

export async function getUser (request) {  
    
    const session = await useSession({  
        password: process.env.SESSION_SECRET  
    });  
    const userId = session.data.userId;  
    console.log("lib/session.jsx:getUser",userId)
    if (!userId) return null;  
    return await store.getUser (userId);  

}
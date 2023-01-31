import { rental } from "../data/rental";

export const getMachineById=(id)=>{
    
    return rental.find(rent => rent.id === id);
}

export const rentalReducer = (state = [] , action) => {
    const {payload, type} = action 

    switch (type) {
        case 'Add':
            return [...state, payload];
        
            //Se elimina con !== y con el payload se vuelve a crear el objeto
        case 'Modify':
                payload.id = +payload.id
                return [...state.filter( rent => rent.id !== payload.id), payload]
               
        case 'Delete':
                return state.filter((rent) => rent.id !== payload.id);
        default:
            return state;
    }
}

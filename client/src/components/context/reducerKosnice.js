

export const reducerKosnice=(state,action)=>{
    switch (action.type) {
        case "GET_KOSNICE":
            return {
                ...state,
                loading:false,
                kosnice:action.payload

            }
        case "ERROR":
            return {
                ...state,
                error:action.payload
            }
        case "ADD_KOSNICA":
            return {
                ...state,
                kosnice:[action.payload,...state.kosnice]
            }
            case "DELETE_KOSNICA":
                return{
                    ...state,
                    kosnice:state.kosnice.filter(kosnica=>kosnica._id!==action.payload)
                }
            case 'GET_KOSNICA':
                return{
                    ...state,
                    kosnica:action.payload,
                    loading:false
                }
            case 'SET_LOADER':
                return {
                    ...state,
                    loading:action.payload
                }
        default:
            break;
    }

}

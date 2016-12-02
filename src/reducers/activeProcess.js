export default function (state = {}, action) {
    switch (action.type) {
        case "PROCESS_SELECTED":
            return action.payload
        case "PROCESS_UPDATED":
            return action.payload.name
        case "BUSINESS_AREA_FILTERED":
            return action.payload
        default:
            return state
    }
}


import { GETGOODTYPES, GETALLGOODS, GETFENLEI, GETGENLEIINIT } from "../actions";


const defalutState = {

    findGoods: [],
    good: {},
    types: [],
    allGoods: [],
    fenlei: [],
    cargoods: []



}


export const data = (state = defalutState, action) => {
    console.log(action);
    switch (action.type) {
        case "getSearchGoods":
            return { ...state, findGoods: action.data };
            break;
        case "getDetailGood":
            return { ...state, good: action.good };
            break;
        case "getCarGoods":
            return { ...state, cargoods: action.cargoods };

        case GETGOODTYPES:
            return { ...state, types: action.types }
            break;

        case GETALLGOODS:
            return { ...state, allGoods: action.allGoods }
            break;

        case GETFENLEI:
            return { ...state, fenlei: action.data }
            break;

        case GETGENLEIINIT:
            return { ...state, fenlei: action.data }
            break;

        default:
            return state;
            break;
    }
}
import * as type from "./actionTypes";

export function createCard(card) {
    return {type: type.CREATE_CARD, card};
}

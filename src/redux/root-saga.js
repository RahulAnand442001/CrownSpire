import { all, call } from "redux-saga/effects";
// sagas
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}

//TODO: add base-sage of shopSaga later

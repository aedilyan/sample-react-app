import userAction from '../actions/userAction';

export const userReducer = (state, action) => {
    const updatefavorite = (isFavorite = false) => {
        return state.map((item) => {
            if (item.id === action.userId) {
                item.favorite = isFavorite;
                return item;
            }
            return item;
        });
    }

    switch (action.type) {
        case userAction.setUser: {
            return action.data;
        }
        case userAction.favorite: {
            return updatefavorite(true);
        }
        case userAction.unFavorite: {
            return updatefavorite(false);
        }
        default: return state;
    }
}

const handleToggleNavDropdown = (dispatch, id) => {
    dispatch({ type: 'toggle', id: id })
}

const handleHideNavDropdown = (dispatch) => {
    dispatch({ type: 'hide' })
}

export default function showNavDropdownReducer(state, action) {

    if (!state) return { id: action.id, visible: true }
    switch (action.type) {
        case 'toggle':
            console.log(state)
            if (state.id === action.id) {
                return { id: action.id, visible: !state.visible }
            } else {
                if (!state.visible) {
                    return { id: action.id, visible: !state.visible }
                } else {
                    return { id: action.id, visible: state.visible }
                }
            }
            break;
        case 'hide':
            return {...state, visible:false}

    }
}

export { handleToggleNavDropdown, handleHideNavDropdown }
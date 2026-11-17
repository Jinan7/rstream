const handleShowSideBar = function(dispatch) {
    return (e) => dispatch({ type: 'show' })
}

const handleHideSideBar = function(dispatch) {
    return (e) => dispatch({ type: 'hide' })
}

function showSideBarReducer(state, action) {

    switch (action.type) {

        case 'show': {
            return true
        }
        case 'hide': {
            return false
        }
    }
}

export { showSideBarReducer, handleHideSideBar, handleShowSideBar }
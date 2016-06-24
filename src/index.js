import { connect } from 'react-redux'

export default (mapStateToProps, mapDispatchToProps, mergeProps, options) => (next) => (View) => {

    const interalMapDispatchToProps = (dispatch, props) => {
        return {
            ...(mapDispatchToProps && mapDispatchToProps(dispatch, props)),
            // Must redirect dispatch to globalDispatch, otherwise the dispatch method 
            // of the view() gets overwritten by the global dispatcher
            globalDispatch: dispatch
        }
    }

    return next(connect(mapStateToProps, interalMapDispatchToProps, mergeProps, options)(View))
}
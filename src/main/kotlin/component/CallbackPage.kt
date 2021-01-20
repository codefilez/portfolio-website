package component

import CognitoAuthSession
import kotlinx.css.margin
import kotlinx.css.px
import materialui.components.circularprogress.circularProgress
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.ReactElement
import react.router.dom.redirect
import styled.css
import styled.styledDiv
import utility.AuthUtility

external interface CallbackPageProps : RProps {
    var onUpdateAuthSession: (CognitoAuthSession) -> Unit
    var onStartAuthenticating: () -> Unit
    var isAuthenticating: Boolean
    var isLoggedIn: Boolean
}

class CallbackPage : RComponent<CallbackPageProps, RState>() {

    override fun componentDidMount() {
        if (!props.isLoggedIn && !props.isAuthenticating) {
            props.onStartAuthenticating.invoke()
            AuthUtility.initialize(props.onUpdateAuthSession)
        }
    }

    override fun RBuilder.render() {
        if (props.isLoggedIn) {
            redirect(to = "/")
        } else {
            styledDiv {
                css { margin = 25.px.toString() }
                circularProgress {}
            }
        }
    }
}

fun RBuilder.callbackPage(handler: CallbackPageProps.() -> Unit): ReactElement {
    return child(CallbackPage::class) {
        this.attrs(handler)
    }
}

package component

import CognitoAuth
import CognitoAuthSession
import component.blog.BlogPage
import kotlinx.css.Align
import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.JustifyContent
import kotlinx.css.alignItems
import kotlinx.css.display
import kotlinx.css.flexDirection
import kotlinx.css.justifyContent
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.router.dom.browserRouter
import react.router.dom.route
import react.router.dom.switch
import react.setState
import styled.css
import styled.styledDiv
import utility.AuthUtility

class AppRouter : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        this.isAuthenticating = false
        this.cognitoAuth = AuthUtility.getUserAuth(onUpdateAuthSessionFunction)
        this.isUserLoggedIn = this.cognitoAuth.isUserSignedIn()
    }

    private val onUpdateAuthSessionFunction = { _: CognitoAuthSession ->
        console.log("Successfully logged in!")
        setState {
            isAuthenticating = false
            isUserLoggedIn = true
        }
    }

    override fun RBuilder.render() {
        browserRouter {
            styledDiv {
                css {
                    justifyContent = JustifyContent.center
                    alignItems = Align.center
                }
                navBar {
                    pathsWithDisplayName = listOf(
                        "Home" to "/",
                        "Blog" to "/blog"
                    )
                    isUserLoggedIn = state.isUserLoggedIn
                }
                styledDiv {
                    css {
                        flexDirection = FlexDirection.column
                        display = Display.flex
                        alignItems = Align.center
                        justifyContent = JustifyContent.center
                    }
                    switch {
                        route(path = "/login/callback") {
                            callbackPage {
                                onUpdateAuthSession = onUpdateAuthSessionFunction
                                onStartAuthenticating = {
                                    setState {
                                        isAuthenticating = true
                                    }
                                }
                                isAuthenticating = state.isAuthenticating
                                isLoggedIn = state.isUserLoggedIn
                            }
                        }
                        route("/blog", BlogPage::class, exact = true)
                        route("/", WelcomePage::class, exact = true)
                    }
                }
                siteFooter()
            }
        }
    }
}

external interface AppState : RState {
    var isAuthenticating: Boolean
    var isUserLoggedIn: Boolean
    var cognitoAuth: CognitoAuth
}

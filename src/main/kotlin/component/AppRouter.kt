package component

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
import styled.css
import styled.styledDiv

class AppRouter : RComponent<RProps, RState>() {

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
                }
                styledDiv {
                    css {
                        flexDirection = FlexDirection.column
                        display = Display.flex
                        alignItems = Align.center
                        justifyContent = JustifyContent.center
                    }
                    switch {
                        route("/blog", BlogPage::class, exact = true)
                        route("/", WelcomePage::class, exact = true)
                    }
                }
                siteFooter()
            }
        }
    }
}

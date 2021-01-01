package component

import kotlinx.css.Align
import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.JustifyContent
import kotlinx.css.alignItems
import kotlinx.css.display
import kotlinx.css.flexDirection
import kotlinx.css.justifyContent
import kotlinx.css.maxWidth
import kotlinx.css.pct
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledDiv
import styled.styledImg

class WelcomePage : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                flexDirection = FlexDirection.column
                display = Display.flex
                alignItems = Align.center
                justifyContent = JustifyContent.center
            }

            styledImg {
                css {
                    maxWidth = 50.pct
                }
                attrs {
                    src = "https://images.run3wide.com/main/outside_plane.jpeg"
                }
            }
        }
    }
}

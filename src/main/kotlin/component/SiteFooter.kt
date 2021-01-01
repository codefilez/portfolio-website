package component

import kotlinx.css.Align
import kotlinx.css.Color
import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.JustifyContent
import kotlinx.css.alignItems
import kotlinx.css.color
import kotlinx.css.display
import kotlinx.css.flexDirection
import kotlinx.css.justifyContent
import kotlinx.css.marginTop
import kotlinx.css.px
import materialui.components.breadcrumbs.breadcrumbs
import materialui.components.link.link
import react.RBuilder
import styled.css
import styled.styledDiv
import styled.styledP

fun RBuilder.siteFooter() = styledDiv {
    css {
        display = Display.flex
        flexDirection = FlexDirection.column
        justifyContent = JustifyContent.center
        alignItems = Align.center
        marginTop = 25.px
    }
    styledDiv {
        css {
            display = Display.flex
            flexDirection = FlexDirection.row
            justifyContent = JustifyContent.center
            alignItems = Align.center
        }
        breadcrumbs {
            link {
                +"LinkedIn"
                attrs {
                    href = "https://www.linkedin.com/in/paul-robson-78a73a129/"
                    target = "_blank"
                }
            }

            link {
                +"Github"
                attrs {
                    href = "https://github.com/run3wide"
                    target = "_blank"
                }
            }

            link {
                +"Twitter"
                attrs {
                    href = "https://twitter.com/run3wide"
                    target = "_blank"
                }
            }
        }
    }
    styledP {
        css {
            color = Color.gray
        }
        +"Copyright \u00a9 2020 run3wide (Paul Robson) All rights reserved."
    }
}

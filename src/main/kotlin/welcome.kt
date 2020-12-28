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
import materialui.components.appbar.appBar
import materialui.components.breadcrumbs.breadcrumbs
import materialui.components.link.link
import materialui.components.toolbar.toolbar
import materialui.components.typography.enums.TypographyVariant
import materialui.components.typography.typography
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledDiv
import styled.styledImg

external interface WelcomeProps : RProps {
    var name: String
}

data class WelcomeState(val name: String) : RState

@JsExport
class Welcome(props: WelcomeProps) : RComponent<WelcomeProps, WelcomeState>(props) {

    init {
        state = WelcomeState(props.name)
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                flexDirection = FlexDirection.column
                display = Display.flex
                alignItems = Align.center
                justifyContent = JustifyContent.center
            }

            appBar {
                toolbar {
                    typography {
                        attrs {
                            variant = TypographyVariant.h6
                        }
                        +"run3wide"
                    }
                }
            }

            styledImg {
                css {
                    maxWidth = 50.pct
                }
                attrs {
                    src = "https://images.run3wide.com/main/outside_plane.jpeg"
                }
            }

            styledDiv {
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.row
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
                }
            }
        }
    }
}

package component

import external.accountCircle
import external.menuIcon
import kotlinx.css.Color
import kotlinx.css.LinearDimension
import kotlinx.css.TextAlign
import kotlinx.css.color
import kotlinx.css.fontFamily
import kotlinx.css.margin
import kotlinx.css.marginLeft
import kotlinx.css.properties.TextDecoration
import kotlinx.css.textAlign
import kotlinx.css.textDecoration
import kotlinx.html.js.onClickFunction
import materialui.components.appbar.appBar
import materialui.components.appbar.enums.AppBarPosition
import materialui.components.iconbutton.iconButton
import materialui.components.link.link
import materialui.components.menu.menu
import materialui.components.menuitem.menuItem
import materialui.components.popover.enums.PopoverOriginHorizontal
import materialui.components.popover.enums.PopoverOriginVertical
import materialui.components.popover.horizontal
import materialui.components.popover.vertical
import materialui.components.toolbar.toolbar
import materialui.components.typography.enums.TypographyVariant
import materialui.components.typography.typography
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.ReactElement
import react.router.dom.routeLink
import react.setState
import styled.css
import styled.styledDiv
import styled.styledP
import utility.EnvironmentUtility

class NavBar : RComponent<NavBarProps, NavBarState>() {

    init {
        this.state.anchorEl = null
    }

    val setAnchorEl = { eventTarget: EventTarget? ->
        setState {
            anchorEl = eventTarget
        }
    }

    private val handleMenu = { e: Event ->
        setAnchorEl(e.currentTarget)
    }

    private val handleClose = { _: Event, _: String ->
        setAnchorEl(null)
    }

    private val handleCloseMenuItem = { _: Event ->
        setAnchorEl(null)
    }

    override fun RBuilder.render() {
        styledDiv {
            appBar {
                attrs {
                    position = AppBarPosition.sticky
                }
                toolbar {
                    iconButton {
                        attrs {
                            onClickFunction = handleMenu
                        }
                        menuIcon {}
                    }

                    menu {
                        attrs {
                            open = state.anchorEl != null
                            onClose = handleClose
                            keepMounted = true
                            getContentAnchorEl = null
                            anchorEl(state.anchorEl)
                            anchorOrigin {
                                this.horizontal(PopoverOriginHorizontal.left)
                                this.vertical(PopoverOriginVertical.bottom)
                            }
                            transformOrigin {
                                this.horizontal(PopoverOriginHorizontal.left)
                                this.vertical(PopoverOriginVertical.top)
                            }
                        }
                        props.pathsWithDisplayName.map {
                            routeLink(to = it.path) {
                                styledDiv {
                                    menuItem {
                                        attrs {
                                            onClickFunction = handleCloseMenuItem
                                        }
                                        styledP {
                                            css {
                                                margin = "auto"
                                                textAlign = TextAlign.center
                                                textDecoration = TextDecoration.none
                                            }
                                            +it.displayName
                                        }
                                    }
                                }
                            }
                        }
                    }

                    typography {
                        attrs {
                            variant = TypographyVariant.h6
                        }
                        +"run3wide"
                    }
                    styledDiv {
                        css {
                            marginLeft = LinearDimension.auto
                        }
                        if (props.isUserLoggedIn) {
                            iconButton {
                                accountCircle {}
                            }
                        } else {
                            link {
                                styledDiv {
                                    styledP {
                                        css {
                                            color = Color.white
                                            fontFamily = "Arial"
                                        }
                                        +"Sign in"
                                    }
                                }
                                val baseUri = EnvironmentUtility.getEnvironmentVariable("redirectBaseUrl")
                                val clientId = EnvironmentUtility.getEnvironmentVariable("cognitoClientId")
                                attrs {
                                    href =
                                        "https://accounts.run3wide.com/login?client_id=$clientId&response_type=code&scope=openid&redirect_uri=$baseUri/login/callback"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

fun RBuilder.navBar(handler: NavBarProps.() -> Unit): ReactElement {
    return child(NavBar::class) {
        this.attrs(handler)
    }
}

external interface NavBarState : RState {
    var anchorEl: EventTarget?
}

external interface NavBarProps : RProps {
    var pathsWithDisplayName: List<PathWithDisplayName>
    var isUserLoggedIn: Boolean
}

data class PathWithDisplayName(
    val path: String,
    val displayName: String,
)

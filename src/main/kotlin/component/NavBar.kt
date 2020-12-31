package component

import external.menuIcon
import kotlinx.html.js.onClickFunction
import materialui.components.appbar.appBar
import materialui.components.appbar.enums.AppBarPosition
import materialui.components.iconbutton.iconButton
import materialui.components.menu.menu
import materialui.components.menuitem.menuItem
import materialui.components.popover.enums.PopoverOriginHorizontal
import materialui.components.popover.enums.PopoverOriginVertical
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
import styled.styledDiv

fun RBuilder.navBar(handler: NavBarProps.() -> Unit): ReactElement {
    return child(NavBar::class) {
        this.attrs(handler)
    }
}

external interface NavBarState : RState {
    var anchorEl: EventTarget?
}

external interface NavBarProps : RProps {
    var pathsWithDisplayName: List<Pair<String, String>>
}

class NavBar : RComponent<NavBarProps, NavBarState>() {
    override fun NavBarState.init() {
        setState {
            anchorEl = null
        }
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
                                vertical = PopoverOriginVertical.bottom
                                horizontal = PopoverOriginHorizontal.left
                            }
                            transformOrigin {
                                vertical = PopoverOriginVertical.bottom
                                horizontal = PopoverOriginHorizontal.left
                            }
                        }
                        props.pathsWithDisplayName.map {
                            menuItem {
                                attrs {
                                    onClickFunction = handleCloseMenuItem
                                }
                                routeLink(it.second) { +it.first }
                            }
                        }
                    }

                    typography {
                        attrs {
                            variant = TypographyVariant.h6
                        }
                        +"run3wide"
                    }
                }
            }
        }
    }
}

package component

import kotlinx.css.WhiteSpace
import kotlinx.css.marginTop
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.whiteSpace
import kotlinx.css.width
import materialui.components.card.card
import materialui.components.cardcontent.cardContent
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledDiv
import styled.styledH1
import styled.styledH3
import styled.styledP

class Blog : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                marginTop = 25.px
                width = 25.pct
            }
            card {
                cardContent {
                    styledH1 {
                        +"Oi Mundo!"
                    }
                    styledH3 {
                        +"2020-12-30"
                    }
                    styledP {
                        css {
                            whiteSpace = WhiteSpace.preWrap
                        }
                        +FIRST_BLOG_POST
                    }
                }
            }
        }
    }

    companion object {
        private const val FIRST_BLOG_POST =
            """
Welcome to my blog! This is my first blog as well as my first personal website so this will be a work in progress for a while.
I'll post here as often as I can, hopefully daily. You'll likely encounter a mix of tech talk, racing, and anything else that is on my mind. Thanks for tagging along!

(I used the Brazilian Portuguese version of Hello World! Explanation to follow in a later post.)
"""
    }
}

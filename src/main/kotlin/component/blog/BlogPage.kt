package component.blog

import kotlin.js.Date
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
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
import react.setState
import styled.css
import styled.styledDiv
import styled.styledH1
import styled.styledP

interface BlogPageState : RState {
    var blogPosts: List<BlogPost>
}

class BlogPage : RComponent<RProps, BlogPageState>() {

    override fun BlogPageState.init() {
        val mainScope = MainScope()
        blogPosts = listOf()
        mainScope.launch {
            val fetchedBlogPosts = fetchBlogPosts()
            setState {
                blogPosts = fetchedBlogPosts
            }
        }
    }

    private suspend fun fetchBlogPosts(): List<BlogPost> =
        window.fetch("https://blog-api.run3wide.com/rest/blog-posts")
            .await()
            .json()
            .await()
            .unsafeCast<Array<BlogPost>>()
            .toList()

    override fun RBuilder.render() {
        styledDiv {
            css {
                marginTop = 25.px
                width = 25.pct
            }
            state.blogPosts.map {
                card {
                    cardContent {
                        styledH1 {
                            +it.title
                        }
                        styledP { +it.timestamp.convertToLocalTime() }
                        styledP {
                            css {
                                whiteSpace = WhiteSpace.preWrap
                            }
                            +it.text
                        }
                    }
                }
            }
        }
    }

    private fun String.convertToLocalTime(): String {
        val localDate = Date(this)
        return localDate.getMonth().getMonthName() + " " + localDate.getDate().toString() + ", " + localDate.getFullYear().toString()
    }

    private fun Int.getMonthName(): String {
        return arrayOf(
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        )[this]
    }
}

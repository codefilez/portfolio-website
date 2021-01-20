package utility

import CognitoAuth
import CognitoAuthSession
import CognitoAuthUserHandler
import external.auth.AuthOptions
import kotlinx.browser.window
import utility.EnvironmentUtility.getEnvironmentVariable

object AuthUtility {

    fun initialize(onUpdateAuthSession: (CognitoAuthSession) -> Unit) {
        val testAuth = getUserAuth(onUpdateAuthSession)
        val currentUrl = window.location.href
        testAuth.useCodeGrantFlow()
        testAuth.parseCognitoWebResponse(currentUrl)
    }

    fun getUserAuth(
        onUpdateAuthSession: (CognitoAuthSession) -> Unit
    ): CognitoAuth {
        val baseUri = getEnvironmentVariable("redirectBaseUrl")
        val clientId = getEnvironmentVariable("cognitoClientId")
        val auth = CognitoAuth(
            AuthOptions(
                clientId,
                "accounts.run3wide.com",
                "$baseUri/login/callback",
                "$baseUri/logout",
                arrayOf("openid")
            )
        )
        auth.userhandler = object : CognitoAuthUserHandler {
            override var onSuccess = onUpdateAuthSession
            override var onFailure = { _: Any -> console.log("Login failed!") }
        }
        return auth
    }
}

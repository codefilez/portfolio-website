@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
@file:JsModule("amazon-cognito-auth-js")
@file:JsNonModule

import org.w3c.dom.Storage
import kotlin.js.RegExp

external interface XDomainRequest {
    var responseText: String
    var timeout: Number
    var onprogress: () -> Unit
    var ontimeout: () -> Unit
    var onerror: () -> Unit
    var onload: () -> Unit
    fun open(method: String, url: String)
    fun send(data: String)
    fun abort()
}

external interface CognitoSessionData {
    var IdToken: CognitoIdToken?
        get() = definedExternally
        set(value) = definedExternally
    var RefreshToken: CognitoRefreshToken?
        get() = definedExternally
        set(value) = definedExternally
    var AccessToken: CognitoAccessToken?
        get() = definedExternally
        set(value) = definedExternally
    var TokenScopes: CognitoTokenScopes?
        get() = definedExternally
        set(value) = definedExternally
    var State: String?
        get() = definedExternally
        set(value) = definedExternally
}

@JsName("CognitoAuthOptions")
external interface CognitoAuthOptions {
    var ClientId: String
    var AppWebDomain: String
    var TokenScopesArray: Array<String>?
        get() = definedExternally
        set(value) = definedExternally
    var RedirectUriSignIn: String
    var RedirectUriSignOut: String
    var IdentityProvider: String?
        get() = definedExternally
        set(value) = definedExternally
    var UserPoolId: String?
        get() = definedExternally
        set(value) = definedExternally
    var AdvancedSecurityDataCollectionFlag: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface CognitoAuthUserHandler {
    var onSuccess: (authSession: CognitoAuthSession) -> Unit
    var onFailure: (err: Any) -> Unit
}

external interface `T$0` {
    @nativeGetter
    operator fun get(key: String): String?
    @nativeSetter
    operator fun set(key: String, value: String)
}

external interface CognitoConstants {
    var DOMAIN_SCHEME: String
    var DOMAIN_PATH_SIGNIN: String
    var DOMAIN_PATH_TOKEN: String
    var DOMAIN_PATH_SIGNOUT: String
    var DOMAIN_QUERY_PARAM_REDIRECT_URI: String
    var DOMAIN_QUERY_PARAM_SIGNOUT_URI: String
    var DOMAIN_QUERY_PARAM_RESPONSE_TYPE: String
    var DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER: String
    var DOMAIN_QUERY_PARAM_USERCONTEXTDATA: String
    var CLIENT_ID: String
    var STATE: String
    var SCOPE: String
    var TOKEN: String
    var CODE: String
    var POST: String
    var PARAMETERERROR: String
    var SCOPETYPEERROR: String
    var QUESTIONMARK: String
    var POUNDSIGN: String
    var COLONDOUBLESLASH: String
    var SLASH: String
    var AMPERSAND: String
    var EQUALSIGN: String
    var SPACE: String
    var CONTENTTYPE: String
    var CONTENTTYPEVALUE: String
    var AUTHORIZATIONCODE: String
    var IDTOKEN: String
    var ACCESSTOKEN: String
    var REFRESHTOKEN: String
    var ERROR: String
    var ERROR_DESCRIPTION: String
    var STRINGTYPE: String
    var STATELENGTH: Number
    var STATEORIGINSTRING: String
    var WITHCREDENTIALS: String
    var UNDEFINED: String
    var SELF: String
    var HOSTNAMEREGEX: RegExp
    var QUERYPARAMETERREGEX1: RegExp
    var QUERYPARAMETERREGEX2: RegExp
    var HEADER: `T$0`
}

open external class CognitoIdToken(IdToken: String) {
    open fun getJwtToken(): String
    open fun setJwtToken(idToken: String)
    open fun getExpiration(): Number
    open fun decodePayload(): Any?
}

open external class CognitoRefreshToken(RefreshToken: String) {
    open fun getToken(): String
    open fun setToken(refreshToken: String)
}

open external class CognitoAccessToken(AccessToken: String) {
    open fun getJwtToken(): String
    open fun setJwtToken(accessToken: String)
    open fun getExpiration(): Number
    open fun getUsername(): String
    open fun decodePayload(): Any?
}

open external class CognitoTokenScopes(TokenScopesArray: Array<String>) {
    open fun getScopes(): Array<String>
    open fun setTokenScopes(tokenScopes: Array<String>)
}

open external class CognitoAuthSession(sessionData: CognitoSessionData) {
    open fun getIdToken(): CognitoIdToken
    open fun setIdToken(IdToken: CognitoIdToken)
    open fun getRefreshToken(): CognitoRefreshToken
    open fun setRefreshToken(RefreshToken: CognitoRefreshToken)
    open fun getAccessToken(): CognitoAccessToken
    open fun setAccessToken(AccessToken: CognitoAccessToken)
    open fun getTokenScopes(): CognitoTokenScopes
    open fun setTokenScopes(tokenScopes: CognitoTokenScopes)
    open fun getState(): String
    open fun setState(State: String)
    open fun isValid(): Boolean
}

@JsName("CognitoAuth")
open external class CognitoAuth(options: CognitoAuthOptions) {
    open var userhandler: CognitoAuthUserHandler
    open fun getCognitoConstants(): CognitoConstants
    open fun getClientId(): String
    open fun getAppWebDomain(): String
    open fun getCurrentUser(): String
    open fun setUser(Username: String)
    open fun useCodeGrantFlow()
    open fun useImplicitFlow()
    open fun getSignInUserSession(): CognitoAuthSession
    open fun getUsername(): String
    open fun setUsername(Username: String)
    open fun getState(): String
    open fun setState(State: String)
    open fun getSession()
    open fun parseCognitoWebResponse(httpRequestResponse: String)
    open fun getCodeQueryParameter(map: Map<String, String>)
    open fun getTokenQueryParameter(map: Map<String, String>)
    open fun getCachedSession(): CognitoAuthSession
    open fun getLastUser(): String
    open fun cacheTokensScopes()
    open fun compareSets(set1: Set<Any>, set2: Set<Any>): Boolean
    open fun getHostName(url: String): String
    open fun getQueryParameters(url: String, splitMark: String): Map<String, String>
    open fun generateRandomString(length: Number, chars: String): String
    open fun clearCachedTokensScopes()
    open fun refreshSession(refreshToken: String)
    open fun makePOSTRequest(header: Any?, body: Any?, url: String, onSuccess: (responseText: String) -> Unit, onFailure: (responseText: String) -> Unit)
    open fun createCORSRequest(method: String, url: String): dynamic /* XMLHttpRequest | XDomainRequest */
    open fun onFailure(err: Any)
    open fun onSuccessRefreshToken(jsonData: String)
    open fun onSuccessExchangeForToken(jsonData: String)
    open fun launchUri(URL: String)
    open fun getSpaceSeperatedScopeString(): String
    open fun getFQDNSignIn(): String
    open fun signOut()
    open fun getFQDNSignOut(): String
    open fun getUserContextData(): String
    open fun isUserSignedIn(): Boolean
}

open external class DateHelper {
    open fun getNowString(): String
}

open external class StorageHelper {
    open fun getStorage(): Storage
}

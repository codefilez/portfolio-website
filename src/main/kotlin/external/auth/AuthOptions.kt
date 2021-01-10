package external.auth

import CognitoAuthOptions

class AuthOptions(
    override var ClientId: String,
    override var AppWebDomain: String,
    override var RedirectUriSignIn: String,
    override var RedirectUriSignOut: String,
    override var TokenScopesArray: Array<String>?,
) : CognitoAuthOptions

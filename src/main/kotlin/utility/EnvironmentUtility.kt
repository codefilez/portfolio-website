package utility

object EnvironmentUtility {

    private val IS_DEVELOPMENT = js("process.env.NODE_ENV") == "development"

    fun getEnvironmentVariable(variableName: String): String {
        return if (IS_DEVELOPMENT) {
            DEVELOPMENT_ENVIRONMENT_VARIABLES.getValue(variableName)
        } else PRODUCTION_ENVIRONMENT_VARIABLES.getValue(variableName)
    }

    private val PRODUCTION_ENVIRONMENT_VARIABLES: Map<String, String> = mapOf(
        "cognitoClientId" to "3ju4h479uvjjeu4nos3rnghihb",
        "redirectBaseUrl" to "https://run3wide.com",
    )

    private val DEVELOPMENT_ENVIRONMENT_VARIABLES: Map<String, String> = mapOf(
        "cognitoClientId" to "5fbjc4kmluinl38lg0e8k343al",
        "redirectBaseUrl" to "http://localhost:8081",
    )
}

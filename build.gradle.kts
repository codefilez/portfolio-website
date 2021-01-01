plugins {
    kotlin("js") version "1.4.21"
}

group = "com.run3wide"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
    maven { url = uri("https://dl.bintray.com/kotlin/kotlin-js-wrappers") }
    maven { url = uri("https://dl.bintray.com/subroh0508/maven") }
    maven { url = uri("https://kotlin.bintray.com/kotlinx/") }
}

dependencies {
    val kotlinMaterialUiVersion = "0.5.0-beta2"

    testImplementation(kotlin("test-js"))

    implementation("org.jetbrains", "kotlin-react", "16.13.1-pre.113-kotlin-1.4.0")
    implementation("org.jetbrains", "kotlin-styled", "1.0.0-pre.113-kotlin-1.4.0")
    implementation("org.jetbrains", "kotlin-react-dom", "16.13.1-pre.113-kotlin-1.4.0")
    implementation("org.jetbrains", "kotlin-react-router-dom", "5.2.0-pre.134-kotlin-1.4.10")
    implementation("org.jetbrains.kotlinx", "kotlinx-coroutines-core", "1.4.2")
    implementation("org.jetbrains.kotlinx", "kotlinx-datetime", "0.1.1")

    implementation("subroh0508.net.kotlinmaterialui", "core", kotlinMaterialUiVersion)
    implementation("subroh0508.net.kotlinmaterialui", "lab", kotlinMaterialUiVersion)

    implementation(npm("@material-ui/core", "^4.9.14"))
    implementation(npm("@material-ui/icons", "^4.11.2"))
}

kotlin {
    js(LEGACY) {
        browser {
            binaries.executable()
            webpackTask {
                cssSupport.enabled = true
            }
            runTask {
                cssSupport.enabled = true
            }
            testTask {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport.enabled = true
                }
            }
        }
    }
}

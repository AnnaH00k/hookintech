---
title: What are dependencies?
description: What are they in general and what is special about them in KMP? 
date: 2025-10-22
tags: [ KMP, dependencys]
---

## Introduction to Dependencies in Programming

Dependencies are external pieces of code or libraries that your program uses to perform specific tasks. Think of them as building blocks you borrow instead of reinventing the wheel every time. In programming, especially when starting with Kotlin Multiplatform (KMP), understanding dependencies helps you create efficient, reusable code for multiple platforms like Android, iOS, and web.

[multiplatform-dependencies](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-dependencies.html),   
[understanding-dependencies-in-programming](https://dev.to/sakai-nako/understanding-dependencies-in-programming-4201),     
[Understandig-Program-Dependencies.pdf](https://www.sei.cmu.edu/documents/1551/1990_007_001_15821.pdf)


## Dependencies in KMP

Kotlin Multiplatform allows sharing code across platforms, and its dependencies are designed for this flexibility. There are two main types: **multiplatform dependencies**, which work on all targets (like Android and iOS), and **platform-specific dependencies** for unique needs, such as iOS frameworks.

You add multiplatform dependencies in the `commonMain` source set, in a file called `build.gradle.kts`. The Kotlin plugin automatically propagates them to platform-specific sets like `androidMain` or `iosMain`. This avoids duplicating declarations, making your project cleaner and easier to maintain.

For platform-specific code, add dependencies directly to those source sets. For instance, use [CocoaPods](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-cocoapods-overview.html) for iOS-native libraries. This hybrid approach lets you leverage the best of each platform while sharing as much logic as possible.

[how-to-handle-platform-specific-dependencies-in-kotlin-multiplatform](https://www.andela.com/blog-posts/how-to-handle-platform-specific-dependencies-in-kotlin-multiplatform),    
[getting-started-with-kotlin-multiplatform](https://hub.telefonica.com/en/engineering/getting-started-with-kotlin-multiplatform)




## Managing Dependencies with Version Catalogs

A key feature in KMP is Gradle's version catalogs, which centralize dependency management in a single `libs.versions.toml` file. Define versions, libraries, and even bundles (groups of related dependencies) once, then reference them across your project with type-safe accessors like `libs.libraries.kotlinx.coroutines`.

This is special for KMP because it simplifies handling multiplatform setups, reducing errors from mismatched versions across targets. You can update a version in one place, and it applies everywhere, which is ideal for large, cross-platform apps.

Version catalogs support plugins too, ensuring consistent tooling. They promote scalability, especially when your project grows to include multiple modules.

[a-simple-guide-to-version-catalog-implementation-in-android](https://engineering.teknasyon.com/a-simple-guide-to-version-catalog-implementation-in-android-17d0ff3fd1f),    
[multiplatform-advanced-project-structure](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-advanced-project-structure.html#dependson-and-source-set-hierarchies),    
[gradle-version-catalogs-for-android-kmp-explained](https://blog.stackademic.com/gradle-version-catalogs-for-android-kmp-explained-38a370db0347),    
[migrate-to-catalogs](https://developer.android.com/build/migrate-to-catalogs)
[manage-dependencies-with-gradle-version-catalogs](https://cheonjaeung.com/posts/manage-dependencies-with-gradle-version-catalogs-en/)


## Best Practices for Beginners

Start by adding only essential dependencies to keep your project lightweight. Use official sources like Maven Central or JetBrains repository for KMP libraries. Tools like [klibs.io](https://klibs.io/?_cl=MTsxOzE7V01SVnNaOHlhWVFWejNudTZZdkh3VGFoYVV3bzlTMGpKNEdjSzJiRmhKMVU3SjhFTFVKSDNYWVFoclZKYjY4WTs=) help discover multiplatform options.

Test dependencies on all targets early to catch platform issues. For security, review library licenses and avoid outdated versions. 




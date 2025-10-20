---
title: Kotlin Multiplatform (KMP)
description: Programming cross Platform Applications with Kotlin Multiplatform (KMP)
date: 2025-09-04
tags: [Kotlin, KMP]
---

All developers have to make a decision when they start programming. Which Programming language to choose from. Which is the ultimate framework to build a plattform and bring it to a big variety of users.

Kotlin Multiplattform allows to create apps for Android, IOS,Web and Desktop.
What are the pros and cons of this programming environment?


| **Pros**                                                                                 | **Cons**                                                                          |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Effortless Simulator Testing**: On IOS,Android, Web and Desktop.                       |  Still **requires Mac** for iOS testing and deployment            |
| **Performance**: Near-native performance with shared business logic                      | **Platform-Specific Code**: Still need native code for platform-specific features |
| **Single Language**: Use Kotlin for all platforms                                        | **Learning Curve**: Requires understanding of multiple platform architectures     |
| **JetBrains Support**: Strong backing from JetBrains with regular updates                | **Debugging Complexity**: Cross-platform debugging can be more challenging        |
| **Gradual Adoption**: Can be adopted incrementally in existing projects                  | **Simultaneous testing**: Running 4 simulators at the same time are not possible on my 6 year old mac.       |



# Notes

### Getting started:

- https://kotlinlang.org/docs/multiplatform.html
- https://www.youtube.com/playlist?list=PLQkwcJG4YTCS55alEYv3J8CD4BXhqLUuk
- https://www.kotlinguide.com/gridview-in-kmp-compose-multiplatform/

### What is Gradle?

- The package manager

### How is the User Interface created?

UI Framework = Compose Multiplatform?

What are modifiers?
https://medium.com/@serhiihulenko/kmp-compose-modifier-b2cbbafaaa83

### How to change icon?

https://medium.com/@hunterfreas/changing-app-icon-in-kotlin-multiplatform-7b615568cd26
https://proandroiddev.com/building-deploying-a-simple-kmm-app-part-1-app-icons-8e8b739c7981

## Steps to Open and Run the KMP App on iOS

1. Find the Xcode project file:
   Navigate to the iosApp folder in your Android Studio project's file structure.
   Within this folder you will find the file iosApp.xcodeproj.
2. Open the project in Xcode:
   Right-click on the iosApp.xcodeproj file and select "Open in → Xcode".

## Kotlin Basics

### Follow the coding conventions:

https://kotlinlang.org/docs/coding-conventions.html

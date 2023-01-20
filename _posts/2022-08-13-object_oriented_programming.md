---
layout: post
title: 【Python】Object Oriented Programming
categories: Programming
description: Programming
keywords:  Python, Object Oriented Programming,
---

## Object Oreineted Programming

Programming languages designed primarily for OOP include: C++,Java,C#,Python,Ruby,PHP,Swift,JavaScript,Kotlin,Scala

```
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        
    def bark(self):
        print("Woof!")
        
    def display(self):
        print("Name: ", self.name)
        print("Breed: ", self.breed)

dog1 = Dog("Fido", "Golden Retriever")
dog1.bark()
dog1.display()
    
```

**Object**: In object-oriented programming, an object is a piece of data that has a set of properties (also known as attributes) and methods that can be used to interact with the data. Objects are instances of classes, which are templates or blueprints for creating objects.


**Class**: A class is a blueprint or template for creating objects. It defines the properties (attributes) and methods that an object of that class will have. A class defines the structure of the object, but it does not contain any specific data.


**Instance**: An instance is a specific object that is created from a class. When an object is created from a class, it is said to be an instance of that class. Each instance has its own unique properties, but all instances have the same methods and behaviors defined by the class.


**Method**: A method is a function that is defined within a class and is associated with an object. Methods define the behavior of the object, and they can be used to interact with the object's properties (attributes). Methods are typically used to retrieve or update the object's data.


The term 'object' is often used to refer both to actual data structures and to the general paradigm of object-oriented programming, we'll typically stick to the terms 'class' and 'instance' instead.


## Explanation

In this example, the Dog class is defined with two instance variables name and breed which are passed as arguments to the __init__ method. The __init__ method is a special method in Python classes that is called when an object of the class is created. The bark and display methods are also defined in the class.

We can create an object of the Dog class by calling it as a function and passing the required arguments, as you can see in the last line of the code dog1 = Dog("Fido", "Golden Retriever").

When we call the bark() method on the dog1 object, it will print "Woof!" to the console. The display() method prints the name and breed attributes of the dog1.

This example illustrates the basic concepts of OOP in Python: encapsulation of data and behavior within a class, and creating objects (instances) of that class.

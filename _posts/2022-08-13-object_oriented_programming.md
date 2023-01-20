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

**Object**: An object is a custom data structure that organizes and encapsulates variables and methods into a single data type. It is used near-interchangeably with “instance.”


**Class**: A custom data type comprised of multiple variables and/or methods. Instances or objects are created based on the template provided by the class.


**Instance**: A single set of values of a particular class. Classes may be comprised of multiple variables; an instance is a set of values for these variables. The term “instance” is often used interchangeably with the term “object”.


**Method**: A method is a programmed procedure that is defined as part of a class and included in any object of that class. A class (and thus an object) can have more than one method. Method = Function inside a class.

The term 'object' is often used to refer both to actual data structures and to the general paradigm of object-oriented programming, we'll typically stick to the terms 'class' and 'instance' instead.


## Explanation

In this example, the Dog class is defined with two instance variables name and breed which are passed as arguments to the __init__ method. The __init__ method is a special method in Python classes that is called when an object of the class is created. The bark and display methods are also defined in the class.

We can create an object of the Dog class by calling it as a function and passing the required arguments, as you can see in the last line of the code dog1 = Dog("Fido", "Golden Retriever").

When we call the bark() method on the dog1 object, it will print "Woof!" to the console. The display() method prints the name and breed attributes of the dog1.

This example illustrates the basic concepts of OOP in Python: encapsulation of data and behavior within a class, and creating objects (instances) of that class.

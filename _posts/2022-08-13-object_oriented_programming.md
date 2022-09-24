---
layout: post
title: 【Python】Object Oriented Programming
categories: Programming
description: Programming
keywords:  Python, Object Oriented Programming,
---

## Object Oreineted Programming

Programming languages designed primarily for OOP include: Pthon, Java, C++

```

class Person :
  def__inits__(self) :
    self.firstname = "[no first name]"
    self.lastname = "[no last name]"
    self.eyecolor = "[no eye color]"
    self.age = -1
    
```

**Object**: An object is a custom data structure that organizes and encapsulates variables and methods into a single data type. It is used near-interchangeably with “instance.”


**Class**: A custom data type comprised of multiple variables and/or methods. Instances or objects are created based on the template provided by the class.


**Instance**: A single set of values of a particular class. Classes may be comprised of multiple variables; an instance is a set of values for these variables. The term “instance” is often used interchangeably with the term “object”.


**Method**: A method is a programmed procedure that is defined as part of a class and included in any object of that class. A class (and thus an object) can have more than one method. Method = Function inside a class.

The term 'object' is often used to refer both to actual data structures and to the general paradigm of object-oriented programming, we'll typically stick to the terms 'class' and 'instance' instead.

__inits__ is called when we first created a new instance for a class. This initializes an instance of that class 

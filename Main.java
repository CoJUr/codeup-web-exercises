public class Main {
    public static void main(String[] args)  //main method. required step. entry point. only the string array arg may change.
    // e.g. main(String[] myStringArgs)
    {
        System.out.println("hello freeCodeCamp community my name is Patrick");
    }


}


//class syntax:
class ClassName {
//fields - variables. rep the STATE of obj. store data. how the obj looks/properties it has.
//methods - rep the BEHAVior of the obj. perform ops. what it does.
}

//create class Main and store a variable y with the value 2
public class Main {

    int y = 2;

}


public class Number {

    int y = 10;

    public static void main(String[] args) {

        Number myObj = new Number();

        System.out.println((myObj.y)

    }

}


//====access modifiers==== DEFAULT     PUBLIC     PRIVATE    PROTECTED
//set the accessibility of classes, methods and other members. determine whether a field or method of a class can be used
//by another method of another sub/class. access restriction.
//if none declared for a class, method or data member, automatically takes DEFAULT modifier


//DEFAULT aka package-private. used to make all members in 1 package visible, but only accessible in the same package.
// USE CASE:
class SampleClass {
    void output() {
        System.out.println('Hello World this is an intro to OOP -') // outputs everything in quotes
    }
}

class Main {
    public static void main(String args[]) {
        SampleClass obj = new SampleClass(); //allows program access to the class with the default access mod
        obj.output(); // allows program access to class METHOD with the default access mod
    }
}


//PUBLIC access modifier allows a class, method or data field to be accessed from any class or package in a Java program.
//the modifier is accessible within and outside the package. generally does not restrict the entity at all.
//USE CASE:    --     Car.java file      --
public class Car {
    //public variable
    public int tireCount;

    //public method
    public void display() {
        System.out.println('I am a Car.');
        System.out.println("I have " + tireCount + " tires.")
    }
}

//    -- Main.java       --
public class Main {
    public static void main(String[] args) {
        //access the public class Car from the Main class
        Car car = new Car()

        //access the public variable tireCount from the Main class
        car.tireCount = 4;
        //access the public method display() from the Main class
        car.display();

    }

}                          // output =       I am a Car. \n I have 4 tires.

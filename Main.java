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


//===== constructors    =====
public class Main {
    int a;  //class attribute   variable a

    public Main() {  //construcor for Main

        a = 3 * 3; //initial value for variable a set to 9
    }

public static void main(String[] args) {
        //execution starts.  public= globally available method.
    // static makes method callable by complier without creating an object. if non static, JVM has to instantiate when calling method
    // void means method returns nothing. the Java program terminates soon as the method does.
    //main is identifier for JVM to find starting point of the program
    //String[] args : an array of strings. stores command line arguments.


        Main myObj = new Main(); //create an object of the class Main. class constructor called via function

        System.out.println(myObj.a); // prints 9
}

}


//Methods examples
class Main {

    //create method named divideNumbers taking params x and y
    public int divideNumbers(int x, int y) {
        int division = x/y ;
        //return value
        return division;
    }

    public static void main(String[] args) {

        int firstNumber = 4;
        int secondNumber = 2;

        //create an object of Main
        Main obj = new Main();
        //calling method
        int result = obj.divideNumbers(firstNumber, secondNumber);
        System.out.println("Dividing " + firstNumber + " by " + secondNumber + " is: " + result);

    }

} //outputs   Dividing 4 by 2 is: 2


//O-OP   4 MAIN PRINCIPALS/PILLARS:     ENCAPSULATION    INHERITANCE     ABSTRACTION      POLYMORPHISM
//ENCAPSULATION and information hiding
//Encapsulation = wrap your data under a single unit. Prevents access of data from code outside.
// hide 'sensitive' data by 1) declaring variables/attributes as private and 2) use public get+set methods to access/update a private var
//information hiding is abt protecting from inadvertent change throughout the program. closely associated w encapsulation.
public class Student {
    private String name;   //restricted access

    public String getName() {   //getter
        return name;
    }

    public void setName(String newName) { //setter
        this.name = newName;
    }
}


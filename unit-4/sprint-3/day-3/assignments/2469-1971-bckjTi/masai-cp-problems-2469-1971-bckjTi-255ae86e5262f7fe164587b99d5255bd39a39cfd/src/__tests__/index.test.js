//get deatils test cases

import { iPhone1, iPhone2, iPhone3, Iphone4 } from "../question1";
import { animal } from "../question2";
import { AnimalCF } from "../question3";
import { AnimalES6 } from "../question4";

global.score = 1;

describe("Test cases for question1.js", function () {
  test("factory function iPhone1 should create iPhone objects in bulk quantity", () => {
    const iphoneData = iPhone1(
      2,
      "C34Y89KLPW",
      6.5,
      "Android",
      "256GB",
      "Silver",
      "95mm",
      "12.0 MP"
    );

    expect(typeof iphoneData).toBe("object");
    expect(iphoneData.ASIN).toBe(2);
    expect(iphoneData.color).toBe("C34Y89KLPW");
    expect(iphoneData.display).toBe(6.5);
    expect(iphoneData.camera).toBe("Android");

    expect(iphoneData.dial()).toBe("tring.. tring...");
    expect(iphoneData.sendMessage()).toBe("Sending message...");
    expect(iphoneData.cameraClick()).toBe("Camera clicked");

    const iphoneData1 = iPhone1(
      3,
      "F56Z12MNXQ",
      6.1,
      "iOS",
      "128GB",
      "Rose Gold",
      "88mm",
      "16.0 MP"
    );

    expect(typeof iphoneData1).toBe("object");
    expect(iphoneData1.ASIN).toBe(3);
    expect(iphoneData1.color).toBe("F56Z12MNXQ");
    expect(iphoneData1.display).toBe(6.1);
    expect(iphoneData1.camera).toBe("iOS");

    expect(iphoneData1.dial()).toBe("tring.. tring...");
    expect(iphoneData1.sendMessage()).toBe("Sending message...");
    expect(iphoneData1.cameraClick()).toBe("Camera clicked");

    global.score += 1;
  }); //1
  test("factory function iPhone2 should create iPhone objects in bulk quantity", () => {
    const iphoneData = iPhone2(
      4,
      "D78P90QRST",
      6.0,
      "Android",
      "128GB",
      "Black",
      "92mm",
      "10.0 MP",
      "5.2"
    );

    expect(typeof iphoneData).toBe("object");
    expect(iphoneData.ASIN).toBe(4);
    expect(iphoneData.color).toBe("D78P90QRST");
    expect(iphoneData.display).toBe(6.0);
    expect(iphoneData.camera).toBe("Android");

    expect(iphoneData.dial()).toBe("tring.. tring...");
    expect(iphoneData.sendMessage()).toBe("Sending message...");
    expect(iphoneData.cameraClick()).toBe("Camera clicked");

    const iphoneData1 = iPhone2(
      5,
      "E12R34UVWX",
      6.3,
      "IOS",
      "256GB",
      "Gold",
      "87mm",
      "8.0 MP",
      "4.0"
    );

    expect(typeof iphoneData1).toBe("object");
    expect(iphoneData1.ASIN).toBe(5);
    expect(iphoneData1.color).toBe("E12R34UVWX");
    expect(iphoneData1.display).toBe(6.3);
    expect(iphoneData1.camera).toBe("IOS");

    expect(iphoneData1.dial()).toBe("tring.. tring...");
    expect(iphoneData1.sendMessage()).toBe("Sending message...");
    expect(iphoneData1.cameraClick()).toBe("Camera clicked");

    global.score += 1;
  }); //1
  test("Constructor Function iPhone3 should create iPhone objects in bulk quantity ", () => {
    let iphoneData = {};
    iPhone3.call(
      iphoneData,
      6,
      "G23M45YZAB",
      6.4,
      "Android",
      "64GB",
      "White",
      "91mm",
      "13.0 MP",
      "5.0"
    );

    expect(typeof iphoneData).toBe("object");
    expect(iphoneData.ASIN).toBe(6);
    expect(iphoneData.color).toBe("G23M45YZAB");
    expect(iphoneData.display).toBe(6.4);
    expect(iphoneData.camera).toBe("Android");
    expect(iphoneData.bluetooth).toBe("64GB");

    expect(iphoneData.dial()).toBe("tring.. tring...");
    expect(iphoneData.sendMessage()).toBe("Sending message...");
    expect(iphoneData.cameraClick()).toBe("Camera clicked");
    expect(iphoneData.connectBluetooth()).toBe(
      "Bluetooth connected successfully..."
    );

    const iphoneData1 = {};
    iPhone3.call(
      iphoneData1,
      7,
      "H56N78CDEF",
      6.2,
      "IOS",
      "128GB",
      "Silver",
      "93mm",
      "12.0 MP",
      "4.2"
    );

    expect(typeof iphoneData1).toBe("object");
    expect(iphoneData1.ASIN).toBe(7);
    expect(iphoneData1.color).toBe("H56N78CDEF");
    expect(iphoneData1.display).toBe(6.2);
    expect(iphoneData1.camera).toBe("IOS");
    expect(iphoneData1.bluetooth).toBe("128GB");

    expect(iphoneData1.dial()).toBe("tring.. tring...");
    expect(iphoneData1.sendMessage()).toBe("Sending message...");
    expect(iphoneData1.cameraClick()).toBe("Camera clicked");
    expect(iphoneData1.connectBluetooth()).toBe(
      "Bluetooth connected successfully..."
    );

    global.score += 1;
  }); //1
  test("Using ES6 classes Iphone4 should create iPhone objects in bulk quantity", () => {
    const iphoneData = new Iphone4(
      8,
      "I12P34QRST",
      6.1,
      "Android",
      "256GB",
      "Blue",
      "94mm",
      "16.0 MP",
      "5.1"
    );

    expect(typeof iphoneData).toBe("object");
    expect(iphoneData.ASIN).toBe(8);
    expect(iphoneData.color).toBe("I12P34QRST");
    expect(iphoneData.display).toBe(6.1);
    expect(iphoneData.camera).toBe("Android");
    expect(iphoneData.bluetooth).toBe("256GB");

    expect(iphoneData.dial()).toBe("tring.. tring...");
    expect(iphoneData.sendMessage()).toBe("Sending message...");
    expect(iphoneData.cameraClick()).toBe("Camera clicked");
    expect(iphoneData.connectBluetooth()).toBe(
      "Bluetooth connected successfully..."
    );

    const iphoneData1 = new Iphone4(
      9,
      "J45R67UVWX",
      6.0,
      "IOS",
      "64GB",
      "Rose Gold",
      "89mm",
      "8.0 MP",
      "4.0"
    );

    expect(typeof iphoneData1).toBe("object");
    expect(iphoneData1.ASIN).toBe(9);
    expect(iphoneData1.color).toBe("J45R67UVWX");
    expect(iphoneData1.display).toBe(6.0);
    expect(iphoneData1.camera).toBe("IOS");
    expect(iphoneData1.bluetooth).toBe("64GB");

    expect(iphoneData1.dial()).toBe("tring.. tring...");
    expect(iphoneData1.sendMessage()).toBe("Sending message...");
    expect(iphoneData1.cameraClick()).toBe("Camera clicked");
    expect(iphoneData1.connectBluetooth()).toBe(
      "Bluetooth connected successfully..."
    );

    global.score += 1;
  }); //1
});

describe("Test cases for question2.js", () => {
  test("factory function that can be used to create animal objects in bulk quantity", () => {
    const animal2 = animal(6, true);
    expect(animal2.noOfLegs).toBe(6);
    expect(animal2.vegetarian).toBe(true);

    expect(animal2.eat()).toBe("eating...");
    expect(animal2.greet()).toContain("6");
    expect(animal2.greet()).toContain("Hi");
    expect(animal2.greet()).toContain("legs");

    global.score += 1;
  }); //1
});

describe("Test cases for question3.js", () => {
  test("Convert the `animal` factory function to a constructor function `AnimalCF`", () => {
    let animal3 = new AnimalCF(2, false);
    expect(animal3.noOfLegs).toBe(2);
    expect(animal3.vegetarian).toBe(false);

    expect(animal3.eat()).toBe("eating...");
    expect(animal3.greet()).toContain("2");
    expect(animal3.greet()).toContain("Hi");
    expect(animal3.greet()).toContain("legs");
    global.score += 1;
  }); //1
});

describe("Test cases for question4.js", () => {
  test("Convert the `animal` factory function to an ES6 class `AnimalES6`", () => {
    const animal4 = new AnimalES6(5, true);
    expect(animal4.noOfLegs).toBe(5);
    expect(animal4.vegetarian).toBe(true);

    expect(animal4.eat()).toBe("eating...");
    expect(animal4.greet()).toContain("5");
    expect(animal4.greet()).toContain("Hi");
    expect(animal4.greet()).toContain("legs");
    global.score += 1;
  }); //1
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

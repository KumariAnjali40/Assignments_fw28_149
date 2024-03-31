import { grand_father, father, son, Mammal1 } from "../question1";
import { Mammal2, createHuman, createEmployee } from "../question2";

global.score = 1;

//test cases for problem -1
describe("Family Tree Prototype Chain", () => {
  test("Father object should have required properties.", () => {
    expect(father.height).toBe("tall");
    expect(father.skin_tone).toBe("brown");
    expect(father.hair_color).toBe("black");
    expect(father.hair_type).toBe("straight");
    expect(father.skill).toBe("business");
    expect(father.dimple).toBe(true);
    global.score += 1;
  });

  test("Son object should have required properties.", () => {
    expect(son.height).toBe("short");
    expect(son.skin_tone).toBe("brown");
    expect(son.hair_color).toBe("blond");
    expect(son.hair_type).toBe("straight");
    expect(son.skill).toBe("coding");
    expect(son.dimple).toBe(true);
    global.score += 1;
  });

  test("Property inheritance : check properties in son should not affect father or grandfather", () => {
    son.height = "tall";
    expect(son.height).toBe("tall");
    expect(father.height).toBe("tall");
    expect(grand_father.height).toBe("tall");

    global.score += 1;
  });
  test("Check protptype chaining of Son to Father", () => {
    expect(son.__proto__ == father).toBe(true);

    global.score += 1;
  });
  test("Check protptype chaining of Father to Grandfather", () => {
    expect(father.__proto__ == grand_father).toBe(true);
    global.score += 1;
  });

});

//test cases for problem -2
describe("Mammal1 Factory Function", () => {
  const dog = new Mammal1(true, true, "warm");

  test("check Mammal1 has required  properties", () => {
    expect(dog.has_skeliton).toBe(true);
    expect(dog.has_fur).toBe(true);
    expect(dog.blood_type).toBe("warm");
    global.score += 1;
  });

  test("check Mammal1 has method makeSound", () => {
    expect(dog.makeSound()).toContain("Mammal1 is making sound");
    global.score += 1;
  });

  test("check Mammal1 has method canEat", () => {
    expect(dog.canEat("Dog")).toContain("Dog can eat");
    global.score += 1;
  });

});

//test cases for problem -3

describe("test cases of Mammal2 Function", () => {
  const exampleMammal = new Mammal2(true, true, "A");

  test("Mammal2 should have required properties.", () => {
    expect(exampleMammal.has_skeliton).toBe(true);
    expect(exampleMammal.has_fur).toBe(true);
    expect(exampleMammal.blood_type).toBe("A");
    global.score += 1;
  });

  test("check Mammal2 makeSound method", () => {
    expect(exampleMammal.makeSound()).toBe("Mammal2 is making sound.");
    global.score += 1;
  });

  test("check Mammal2 canEat method", () => {
    expect(exampleMammal.canEat("Example")).toBe("Example can eat.");
    global.score += 1;
  });

});

describe("testcases for createHuman Function", () => {
  const exampleHuman = new createHuman(
    true,
    true,
    "A",
    "Alice",
    160,
    "Fair",
    "Female",
    "Curly"
  );

  test("check Human properties", () => {
    expect(exampleHuman.has_skeliton).toBe(true);
    expect(exampleHuman.has_fur).toBe(true);
    expect(exampleHuman.blood_type).toBe("A");
    expect(exampleHuman.name).toBe("Alice");
    expect(exampleHuman.height).toBe(160);
    expect(exampleHuman.skintone).toBe("Fair");
    expect(exampleHuman.gender).toBe("Female");
    expect(exampleHuman.hair_type).toBe("Curly");
    global.score += 1;
  });

  test("check Human makeSound method", () => {
    expect(exampleHuman.makeSound()).toContain("Mammal2 is making sound");
    global.score += 1;
  });

  test("check Human canEat method", () => {
    expect(exampleHuman.canEat("Alice")).toContain("Alice can eat");
    global.score += 1;
  });

  test("check Human canSpeak method", () => {
    expect(exampleHuman.canSpeak()).toContain("Alice can speak");
    global.score += 1;
  });

  test("check Human canDream method", () => {
    expect(exampleHuman.canDream()).toContain("Alice can dream");
    global.score += 1;
  });

  test("Check protptype chaining of createHuman to Mammal2", () => {
    expect(createHuman.prototype.__proto__ == Mammal2.prototype).toBe(true);
    global.score += 1;
  });
});
describe("Test cases for Employee Functions", () => {
  const employee = new createEmployee(
    true,
    true,
    "A",
    "John",
    180,
    "Fair",
    "Male",
    "Straight",
    50000,
    "Manager",
    "5 years"
  );

  test("check Employee properties", () => {
    expect(employee.has_skeliton).toBe(true);
    expect(employee.has_fur).toBe(true);
    expect(employee.blood_type).toBe("A");
    expect(employee.name).toBe("John");
    expect(employee.height).toBe(180);
    expect(employee.skintone).toBe("Fair");
    expect(employee.gender).toBe("Male");
    expect(employee.hair_type).toBe("Straight");
    expect(employee.salary).toBe(50000);
    expect(employee.position).toBe("Manager");
    expect(employee.experience).toBe("5 years");
    global.score += 1;
  });

  test("check Employee makeSound method", () => {
    expect(employee.makeSound()).toContain("Mammal2 is making sound");
    global.score += 1;
  });

  test("check Employee canSpeak method", () => {
    expect(employee.canSpeak()).toContain("John can speak");
    global.score += 1;
  });

  test("check Employee canDream method", () => {
    expect(employee.canDream()).toContain("John can dream");
    global.score += 1;
  });

  test("check Employee handleTeam method", () => {
    expect(employee.handleTeam()).toContain("John can handle team");
    global.score += 1;
  });

  test("check Employee doMarketing method", () => {
    expect(employee.doMarketing()).toBe("John is good at marketing.");
    global.score += 1;
  });

  test("check Prototype chain of Employee", () => {
    expect(employee.hasOwnProperty("makeSound")).toBe(false);
    expect(employee.hasOwnProperty("canEat")).toBe(false);
    expect(createHuman.prototype.isPrototypeOf(employee)).toBe(true);
    global.score += 1;
  });

  test("Check protptype chaining of createEmployee to createHuman", () => {
    expect(createEmployee.prototype.__proto__ == createHuman.prototype).toBe(
      true
    );
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

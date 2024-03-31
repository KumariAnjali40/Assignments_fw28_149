import data from "../../submissionData.json"; // do not create this file
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    let isEmptyTemplate = {
      name: false,
      gender: false,
      email: false,
      phone: false,
    };
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check the Name Submission`, () => {
        cy.visit(url);
        cy.get("#name").clear().type("Sourav");
        cy.get("#name-btn").click();
        cy.get("#dName")
          .contains("Sourav")
          .then(() => {
            acc_score += 2;
            isEmptyTemplate.name = true;
          });
      }); // 2

      it(`Check the Gender Submission`, () => {
        cy.get("#gender").select("male");
        cy.get("#gender-btn").click();
        cy.get("#dGender")
          .contains("male")
          .then(() => {
            acc_score += 1;
            isEmptyTemplate.gender = true;
          });
      }); //1

      it(`Check the Email Submission`, () => {
        cy.get("#email").clear().type("s@gmail.com");
        cy.get("#email-btn").click();
        cy.get("#dEmail")
          .contains("s@gmail.com")
          .then(() => {
            acc_score += 1;
            isEmptyTemplate.email = true;
          });
      }); //1

      it(`Check the Phone Submission`, () => {
        cy.get("#mobile").clear().type(1234);
        cy.get("#mobile-btn").click();
        cy.get("#dMobile")
          .contains(1234)
          .then(() => {
            acc_score += 1;
            isEmptyTemplate.phone = true;
          });
      }); //1

      it(`Form Reset`, () => {
        cy.get("#resetForm-btn").click();
        cy.get('input[name="email"]').then(($text) => {
          const txt = $text.text();
          expect(isEmptyTemplate.email).to.eq(true);
          expect(txt).to.eq("");
        });
        cy.get('input[name="name"]').then(($text) => {
          const txt = $text.text();
          expect(isEmptyTemplate.name).to.eq(true);
          expect(txt).to.eq("");
        });
        cy.get('input[name="mobile"]').then(($text) => {
          const txt = $text.text();
          expect(isEmptyTemplate.phone).to.eq(true);
          expect(txt).to.eq("");
        });
        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it(`Check the h1 reset part`, () => {
        cy.get("#resetText-btn").click();
        cy.get("#dName").then((el) => {
          expect(isEmptyTemplate.name).to.eq(true);
          expect(el[0].textContent).to.eq("");
        });
        cy.get("#dMobile").then((el) => {
          expect(isEmptyTemplate.phone).to.eq(true);
          expect(el[0].textContent).to.eq("");
        });
        cy.get("#dGender").then((el) => {
          expect(isEmptyTemplate.gender).to.eq(true);
          expect(el[0].textContent).to.eq("");
        });
        cy.get("#dEmail").then((el) => {
          expect(isEmptyTemplate.email).to.eq(true);
          expect(el[0].textContent).to.eq("");
        });
        cy.then(() => {
          acc_score += 2;
        });
      }); //2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

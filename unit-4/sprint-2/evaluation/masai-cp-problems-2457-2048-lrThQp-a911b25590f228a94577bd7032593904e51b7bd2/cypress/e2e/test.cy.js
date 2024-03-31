import data from "../../submissionData.json";
//import "cypress-localstorage-commands";
// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  arts: [
    {
      id: 1,
      title: "Starry Night",
      artist: "Vincent van Gogh",
      year: 1889,
      medium: "Oil on Canvas",
      price: "1000",
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/StarryNight.jpg",
    },
    {
      id: 2,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
      medium: "Oil on Panel",
      price: 8600,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/MonaLisa.jpg",
    },
    {
      id: 3,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: 1931,
      medium: "Oil on Canvas",
      price: 5750,
      details: {
        paintbrushes: ["Flat", "Fan"],
        solvents: ["Turpentine", "Acetone"],
      },
      image: "./server-files/images/ThePersistenceofMemory.jpg",
    },
    {
      id: 4,
      title: "Starry Night Over the Rhône",
      artist: "Vincent van Gogh",
      year: 1888,
      medium: "Oil on Canvas",
      price: 13000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/StarryNightOvertheRhône.jpg",
    },
    {
      id: 5,
      title: "The Scream",
      artist: "Edvard Munch",
      year: 1893,
      medium: "Tempera on Canvas",
      price: 12000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheScream.jpg",
    },
    {
      id: 6,
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 89000,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/TheBirthofVenus.jpg",
    },
    {
      id: 7,
      title: "Guernica",
      artist: "Pablo Picasso",
      year: 1937,
      medium: "Oil on Canvas",
      price: 20000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/Guernica.jpg",
    },
    {
      id: 8,
      title: "The Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: 1665,
      medium: "Oil on Canvas",
      price: 1000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/TheGirlwithaPearlEarring.jpg",
    },
    {
      id: 9,
      title: "Hare",
      artist: "Edvard Munch",
      year: 1922,
      medium: "Oil on Canvas",
      price: 1200,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/hare.jpg",
    },
    {
      id: 10,
      title: "Nighthawks",
      artist: "edward hopper",
      year: 1495,
      medium: "Fresco",
      price: 8000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/Nighthawks.jpg",
    },
    {
      id: 11,
      title: "cafe terrace at night",
      artist: "van gogh",
      year: 1931,
      medium: "Oil on Canvas",
      price: 57500,
      details: {
        paintbrushes: ["Flat", "Fan"],
        solvents: ["Turpentine", "Acetone"],
      },
      image: "./server-files/images/CaféTerraceAtNight.png",
    },
    {
      id: 12,
      title: "Sistine Chapel Ceiling",
      artist: "michelangelo",
      year: 1930,
      medium: "Oil on Beaverboard",
      price: 400000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/SistineChapelCeiling.jpg",
    },
    {
      id: 13,
      title: "The Night Watch",
      artist: "Rembrandt",
      year: 1642,
      medium: "Oil on Canvas",
      price: 900000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/thenightwatch.png",
    },
    {
      id: 14,
      title: "Wanderer Above The Sea Of Fog",
      artist: "Caspar David Friedrich",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 890,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/WandererAboveTheSeaOfFog.jpg",
    },
    {
      id: 15,
      title: "Water Lilies",
      artist: "Claude Monet",
      year: 1919,
      medium: "Oil on Canvas",
      price: 5000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/WaterLilies.jpg",
    },
    {
      id: 16,
      title: "Whistler Mother",
      artist: "James McNeill Whistler",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 85000,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/Whistler’sMother.jpg",
    },
    {
      id: 17,
      title: "The Flower Carrier",
      artist: "Diego Rivera",
      year: 1888,
      medium: "Oil on Canvas",
      price: 1250000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheFlowerCarrier.jpg",
    },
    {
      id: 18,
      title: "Impression, Sunrise",
      artist: "Edvard Munch",
      year: 1893,
      medium: "Tempera on Canvas",
      price: 11500,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/ImpressionSunrise.jpg",
    },
    {
      id: 19,
      title: "A Sunday Afternoon on the Island of La Grande Jatte",
      artist: "Georges Seurat",
      year: 1665,
      medium: "Oil on Canvas",
      price: 95000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image:
        "./server-files/images/ASundayAfternoonontheIslandofLaGrandeJatte.jpg",
    },
    {
      id: 20,
      title: "The Night Watch",
      artist: "Rembrandt van Rijn",
      year: 1930,
      medium: "Tempera on Canvas",
      price: 380000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheNightWatch.jpg",
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      // cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    // beforeEach(() => {
    //   cy.restoreLocalStorage();
    // });
    // afterEach(() => {
    //   cy.saveLocalStorage();
    // });
    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const numOfArts = 5;
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(".card-list").children().should("have.length", numOfArts);
        cy.get(cards)
          .should("have.length", numOfArts)
          .first()
          .should("contain", mock.arts[0].title);
        cy.get(cards)
          .eq(Math.ceil(numOfArts / 2))
          .should("contain", mock.arts[Math.ceil(numOfArts / 2)].title);
        cy.get(cards)
          .should("have.length", numOfArts)
          .last()
          .should("contain", mock.arts[numOfArts - 1].title);
        cy.then(() => {
          acc_score += 3;
        });
      });
    }); // 3
    it("Low-to-high Sorts as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-low-to-high").click();
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each(($el) => {
              arr.push(+$el.find(".card-price").text());
            })
            .then(() => {
              const isSorted = arr.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("high-to-low Sorts as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-high-to-low").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-price").text());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#filter-Tempera-on-Canvas").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "Tempera on Canvas"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-Oil-on-Canvas").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "Oil on Canvas"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    // it("Low-to-high Sorts as expected with pagination", () => {
    //   cy.intercept("GET", "**/arts**").as("getArts");
    //   cy.visit(url);
    //   cy.wait("@getArts").then(() => {
    //     cy.get("#pagination-wrapper").children().should("have.length", 4);
    //     const cards = ".data-list-wrapper .card-list .card";
    //     cy.get("#sort-low-to-high").click();
    //     cy.wait(500).then(() => {
    //       cy.get("#pagination-wrapper").children().should("have.length", 4);
    //       let arr = [];
    //       cy.get(cards)
    //         .each(($el) => {
    //           arr.push(+$el.find(".card-price").text());
    //         })
    //         .then(() => {
    //           // console.log(arr, arr.length);
    //           const isSorted = arr.reduce(
    //             (n, item) => n !== false && item >= n && item
    //           );
    //           expect(!!isSorted).to.be.true;
    //           expect(arr.length).to.be.greaterThan(0);
    //         });
    //     });

    //     cy.get("#pagination-wrapper").children().last().click();
    //     cy.wait(500).then(() => {
    //       let arr2 = [];
    //       cy.get(cards)
    //         .each(($el) => {
    //           arr2.push(+$el.find(".card-price").text());
    //         })
    //         .then(() => {
    //           // console.log(arr, arr.length);
    //           const isSorted = arr2.reduce(
    //             (n, item) => n !== false && item >= n && item
    //           );
    //           expect(!!isSorted).to.be.true;
    //           expect(arr2.length).to.be.greaterThan(0);
    //         });
    //     });

    //     cy.then(() => {
    //       acc_score += 1;
    //     });
    //   });
    // }); // 1
    // it("high-to-low Sorts as expected with pagination", () => {
    //   cy.intercept("GET", "**/arts**").as("getArts");
    //   cy.visit(url);
    //   cy.wait("@getArts").then(() => {
    //     cy.get("#pagination-wrapper").children().should("have.length", 4);
    //     const cards = ".data-list-wrapper .card-list .card";
    //     cy.get("#sort-high-to-low").click();
    //     cy.wait(500).then(() => {
    //       cy.get("#pagination-wrapper").children().should("have.length", 4);
    //       let arr2 = [];
    //       cy.get(cards)
    //         .each(($el) => {
    //           arr2.push(+$el.find(".card-price").text());
    //         })
    //         .then(() => {
    //           //console.log(arr2, arr2.length);
    //           const isSorted = arr2.reduce(
    //             (n, item) => n !== false && item <= n && item
    //           );
    //           expect(!!isSorted).to.be.true;
    //           expect(arr2.length).to.be.greaterThan(0);
    //         });
    //     });

    //     cy.get("#pagination-wrapper").children().last().click();
    //     cy.wait(500).then(() => {
    //       let arr3 = [];
    //       cy.get(cards)
    //         .each(($el) => {
    //           arr3.push(+$el.find(".card-price").text());
    //         })
    //         .then(() => {
    //           const isSorted = arr3.reduce(
    //             (n, item) => n !== false && item <= n && item
    //           );
    //           expect(!!isSorted).to.be.true;
    //           expect(arr3.length).to.be.greaterThan(0);
    //         });
    //     });

    //     cy.then(() => {
    //       acc_score += 1;
    //     });
    //   });
    // }); // 1
    it("Filters as expected with pagination", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        cy.get("#filter-Tempera-on-Canvas").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 2);
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "Tempera on Canvas"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-Oil-on-Canvas").click();
        cy.wait(500).then((res) => {
          cy.get("#pagination-wrapper").children().should("have.length", 3);
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "Oil on Canvas"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("check for pagination functionality", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 5);
          cy.get(".card-list").children().first().contains("Whistler Mother");
          cy.get(".card-list")
            .children()
            .first()
            .contains("James McNeill Whistler");
          cy.get(".card-list").children().last().contains("The Night Watch");
          cy.get(".card-list").children().last().contains("Rembrandt van Rijn");
        });

        cy.then(() => {
          acc_score += 2;
        });
      });
    }); //2

    it("check add to cart functionality", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));
      

      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .last()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true });
        cy.wait(200).then(() => {
          expect("added to cart").to.contain(alerted);
          cy.then(() => {
            acc_score += 2;
          });
        });
      });
    });
    it("check add to cart not able to add duplicate art in cart functionality", () => {     
      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);

      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(cards)
          .first()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true });
        cy.wait(200).then(() => {
          expect(alerted).to.equal("added to cart");
          cy.get(cards)
            .first()
            .find(".card-button")
            .should("be.visible")
            .should("not.be.disabled")
            .click({ force: true });
          cy.wait(200).then(() => {
            expect(alerted).to.equal("Already in Cart");

            cy.then(() => {
              acc_score += 2;
            });
          });
        });
      });
    });

    it("should increase cart no. after adding an art to the cart", () => {
     
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .last()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true });
        cy.wait(200).then(() => {
          cy.get("#cart").should("contain.text", "1");
          cy.then(() => {
            acc_score += 1;
          });
        });
      });
    });

    it("check the localStorage after add to cart functionality", () => {    
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);

      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .first()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true })
          .then(() => {
            cy.get(cards)
              .last()
              .find(".card-button")
              .should("be.visible")
              .should("not.be.disabled")
              .click({ force: true });
            cy.wait(200).then(() => {
              let cartData = JSON.parse(localStorage.getItem("cartData"));
              console.log(cartData);
              expect(cartData).to.have.lengthOf(2);
              cy.then(() => {
                acc_score += 2;
              });
            });
          });
      });
    });

    it("Ensure that the cart page displays the necessary details", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);     
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .first()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true });

        cy.get(cards)
          .last()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true });

        cy.get("#navbar")
          .find("a")
          .should("contain", "Checkout cart")
          .last()
          .click();

        cy.get("#tbody").should("exist");
        cy.get("#tbody tr").should("have.length", 2);

        cy.contains("Starry Night")
          .closest("tr")
          .find("td")
          .eq(0)
          .find("img")
          .should("have.attr", "src")
          .and("include", "./server-files/images/StarryNight.jpg");
        cy.contains("Vincent van Gogh").should("exist");
        cy.contains("1889").should("exist");
        cy.contains("Oil on Canvas").should("exist");
        cy.contains("1000").should("exist");
        cy.contains("Round").should("exist");
        cy.contains("Flat").should("exist");

        cy.contains("The Scream")
          .closest("tr")
          .find("td")
          .eq(0)
          .find("img")
          .should("have.attr", "src")
          .and("include", "./server-files/images/TheScream.jpg");
        cy.then(() => {
          acc_score += 2;
        });
      });
    });

    it("Verify that the total bill amount is correctly calculated and displayed", () => {      
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);

      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .first()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true })
          .then(() => {
            cy.get(cards)
              .last()
              .find(".card-button")
              .should("be.visible")
              .should("not.be.disabled")
              .click({ force: true });
            cy.wait(200).then(() => {
              let cartData = JSON.parse(localStorage.getItem("cartData"));
              console.log(cartData);
              expect(cartData).to.have.lengthOf(2);             
            });
          });
      });
      cy.get(`a[href="cart.html"]`).click({force:true});

      cy.get("#bill").should("contain", "13000");

      cy.get(".RemoveBtn").first().click({ force: true });

      cy.get("#bill").should("contain", "12000");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if the code appropriately updates the localStorage after removing an art item from the cart", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);

      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";

        cy.get(cards)
          .first()
          .find(".card-button")
          .should("be.visible")
          .should("not.be.disabled")
          .click({ force: true })
          .then(() => {
            cy.get(cards)
              .last()
              .find(".card-button")
              .should("be.visible")
              .should("not.be.disabled")
              .click({ force: true });
            cy.wait(200).then(() => {
              let cartData = JSON.parse(localStorage.getItem("cartData"));
              console.log(cartData);
              expect(cartData).to.have.lengthOf(2);             
            });
          });
      });
      cy.get(`a[href="cart.html"]`).click({force:true});

      // cy.get("#bill").should("contain", "13000");

      cy.get(".RemoveBtn").first().click({ force: true });

      // cy.get("#bill").should("contain", "12000");

      cy.get(".RemoveBtn").first().click({ force: true });

      const storedData = JSON.parse(localStorage.getItem("cartData") || "[]");
      expect(storedData).to.have.lengthOf(0);
      cy.get("#tbody tr").should("have.length", 0);
      cy.then(() => {
        acc_score += 2;
      });
    });

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

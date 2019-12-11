describe("Math calction", function () {

    describe("Dscripe one", function () {
        it("collecting", function () {
            expect(clc(50, 30)).toBe(80);

        });

    });
    describe("Dscripe two", function () {
        it("division", function () {
            expect(sum(100, 20)).toBe(5);

        });

    });
    describe("Dscripe three", function () {

        it("multiplication", function () {
            expect(ext(10, 20)).toBe(200);

        });

    });

    describe("Dscripe Sting and password", function () {

        it("Sting and password", function () {

            let user = "mohamed";
            let password = "12345";
            expect(Login(user, password)).toBe(true);

        });
    });
    describe("Power", function () {
        // let a = "Zero";
        // let b = "Zero";
        it("Sting and password", function () {
            expect(Power("Zero", "Zero")).toBe("positive");
        });
    });
});









// function Mathcodetest(x, z, allresult) {
//     if (Mathcode(x, z) === allresult) console.log("its good"); else console.log("not match condtion");

// };

// Mathcodetest(16, 4, 4)
// Mathcodetest(1, 0, "not match")
// Mathcodetest(0, 1, "not match")
// Mathcodetest(0, 0, "not match")



// // if (divide(x, y) === expectedresut) console.log("success"); else console.log("Failed");

// constractor function 


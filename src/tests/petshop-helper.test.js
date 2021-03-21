import {
  availablePetshops,
  configurePetshop,
  sortPetshops,
} from "../utils/petshop-helper";

describe("petshop-helper", () => {
  it("should verify is petshop is defined", () => {
    expect(availablePetshops).toBeDefined();
    expect(configurePetshop).toBeDefined();
    expect(sortPetshops).toBeDefined();
  });

  it("should get best petshop Meu Canino Feliz", () => {
    const data = {
      data: "2021-03-22",
      caesPequenos: 2,
      caesGrandes: 2,
    };
    const [bestPetshop] = availablePetshops
      .map((petshop) => configurePetshop(data, petshop))
      .sort((a, b) => sortPetshops(a, b));

    expect(bestPetshop).toEqual({
      petshop: "Meu Canino Feliz",
      value: 120,
      meters: 2000,
    });
  });
  it("should get best petshop Vai Rex", () => {
    const data = {
      data: "2021-03-21",
      caesPequenos: 8,
      caesGrandes: 3,
    };
    const [bestPetshop] = availablePetshops
      .map((petshop) => configurePetshop(data, petshop))
      .sort((a, b) => sortPetshops(a, b));

    expect(bestPetshop).toEqual({
      petshop: "Vai Rex",
      value: 325,
      meters: 1700,
    });
  });
  it("should get best petshop ChowChawgas", () => {
    const data = {
      data: "2021-03-21",
      caesPequenos: 0,
      caesGrandes: 23,
    };
    const [bestPetshop] = availablePetshops
      .map((petshop) => configurePetshop(data, petshop))
      .sort((a, b) => sortPetshops(a, b));

    expect(bestPetshop).toEqual({
      petshop: "ChowChawgas",
      value: 1035,
      meters: 800,
    });
  });

  it("should have ChowChawgas the same price as Vai Rex", () => {
    const data = {
      data: "2021-03-21",
      caesPequenos: 4,
      caesGrandes: 4,
    };
    const [, chowChawgas, vaiRex] = availablePetshops
      .map((petshop) => configurePetshop(data, petshop))
      .sort((a, b) => sortPetshops(a, b));

    expect(chowChawgas.petshop).toBe("ChowChawgas");
    expect(vaiRex.petshop).toBe("Vai Rex");
    expect(chowChawgas.value).toEqual(vaiRex.value);
  });
});

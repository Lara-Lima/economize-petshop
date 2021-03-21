import { checkIfDateIsOverTheWeekend } from "./date-helper";

export const availablePetshops = [
  {
    petshopName: "Meu Canino Feliz",
    values: {
      smallDogs: 20,
      bigDogs: 40,
    },
    meters: 2000,
    valuesWithTax: {
      smallDogs: 24,
      bigDogs: 48,
    },
  },
  {
    petshopName: "Vai Rex",
    values: {
      smallDogs: 15,
      bigDogs: 50,
    },
    meters: 1700,
    valuesWithTax: {
      smallDogs: 20,
      bigDogs: 55,
    },
  },
  {
    petshopName: "ChowChawgas",
    values: {
      smallDogs: 30,
      bigDogs: 45,
    },
    meters: 800,
  },
];

export function configurePetshop(formData, petshop) {
  const { caesGrandes = 0, caesPequenos = 0, data } = formData;
  const isOverTheWeek = checkIfDateIsOverTheWeekend(data);
  let value =
    petshop.values.bigDogs * caesGrandes +
    petshop.values.smallDogs * caesPequenos;

  if (isOverTheWeek) {
    value = petshop?.valuesWithTax
      ? petshop.valuesWithTax.bigDogs * caesGrandes +
        petshop.valuesWithTax.smallDogs * caesPequenos
      : value;
  }
  return {
    petshop: petshop.petshopName,
    value,
    meters: petshop.meters,
  };
}

export function sortPetshops(firstElement, secondElement) {
  if (firstElement.value > secondElement.value) {
    return 1;
  }
  if (firstElement.value < secondElement.value) {
    return -1;
  }
  if (firstElement.value === secondElement.value) {
    if (firstElement.meters > secondElement.meters) {
      return 1;
    }
    if (firstElement.meters < secondElement.meters) {
      return -1;
    }
  }
  return 0;
}

import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import {
  availablePetshops,
  configurePetshop,
  sortPetshops,
} from "../utils/petshop-helper";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [petshops, setPetshops] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPetshops(formData);
  };

  return (
    <>
      <Head>
        <title>Economize Petshop</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <header className={styles.header}>
        Leve seu cachorro ao PetShop e economize
      </header>
      <div className={styles.container}>
        <form className={styles.filters} onSubmit={handleSubmit}>
          <Input
            label="Data"
            name="data"
            placeholder="Insira a data"
            type="date"
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            label="Cães pequenos"
            name="caesPequenos"
            placeholder="Insira a quantidade de cães pequenos"
            min={0}
            step={1}
            onChange={handleChange}
            required={!formData?.caesGrandes}
          />
          <Input
            type="number"
            label="Cães grandes"
            name="caesGrandes"
            placeholder="Insira a quantidade de cães grandes"
            min={0}
            step={1}
            onChange={handleChange}
            required={!formData?.caesPequenos}
          />

          <Button>Buscar</Button>

          <img
            className={styles.image}
            src="https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/Como-saber-de-qual-tamanho-um-c%C3%A3o-ficar%C3%A1-quando-crescer-1.jpg"
            alt="Dogs"
          />
        </form>

        <div className={styles["card-wrapper"]}>
          {Object.keys(petshops).length > 0
            ? availablePetshops
                .map((petshop) => configurePetshop(petshops, petshop))
                .sort((a, b) => sortPetshops(a, b))
                .map(({ petshop, value, meters }, index) => (
                  <Card
                    key={index}
                    title={petshop}
                    distance={`${meters / 1000}km`}
                    value={`R$${value}`}
                  />
                ))
            : "Escolha uma data e a quantidade de cães para poder visualizar o petshop ideal para você."}
        </div>
      </div>
      <footer className={styles.footer}>
        Feito por Lara Lima Pereira -{" "}
        <a href="mailto:laralima.dev@gmail.com">laralima.dev@gmail.com</a>
      </footer>
    </>
  );
}

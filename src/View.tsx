import React from "react";
import { match } from "ts-pattern";
import { BMI } from "./model";

const View = ({ bmiCategory }: { bmiCategory: BMI }) => (
  <article className="App">
    {match(bmiCategory)
      .with("Underweight", () => "You're underweight")
      .with("Normal", () => "You're normal")
      .with("Overweight", () => "You're overweight")
      .with("Obese", () => "You're obese")
      .exhaustive()}
  </article>
);

export default View;

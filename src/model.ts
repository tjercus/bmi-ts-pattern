import { match, P } from "ts-pattern";

// @see http://learnyouahaskell.com/syntax-in-functions

// Define the BMI type
export type BMI = "Underweight" | "Normal" | "Overweight" | "Obese";

// Pattern match to determine which BMI category is applicable
export const makeBmi = (bmi: number): BMI =>
  match<number, BMI>(bmi)
    .with(P.number.lte(18.5), () => "Underweight")
    .with(P.number.lte(25), () => "Normal")
    .with(P.number.lte(30), () => "Overweight")
    .otherwise(() => "Obese");

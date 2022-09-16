import { create, test, enforce, only, warn, skipWhen } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty();
  });
  test("username", "Username is too short", () => {
    enforce(data.username).longerThan(2);
  });

  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });
  test("password", "Password is too short", () => {
    enforce(data.password).longerThan(2);
  });
  test("password", "Password is weak. maybe add a number", () => {
    warn();
    enforce(data.password).matches(/[0-9]/);
  });

  test("confirm", "Passwords do not match", () => {
    enforce(data.confirm).equals(data.password);
  });

  test("tos", () => {
    enforce(data.tos).isTruthy();
  });
});

export default suite;

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText("Create an Account")).toBeVisible()
    })
    test('form is visable to the user', () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText("Username:")).toBeVisible()
      expect(screen.getByPlaceholderText("Type username")).toBeVisible()
      expect(screen.getByText("Favorite language:")).toBeVisible()
      expect(screen.getByText("JavaScript")).toBeVisible()
      expect(screen.getByText("Rust")).toBeVisible()
      expect(screen.getByLabelText("Favorite food:")).toBeVisible()
      expect(screen.getByText("-- Select favorite food --")).toBeVisible()
      expect(screen.getByText("Pizza")).toBeVisible()
      expect(screen.getByText("Spahgetti")).toBeVisible()
      expect(screen.getByText("Broccoli")).toBeVisible()
      expect(screen.getByLabelText("Agree to our terms")).toBeVisible()
      expect(screen.getByText("send")).toBeVisible()
    })
  })
  describe('Spanish Language', () => {
    test('spanish create a account is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Crear Cuenta")).toBeVisible()
    })
    test('spanish username is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByLabelText("Usuario")).toBeVisible()
    })
    test('spanish username placeholder is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByPlaceholderText("Escriba usuario")).toBeVisible()
    })
    test('spanish favorite language is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Lenguaje favorito:")).toBeVisible()
    })
    test('spanish Javascript language is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("JavaScript")).toBeVisible()
    })
    test('spanish Rust language is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Rust")).toBeVisible()
    })
    test('spanish favorite food is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByLabelText("Plato favorito:")).toBeVisible()
    })
    test('spanish food 1 is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("-- Elija su plato favorito --")).toBeVisible()
    })
    test('spanish food 2 is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Pizza")).toBeVisible()
    })
    test('spanish food 3 is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Espaguetis")).toBeVisible()
    })
    test('spanish food 4 is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Brócolis")).toBeVisible()
    })
    test('spanish accept terms is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Acepto condiciones")).toBeVisible()
    })
    test('spanish submit is visable', () => {
      render(<App lang="esp"/>)
      expect(screen.getByText("Enviar")).toBeVisible()
    })
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
    // "TEXT_SUBMIT": "Enviar",
  })
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
    const obj = {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }
    const expected = [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]
    const expected2 = [
      ["xyz_1", "data_xyz_1"]
    ]
      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expected)
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expected2)
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual([])
      /*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
    })
  })
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split('_')[0] === keyPrefix)
  
  
  
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}

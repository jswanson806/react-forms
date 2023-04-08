import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it('renders without crashing', function() {
    render(<NewBoxForm />)
})

it('matches the snapshot', function() {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot();
})

it('handles user input correctly', function() {
    const { getByLabelText } = render(<NewBoxForm />);
    const colorInput = getByLabelText("Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");

    fireEvent.change(colorInput, { target: {value: "red"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })

    expect(colorInput).toHaveValue("red")
    expect(heightInput).toHaveValue("100px")
    expect(widthInput).toHaveValue("100px")
})


it('submits the form data correctly', function() {
    // spy on addBox function
    const addBox = jest.fn();
    const { getByLabelText, getByRole } = render(<NewBoxForm addBox={addBox}/>)
    const colorInput = getByLabelText("Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const btn = getByRole("button", {name: "Add Box"});

    fireEvent.change(colorInput, { target: {value: "red"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })
    fireEvent.click(btn);

    // function call should be made only once
    expect(addBox).toHaveBeenCalledTimes(1);
    // function call should be with correct data
    expect(addBox).toHaveBeenCalledWith("red", "100px","100px")
})
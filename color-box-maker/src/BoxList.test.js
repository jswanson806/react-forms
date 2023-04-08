import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

it("renders without crashing", function () {
    render(<BoxList />);
})

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add a box", function() {
    const {queryByRole, getByText, getByLabelText} = render(<BoxList />);
    const colorInput = getByLabelText("Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const btn = getByText("Add Box");

    // box should not be on the page initially
    expect(queryByRole('Box')).not.toBeInTheDocument();

    fireEvent.change(colorInput, { target: {value: "red"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })
    
    fireEvent.click(btn);
    // box should be on the page
    expect(queryByRole('Box')).toBeInTheDocument();
})

it("should add multiple boxes", function() {
    const {queryByRole, queryAllByRole, getByText, getByLabelText} = render(<BoxList />);
    const colorInput = getByLabelText("Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const btn = getByText("Add Box");
    
    // box should not be on the page initially
    expect(queryByRole('Box')).not.toBeInTheDocument();

    // add first box with color 'red'
    fireEvent.change(colorInput, { target: {value: "red"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })
    fireEvent.click(btn);
    
    // box should be on the page
    expect(queryByRole('Box')).toBeInTheDocument();
    
    // get teh first box computer style
    const style = window.getComputedStyle(queryByRole('Box'));
    // box should have the color 'red'
    expect(style.backgroundColor).toBe('red');

    // add second box with color 'blue'
    fireEvent.change(colorInput, { target: {value: "blue"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })
    fireEvent.click(btn);

    // query all boxes
    const elements = queryAllByRole('Box');
    // check for 2 boxes on the page
    expect(elements.length).toEqual(2)

    // get the second box - should be last element added with role of 'box'
    const secondBox = elements[elements.length - 1];
    // get the second box computed style
    const newStyle = window.getComputedStyle(secondBox);
    // check for second box to have color 'blue'
    expect(newStyle.backgroundColor).toBe('blue');    
})


it("should remove a box", function() {
    const {queryByRole, getByText, getByLabelText} = render(<BoxList />);
    const colorInput = getByLabelText("Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const btn = getByText("Add Box");

    // box should not be on the page initially
    expect(queryByRole('Box')).not.toBeInTheDocument();

    fireEvent.change(colorInput, { target: {value: "red"} })
    fireEvent.change(heightInput, { target: {value: "100px"} })
    fireEvent.change(widthInput, { target: {value: "100px"} })
    
    fireEvent.click(btn);
    // box should be on the page
    expect(queryByRole('Box')).toBeInTheDocument();

    const removeBtn = getByText("X");
    fireEvent.click(removeBtn);

    // box should not be on the page anymore
    expect(queryByRole('Box')).not.toBeInTheDocument();

})
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from './NewTodoForm';

it("should render without crashing", () => {
    render(<NewTodoForm />)
})

it("should match the snapshot", () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
})

it("should handle user input correctly", () => {
    const { getByLabelText } = render(<NewTodoForm />);
    const task = getByLabelText('Task:');

    fireEvent.change(task, { target: { value: 'dishes' } });
    // check that new input value is "dishes"
    expect(task).toHaveValue("dishes");
})

it("should submit with correct data", () => {
    // spy on addTodo
    const addTodo = jest.fn();
    const { getByRole, getByLabelText } = render(<NewTodoForm addTodo={addTodo}/>);
    const task = getByLabelText('Task:');
    const btn = getByRole('button', {name: "Add Todo"})

    fireEvent.change(task, { target: { value: 'dishes' } });
    fireEvent.click(btn);

    // check that addTodo was called only once
    expect(addTodo).toHaveBeenCalledTimes(1);
    // check that addTodo was called with "dishes"
    expect(addTodo).toHaveBeenCalledWith("dishes");
})
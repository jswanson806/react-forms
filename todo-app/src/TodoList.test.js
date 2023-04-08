import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';

it("renders without crashing", function () {
    render(<TodoList />);
})

it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add a task", function() {
    const {queryByRole, queryByText, getByText, getByLabelText} = render(<TodoList />);
    const taskInput = getByLabelText("Task:");
    const btn = getByText("Add Todo");

    // task should not be on the page initially
    expect(queryByText('dishes')).not.toBeInTheDocument();

    fireEvent.change(taskInput, { target: {value: "dishes"} })
    fireEvent.click(btn);
    // task should be on the page
    expect(queryByText('dishes')).toBeInTheDocument();
})

it("should add multiple tasks", function() {
    const {queryByText, queryAllByRole, getByText, getByLabelText} = render(<TodoList />);
    const taskInput = getByLabelText("Task:");
    const btn = getByText("Add Todo");
    
    // task should not be on the page initially
    expect(queryByText('dishes')).not.toBeInTheDocument();

    // add first task with text 'dishes'
    fireEvent.change(taskInput, { target: {value: "dishes"} })
    fireEvent.click(btn);

    // task should be on the page
    expect(queryByText('dishes')).toBeInTheDocument();
    
    // new task should not be on the page
    expect(queryByText('toilets')).not.toBeInTheDocument();

    // add second task with text 'toilets'
    fireEvent.change(taskInput, { target: {value: "toilets"} })
    fireEvent.click(btn);

    // query all tasks
    const elements = queryAllByRole('Task');
    // check for 2 li's on the page
    expect(elements.length).toEqual(2)

    // new task should be on the page
    expect(queryByText('toilets')).toBeInTheDocument();

})


it("should remove a task", function() {
    const {getByText, queryByText, getByLabelText} = render(<TodoList />);
    const taskInput = getByLabelText("Task:");
    const btn = getByText("Add Todo");

    // task should not be on the page initially
    expect(queryByText('dishes')).not.toBeInTheDocument();

    // add first task with text 'dishes'
    fireEvent.change(taskInput, { target: {value: "dishes"} })
    fireEvent.click(btn);
    
    // task should be on the page
    expect(queryByText('dishes')).toBeInTheDocument();

    const removeBtn = getByText("X");
    fireEvent.click(removeBtn);

    // task should not be on the page
    expect(queryByText('dishes')).not.toBeInTheDocument();
})
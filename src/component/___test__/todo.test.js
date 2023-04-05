import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";

test('should render non-completed todo', () => {
    const todo = {id: 1, title: 'WASH DISHES', completed: false};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('WASH DISHES');
});

test('should render completed todo', () => {
    const todo = {id: 2, title: 'wash car', completed: true};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
});
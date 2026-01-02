import "@testing-library/jest-dom";
import { describe, expect, it, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { UsersTable } from "./UsersTable";

const users = [
  { id: 1, name: "Alice", username: "alice", email: "alice@email.com" },
  { id: 2, name: "Bob", username: "bob", email: "bob@email.com" },
];

describe("UsersTable", () => {
  it("renderiza filas con la información del usuario", () => {
    render(
      <UsersTable
        users={users}
        selectedUserId={null}
        onSelectUser={jest.fn()}
      />
    );

    expect(screen.queryByText("Alice")).toBeTruthy();
    expect(screen.queryByText("@bob")).toBeTruthy();
    expect(screen.queryByText("alice@email.com")).toBeTruthy();
  });

  it("dispara onSelectUser al hacer click en una fila", () => {
    const handleSelect = jest.fn();
    render(
      <UsersTable
        users={users}
        selectedUserId={null}
        onSelectUser={handleSelect}
      />
    );

    const row = screen.getByText("Alice").closest("tr");
    expect(row).not.toBeNull();

    fireEvent.click(row!);

    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it("marca la fila seleccionada con aria-selected", () => {
    render(
      <UsersTable
        users={users}
        selectedUserId={2}
        onSelectUser={jest.fn()}
        search="bo"
      />
    );

    const selectedRow = screen.getByText("Bob").closest("tr");
    const unselectedRow = screen.getByText("Alice").closest("tr");

    expect(selectedRow?.getAttribute("aria-selected")).toBe("true");
    expect(unselectedRow?.getAttribute("aria-selected")).toBe("false");
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "@/app/components/navbar/NavBar";

describe("NavBar", () => {
  it("renders navigation links", () => {
    render(<NavBar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});

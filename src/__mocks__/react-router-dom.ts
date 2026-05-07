// Ручной мок для react-router-dom (Jest подхватит его автоматически)
import React from "react";

export const useNavigate = () => jest.fn();
export const useParams = () => ({});
export const useLocation = () => ({ pathname: "", search: "", hash: "", state: null });
export const useResolvedPath = (path: string) => ({ pathname: path });
export const MemoryRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => 
  React.createElement(React.Fragment, null, children);
export const BrowserRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => 
  React.createElement(React.Fragment, null, children);
export const Route = () => null;
export const Routes = ({ children }: { children?: React.ReactNode }) => 
  React.createElement(React.Fragment, null, children);
export const Link = ({ children, to }: { children: React.ReactNode; to?: string }) => 
  React.createElement("a", { href: to }, children);
export const Navigate = () => null;
export const Outlet = () => null;

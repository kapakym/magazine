import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import UserStore from "../store/UserStore";
import { AppProviderType } from "../types/types";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext<AppProviderType>(Context);
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            КупиДевайс
          </NavLink>

          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>Админ панель</Button>
              <Button variant={"outline-light"} className="ml-4">Войти</Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
});

export default NavBar;
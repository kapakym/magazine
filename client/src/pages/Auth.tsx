import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const click = async () => {
    console.log(click)
    if (isLogin) {
      const response = await login(email, password);
      console.log(response);
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Введите email"
            className="mt-2"
          />
          <Form.Control
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Введите пароль"
            className="mt-2"
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Запегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}

            <Button variant={"outline-success"} onClick={()=>click()}>
              {isLogin ? "Войти" : "Регистрация"}{" "}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

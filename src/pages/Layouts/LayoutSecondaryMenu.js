import React from "react";
import { Col, Row } from "antd";

import { Redirect, Route } from "react-router-dom";
import MenuEvo from "../../components/MenuEvo/MenuEvo";

import { useTranslation } from "react-i18next";
import { Layout } from "antd";

import "./LayoutSecondary.scss";

//const user = null;
const user = { id: 1, username: "Lupita Gamiño" };
const { Content } = Layout;

export default function LayoutSecondaryMenu({ component: Component, ...rest }) {
  const [t, i18n] = useTranslation("global");

  return (
    <Route {...rest}>
      {user ? (
        <>
          <Layout>
            <Row>
              <Col span={2} className="menuSide">
                <MenuEvo />
              </Col>

              <Col span={22} className="contentFrame">
                {/* <Header></Header> */}
                <Content>
                  <div className="cardlayoutGlassFull">
                    <Component user={user} />
                  </div>
                </Content>
              </Col>
            </Row>
          </Layout>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}

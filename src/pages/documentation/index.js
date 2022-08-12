import React from "react";
import HeaderDocumentation from "../../components/HeaderDocumentation";
import FooterComponent from "../../components/Footer";
import { Layout, Row, Col, Card } from "antd";
import "../../styles/pages/documentation.css";
import SiderComponent from "../../components/Sider";
import "antd/dist/antd.css";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { BsHeadphones, BsQuestionSquare } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import faq from "../../buscandoArquivos.png";

const { Content } = Layout;

const Documentation = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderDocumentation />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={24}>
              <Breadcrumb>
                <Breadcrumb.Item onClick={() => navigate("/")}>
                  <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <HiOutlineDocumentText className="icon" />
                  <span className="text">Documentação</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col xs={24} xl={5}>
              <Card className="card-documentation">
                <SiderComponent />
              </Card>
            </Col>
            <Col xs={24} xl={16}>
              <Card className="card-documentation">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h3 className="purple-titlehome">Documentação</h3>
                      </Col>
                      <Col xs={24} xl={24}>
                        <img src={faq} className="illustrantion"/>
                      </Col>
                      <Col xs={24} xl={24}>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Documentation;

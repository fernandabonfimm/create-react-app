import React, { useEffect, useState } from "react";
import api from "../services/Api.js";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Layout, Row, Col, Card, Input, Tag, Button, Divider } from "antd";
import "../styles/pages/home.css";
import { MdFileCopy, MdHelpOutline } from "react-icons/md";
import platformeverhooks from "../platform-everhooks.png";
import platformevermart from "../platform-evermart.png";
import platformapi from "../platform-api.png";
import faq from "../faq.png";
import { useNavigate } from "react-router-dom";
import CardRequests from "../components/cards/CardRequests";

const { Content } = Layout;

const Home = () => {
  const [data, setData] = useState(null);
  const [https, setHttps] = useState("https://everhooks.site/uuidgenerate");

  const navigate = useNavigate();

  useEffect(() => {
    api.get("api").then((res) => {
      console.log(res.data);
      const dado = res.data.message;
      setData(String(dado));
    });
  }, []);

  function copiarHttps() {
    let httpsCopiada = document.getElementById("https");
    httpsCopiada.select();
    httpsCopiada.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <NavbarComponent />
        <Content className="content-home">
          <Row gutter={[32, 22]}>
            <Col xs={8} xl={8}>
              <CardRequests />
            </Col>
            <Col xs={16} xl={16}>
              <Card className="card-home">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={24}>
                    <h4 className="purple-titlehome">
                      Como utilizar o <a target="_blank">EverHooks</a> ?
                    </h4>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]} >
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">1°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <span className="description-pass">Passo</span>
                          </Col>
                          <Col xs={24} xl={24}>
                            <span className="explication-pass">
                              Copiar a chave https disponibilizada no site da{" "}
                              <a target="_blank" className="link-pass">Everhooks</a>.
                            </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformeverhooks} width={250} />
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]}>
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">2°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <span  className="description-pass">Passo</span>
                          </Col>
                          <Col xs={24} xl={24}>
                            <Row gutter={[32, 22]}>
                              <Col xs={24} xl={24}>
                                <span className="explication-pass">
                                  Inserir a chave https na plataforma
                                  <a
                                    href="https://qa-dashboard.mycheckout.com.br/login"
                                    target="_blank"
                                    className="link-pass"
                                  >
                                    Evermart
                                  </a>
                                  em:
                                </span>
                              </Col>
                              <Col xs={24} xl={24}>
                                <span className="explication-pass-gray">
                                  {" "}
                                  Integrações {">"} Webhooks {">"} Adicionar
                                </span>
                              </Col>
                              <Col xs={24} xl={24}>
                                <Button></Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformevermart} width={250} />
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={14} xl={14}>
                        <Row gutter={[32, 22]} >
                          <Col xs={4} xl={4}>
                            <Tag className="pass-tag">3°</Tag>
                          </Col>
                          <Col xs={20} xl={20}>
                            <span  className="description-pass">Passo</span>
                          </Col>
                          <Col xs={24} xl={24}>
                            <span className="explication-pass">
                              Inserir a chave https e a URL Encoded, gerada na
                              plataforma
                              <a
                                href="https://qa-dashboard.mycheckout.com.br/login"
                                target="_blank"
                                className="link-pass"
                              >
                                Evermart
                              </a>
                              , no Software de Teste de Api’s desejado.
                            </span>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={10} xl={10}>
                        <img src={platformapi} width={250} />
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={24} xl={24}>
                    <Row gutter={[32, 22]}>
                      <Col xs={24} xl={24}>
                        <h4 className="purple-titlehome">
                          Sua URL exclusiva (copie-o daqui, não da barra de
                          endereço!)
                        </h4>
                      </Col>
                      <Col xs={20} xl={20}>
                        <Input 
                          name="https"
                          id="https" value={https} className="input-https" />
                      </Col>
                      <Col xs={4} xl={4}>
                        <Tag className="tag-copy" onClick={copiarHttps}>
                          <MdFileCopy />
                        </Tag>
                      </Col>
                      <Divider className="white-divider" />
                    </Row>
                  </Col>
                  <Col xs={14} xl={14}>
                    <Row gutter={[32, 22]}>
                      <Col xs={22} xl={22}>
                        <span className="purple-description">
                          Você não está recebendo nada? Certifique-se de ter
                          copiado o URL acima, e não da barra de endereços do
                          navegador.
                        </span>
                      </Col>
                      <Col xs={22} xl={22}>
                        <span className="purple-description">
                          Precisa de ajuda para navegar na plataforma Evermart?
                          Não se preocupe, nós temos um FAQ!
                        </span>
                      </Col>
                      <Col xs={24} xl={24}>
                        <Button className="btn-help" onClick={() => navigate("/documentation")}>
                          <MdHelpOutline style={{marginRight: 10}}/>
                          Preciso de ajuda!
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={10} xl={10}>
                    <img src={faq} width={230} />
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
export default Home;

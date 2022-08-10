import { Row, Col, Layout, Button } from "antd";
import logo from "../logoeverhooks.png";
import "../styles/components/navbar.css";
import { FaNodeJs, FaHeadset } from "react-icons/fa";
import evermart from "../evermart.png";
import woman from "../woman.png";
import { MdOutlineHelpOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header className="navbarlayout">
        <Row gutter={[32, 22]}>
          <Col xs={7} xl={7}>
            <img
              src={logo}
              width={110}
              height={60}
              alt="logo-everhooks"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Col>
          <Col xs={5} xl={5}>
            <Row gutter={[22, 8]}>
              <Col xs={4} xl={4} style={{ marginTop: 5 }}>
                <FaNodeJs className="icon-navbar" />
              </Col>
              <Col xs={20} xl={20}>
                <a className="hyperlink" onClick={() => navigate("/documentation")} target="_blank">
                  Documentação
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={7} xl={7}>
            <Row gutter={[22, 8]}>
              <Col xs={4} xl={4} style={{ marginTop: 5 }}>
                <FaHeadset className="icon-navbar" />
              </Col>
              <Col xs={20} xl={20}>
                <a
                  className="hyperlink"
                  href="https://ajuda.evermart.com.br/docs/sobre/integracoes/o-que-sao-e-como-usar-os-webhooks"
                  target="_blank"
                >
                  Suporte e Ajuda
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={5} xl={5}>
            <Button
              className="btnaccess"
              href="https://qa-dashboard.mycheckout.com.br/integrations/webhooks/new"
              target="_blank"
            >
              Acessar Evermart
            </Button>
          </Col>
        </Row>
      </Header>

      <Header className="content-announcement">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={16}>
            <Row>
              <Col xs={24} xl={24}>
              <span className="white-titlenavbar">Seja Bem-vindo à</span>
              </Col>
              <Col xs={24} xl={24}>
              <img src={evermart} width={300} heighalt="evermart" />
              </Col>
              <Col xs={18} xl={18}>
              <p className="white-subtitlenavbar">
              Nós permitimos inspecionar, testar e automatizar facilmente com o
              construtor visual de ações personalizadas qualquer solicitação
              HTTPS.
            </p>
              </Col>
              <Col xs={24} xl={24}>
              <Button className="btnfaq" onClick={() => navigate("/")}>
              <MdOutlineHelpOutline className="whiteicon-btn"  />
              O’que é o Everhooks
            </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={8}>
            <img src={woman} width={360} height={320} alt="person-woman" />
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default NavbarComponent;

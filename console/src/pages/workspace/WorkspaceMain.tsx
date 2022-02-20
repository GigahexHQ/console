import * as React from "react";
import { Link } from "react-router-dom";
import { MenuFoldOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button, Space } from "antd";
import { connect } from "react-redux";
import { appLoaded } from "../../actions/app";
import { User, UserContext } from "../../store/User";
import { AppState } from "../../reducers";
import { updateLogin } from "../../actions/auth";
import { Dispatch } from "redux";
import { MdQuestionAnswer, MdDashboard, MdDns, MdBook, MdKeyboardArrowDown } from "react-icons/md";
import { Hexagon } from "../../components/Icons/NavIcons";
import AuthService, { MemberProfile } from "../../services/AuthService";
import { history } from "../../configureStore";
import DockerInfoFooter from "../../components/clusters/DockerInfoFooter";
import { getLocalStorage, setLocalStorage } from "../../services/Utils";
import WebService from "../../services/WebService";

const { Content, Sider, Header } = Layout;
const { SubMenu } = Menu;

interface IMainProps {
  index: string;
  content: React.ReactNode;
  isAppLoaded: boolean;
  slugId?: string;
  updateLogin?: typeof updateLogin;
  appLoaded?: typeof appLoaded;
  user?: User;
}

const mapStateToProps = (state: AppState) => ({
  isAppLoaded: state.app.isAppLoaded,
  user: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateLogin: (id: number, email: string, name: string, profile?: MemberProfile) => dispatch(updateLogin(id, email, name, profile)),
  appLoaded: () => dispatch(appLoaded()),
});
const getInitials = (text: string): string => {
  if (text.split(" ").length > 1) {
    let splits = text.split(" ");
    return splits[0].charAt(0).toUpperCase() + splits[1].charAt(0).toUpperCase();
  } else {
    return text.charAt(0).toUpperCase();
  }
};

const OrgThumbnailImg: React.FC<{ name: string; thumbnail?: string }> = ({ name, thumbnail }) => {
  const web = new WebService();
  return (
    <>
      {!thumbnail && <span className='org-initials'>{getInitials(name)}</span>}
      {thumbnail && <img src={`${web.getEndpoint()}${thumbnail}`} alt={`${name} thumbnail`} />}
    </>
  );
};

const WorkspaceMain: React.FC<IMainProps> = ({ index, content, updateLogin, isAppLoaded, appLoaded, user }) => {
  const context = React.useContext(UserContext);

  const [state, setState] = React.useState<{ collapsed: boolean }>({ collapsed: getLocalStorage("collaps") || false });

  const handleLogout = () => {
    AuthService.logOut().then((r) => {
      if (r.success) {
        console.log("moving to login page");
        context.updateUser(0, "", "", false, undefined);
        history.push("/login");
      }
    });
  };

  const trimText = (t: string) => {
    if (t.length > 10) {
      return `${t.substr(0, 10)}..`;
    } else {
      return t;
    }
  };

  let onCollaps = {};
  if (state.collapsed) {
    onCollaps = {
      display: "none",
    };
  }
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
    setLocalStorage("collaps", !getLocalStorage("collaps"));
  };

  const createMenu = (
    <Menu>
      {/* disabled for free version */}
      {/* <Menu.Item key='create:1'>
        {context.currentUser.profile && (
          <Link to={`/${context.currentUser.profile.orgSlugId}/workspace/${context.currentUser.profile.workspaceId}/deploy-job`}>
            Add Job
          </Link>
        )}
      </Menu.Item> */}
      <Menu.Item key='create:3'>
        {context.currentUser.profile && <Link to={`/${context.currentUser.profile.orgSlugId}/workspace/${context.currentUser.profile.workspaceId}/new-cluster`}>Add Cluster</Link>}
      </Menu.Item>
    </Menu>
  );

  const orgMenu = (
    <Menu mode='horizontal'>
      <Menu.Item key='1' onClick={(e) => history.push(`/${context.currentUser.profile?.orgSlugId}/settings`)}>
        <span>Settings</span>
      </Menu.Item>

      <Menu.Item key='2' onClick={() => handleLogout()}>
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const HelpMenu = (
    <Menu mode='horizontal'>
      <Menu.Item
        key='9'
        style={{ display: "flex" }}
        icon={
          <i style={{ fontSize: 16, marginTop: 4, color: "grey", marginRight: 5 }}>
            <MdBook />
          </i>
        }
        onClick={(e) => {}}>
        <div>
          <a href='https://gigahex.com/docs' target='_blank'>
            <span>Documentation</span>
          </a>
        </div>
      </Menu.Item>
      <Menu.Item
        key='10'
        style={{ display: "flex" }}
        onClick={(e) => {}}
        icon={
          <i style={{ fontSize: 16, marginTop: 4, marginRight: 5 }}>
            <MdQuestionAnswer />
          </i>
        }>
        <div>
          <a href='https://github.com/GigahexHQ/gigahex/issues/new/choose' target='_blank'>
            <span>Community Support</span>
          </a>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className='main-app-wrapper'>
      <Sider trigger={null} collapsible collapsed={state.collapsed} className='workspace-side-nav hex-sider-light'>
        <Dropdown overlay={orgMenu} trigger={["click"]} overlayStyle={{ width: 200 }}>
          <div className={`logo ${state.collapsed ? `logo-collapsed` : ""}`} style={{ height: 52, marginBottom: 20 }}>
            {context.currentUser.profile && <OrgThumbnailImg name={context.currentUser.profile.orgName} thumbnail={context.currentUser.profile.orgThumbnail} />}
            {user && (
              <span className='brand-name' style={onCollaps}>
                {context.currentUser.profile && `${trimText(context.currentUser.profile.orgName)}`}
              </span>
            )}
            <DownOutlined style={onCollaps} />
          </div>
        </Dropdown>
        <div className='wks-name-ctr wks-name-ctr-light'>
          <div className='wks-name wks-name-light'>
            <Hexagon size={state.collapsed ? 23 : 20} />
            {user && !state.collapsed && (
              <div className='wks-header'>
                <div className='header' style={onCollaps}>
                  {context.currentUser.profile && <span style={onCollaps}>{trimText(context.currentUser.profile.workspaceName)}</span>}
                </div>
                <div className='sub-header'>workspace</div>
              </div>
            )}
          </div>
        </div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={[index]} selectedKeys={[index]} style={{ height: "100vh" }}>
          <Menu.Item
            key='2'
            className='center-name'
            onClick={(e) => history.push(`/${context.currentUser.profile?.orgSlugId}/workspace/${context.currentUser.profile?.workspaceId}/clusters`)}
            icon={
              <i style={{ fontSize: 18, marginTop: 4 }}>
                <MdDns />
              </i>
            }>
            {context.currentUser.profile && <span>Clusters</span>}
          </Menu.Item>
          <Menu.Item
            key='10'
            className='center-name'
            onClick={(e) => history.push(`/${context.currentUser.profile?.orgSlugId}/workspace/${context.currentUser.profile?.workspaceId}/hosts`)}
            icon={
              <i style={{ fontSize: 18, marginTop: 4 }}>
                <MdDashboard />
              </i>
            }>
            {context.currentUser.profile && <span>Hosts</span>}
          </Menu.Item>

          {/* Disabled for free version */}
          {/* <Menu.Item
            key='1'
            onClick={(e) =>
              history.push(`/${context.currentUser.profile?.orgSlugId}/workspace/${context.currentUser.profile?.workspaceId}/jobs`)
            }
            icon={
              <i style={{ fontSize: 18, marginTop: 4 }}>
                <MdDashboard />
              </i>
            }>
            {context.currentUser.profile && <span>Jobs</span>}
          </Menu.Item> */}
        </Menu>
        <DockerInfoFooter contId='1' isCollapsed={state.collapsed} />
      </Sider>
      <Layout className='site-layout'>
        <Header className='header-nav-layout' style={{ padding: 0 }}>
          <div onClick={toggle} className='trigger'>
            <MenuFoldOutlined />
          </div>

          <Space style={{ margin: "0 20px", position: "relative" }}>
            <Dropdown overlay={HelpMenu} trigger={["click", "hover"]}>
              <div style={{ margin: "0 10px", position: "relative" }}>
                <Button type='link'>
                  Help
                  <i style={{ fontSize: 20, top: 4, marginLeft: 2, position: "absolute" }}>
                    <MdKeyboardArrowDown />
                  </i>
                </Button>
              </div>
            </Dropdown>
          </Space>
        </Header>
        <Content
          className='site-layout-background'
          style={{
            padding: "20px 20px 20px 20px",
            minHeight: 280,
          }}>
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceMain);
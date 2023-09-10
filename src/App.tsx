import { Outlet } from 'react-router-dom';
import Layout from 'components/common/layout/Layout';
import Header from 'components/common/header/Header';


function App() {
  return (
    <>
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </>
  );
}

export default App;

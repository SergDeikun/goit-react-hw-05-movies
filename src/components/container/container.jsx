import { ContainerWrap } from './container.styled';
import { Outlet } from 'react-router-dom';

// const Container = ({ children }) => {
//   return <ContainerWrap>{children}</ContainerWrap>;
// };

const Container = () => {
  return (
    <ContainerWrap>
      <Outlet />
    </ContainerWrap>
  );
};

export default Container;

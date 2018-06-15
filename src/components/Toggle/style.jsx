import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #6b6360;
`;
Container.displayName = 'Container';

export const Title = styled.h1`
  font-size: 25px;
`;
Title.displayName = 'Title';

export const Text = styled.p`
  font-size: 20px;
`;
Text.displayName = 'Text';

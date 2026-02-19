import styled from 'styled-components';

interface LoadLineProps {
  isLoading: boolean;
}

export const LoadLine = (props: LoadLineProps) => {
  return <LoadLineContainer isLoading={props.isLoading} />;
};

const LoadLineContainer = styled.div<LoadLineProps>`
  visibility: ${(props) => (props.isLoading ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: transparent;

  @keyframes loading {
    0% {
      background-image: repeating-linear-gradient(
        -45deg,
        #2e9aff,
        #2e9aff 10px,
        #f498ad 10px,
        #f498ad 20px
      );
    }
    100% {
      background-image: repeating-linear-gradient(
        -45deg,
        #f498ad,
        #f498ad 10px,
        #2e9aff 10px,
        #2e9aff 20px
      );
    }
  }
  animation: loading 300ms linear infinite;
`;

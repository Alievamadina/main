import styled from "styled-components";

export const Container = styled.div`
  & {
    max-width: 1140px;
    margin: 0 auto;
  }
`;
export const NavBarStyled = styled.div`
  & header {
    padding: 1rem;
    background: #251125;
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      align-items: flex-start;

      li {
        color: #4cddaa;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
`;
export const UseStateStyled = styled.div`
  & {
    padding: 1rem;
    form {
      background: #f4f5f4;
      padding: 1rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(300px, 1fr));
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      box-shadow: #71dba1 0 1px 2px;
      border-radius: 5px;

      label {
        display: flex;
        flex-direction: column;

        input {
          width: 70%;
          height: 2rem;
          outline: none;
          font-size: 1rem;
          padding: 0 5px;
        }
      }
      button {
        width: 10rem;
        height: 2rem;
        outline: none;
        font-size: 1rem;
        padding: 0 5px;
        justify-self: flex-end;
        align-self: flex-end;
      }
    }
  }
`;

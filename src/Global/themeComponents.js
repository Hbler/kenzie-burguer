import styled, { css } from "styled-components";

export const ThemeHeader = styled.header`
  background-color: ${(props) =>
    props.mode === "dark" ? "var(--gray-four)" : "var(--gray-one)"};

  position: relative;

  .container {
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    @media (min-width: 700px) {
      align-items: center;
      justify-content: space-between;
    }

    @media (min-width: 1000px) {
      padding: 0.8rem 2rem;
    }

    @media (min-width: 1300px) {
      padding: 0.8rem;
    }
  }
`;

export const ThemeLogo = styled.h1`
  width: 100%;
  margin: 5% 0 0;

  display: flex;
  align-items: baseline;
  justify-content: center;

  color: ${(props) =>
    props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};

  span {
    color: var(--secondary);
    font-size: 14px;
  }

  @media (min-width: 700px) {
    width: 40%;
    margin: 0;

    justify-content: flex-start;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const ThemeForm = styled.form`
  width: 100%;
  height: 45%;
  margin: 8% 0 0;
  padding: 0.5rem;

  display: flex;

  border-radius: 8px;
  border: 2px solid;
  border-color: ${(props) =>
    props.mode === "dark" ? "var(--gray-three)" : "var(--gray-two)"};
  background-color: ${(props) =>
    props.mode === "dark" ? "#82828220" : "#fff"};

  &:focus-within {
    outline: 2px solid #000;
  }

  input[type="text"] {
    flex: 1;
    border: none;
    background-color: transparent;
    &::placeholder {
      color: var(--gray-two);
    }

    &:focus {
      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-two)" : "var(--gray-three)"};
      font-weight: 400;

      outline: none;
    }
  }

  @media (min-width: 700px) {
    width: 50%;
    margin: 0;
  }

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const ThemeChanger = styled.div`
  top: 10%;
  right: 5%;

  font-size: 2rem;
  color: ${(props) =>
    props.mode === "dark" ? "var(--warning)" : "var(--information)"};

  transform: ${(props) =>
    props.mode === "dark" ? "rotate(180deg) translateY(25%)" : "rotate(0deg)"};

  position: absolute;
  cursor: pointer;

  @media (min-width: 700px) {
    position: static;

    display: flex;
    align-items: center;

    transform: ${(props) =>
      props.mode === "dark" ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const SearchResult = styled.div`
  .container {
    width: 100%;
    max-height: 80px;

    display: flex;
    justify-content: center;

    background-color: ${(props) => (props.mode === "dark" ? "#222" : "#fff")};

    @media (min-width: 1000px) {
      padding: 0.8rem 2rem;
      justify-content: flex-start;
    }

    h3 {
      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
    }

    span {
      color: var(--gray-three);
    }
  }
`;

export const ThemeMain = styled.main`
  min-height: 100vh;

  background-color: ${(props) => (props.mode === "dark" ? "#222" : "#fff")};

  .container {
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
      align-items: center;
    }

    @media (min-width: 1000px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  .display {
    width: 100%;
    margin: 0 0 4%;

    gap: 1rem;
    display: flex;
    align-items: center;

    overflow: scroll;

    @media (min-width: 1000px) {
      width: 69%;
      height: 82vh;

      gap: 0.5rem;
      row-gap: 1.2rem;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-evenly;
    }

    @media (min-width: 1300px) {
      height: 100%;
    }
  }
`;

export const ThemeBtn = styled.button`
  height: ${(props) =>
    props.btnSize === "small" ? "100%" : "medium" ? "37px" : "50px"};

  font-weight: 700;

  border-radius: ${(props) => (props.btnSize === "medium" ? "5px" : "8px")};

  ${(props) => {
    switch (props.btnColor) {
      case "gray":
        return css`
          color: ${(props) =>
            props.mode === "dark" ? "var(--gray-two)" : "var(--gray-three)"};
          background-color: ${(props) =>
            props.mode === "dark" ? "var(--gray-three)" : "var(--gray-two)"};
          &:hover {
            color: ${(props) =>
              props.mode === "dark" ? "var(--gray-three)" : "var(--gray-two)"};
            background-color: ${(props) =>
              props.mode === "dark" ? "var(--gray-two)" : "var(--gray-three)"};
          }
        `;
      default:
        return css`
          color: var(--gray-one);
          background-color: var(--primary);
          &:hover {
            background-color: var(--primary-half);
          }
        `;
    }
  }}
`;

export const ThemeCard = styled.article`
  height: 346px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 5px;
  border: 2px solid;
  border-color: ${(props) =>
    props.mode === "dark" ? "var(--gray-three)" : "var(--gray-two)"};

  background-color: ${(props) =>
    props.mode === "dark" ? "var(--gray-four)" : "#fff"};

  @media (min-width: 1024px) {
    width: 208.8px;
  }

  @media (min-width: 1030px) {
    width: unset;
  }

  figure {
    width: 65vw;
    height: 49%;

    display: flex;
    justify-content: center;

    overflow: hidden;
    border-radius: 5px 5px 0 0;
    background-color: ${(props) =>
      props.mode === "dark" ? "#82828220" : "var(--gray-one)"};

    @media (min-width: 700px) {
      width: 35vw;
    }

    @media (min-width: 1000px) {
      width: 20vw;

      align-self: center;
    }

    @media (min-width: 1300px) {
      width: 17vw;
    }
  }

  div {
    width: 100%;
    height: 51%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      margin-left: 1%;
      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
    }

    small {
      margin-left: 1%;
      color: var(--gray-three);
      font-size: 12px;
    }

    p {
      margin-left: 1%;
      color: ${(props) =>
        props.mode === "dark" ? "var(--primary-half)" : "var(--primary)"};
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const ThemeCart = styled.aside`
  width: 100%;

  @media (min-width: 700px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }

  .head {
    width: 100%;
    height: 65px;
    padding: 0.8rem;

    display: flex;
    align-items: center;

    border-radius: 5px 5px 0 0;
    background-color: var(--primary);

    h3 {
      color: var(--gray-one);
    }
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 0 0 5px 5px;
    background-color: ${(props) =>
      props.mode === "dark" ? "#82828220" : "var(--gray-one)"};

    .empty {
      padding: 2rem 0;

      text-align: center;

      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
    }

    .list {
      width: 100%;
      max-height: 355px;

      display: flex;
      align-items: center;
      flex-direction: column;

      overflow-y: scroll;
    }

    .total {
      width: 100%;

      div {
        padding: 1.5rem 0;

        display: flex;
        align-items: baseline;
        justify-content: space-between;

        border-top: 2px solid;
        border-color: ${(props) =>
          props.mode === "dark" ? "#e0e0e050" : "#82828250"};

        p {
          font-weight: 700;
        }

        p:nth-child(1) {
          color: ${(props) =>
            props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
        }

        p:nth-child(2) {
          color: ${(props) =>
            props.mode === "dark" ? "var(--gray-two)" : "var(--gray-three)"};
        }
      }

      button {
        width: 100%;
        height: 60px;
      }
    }
  }
`;

export const ThemeCartCard = styled.article`
  width: 100%;
  height: 85px;
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;

  figure {
    width: 80px;
    height: 80px;
    margin: auto 0;

    display: flex;
    justify-content: center;

    border-radius: 5px;
    background-color: ${(props) =>
      props.mode === "dark" ? "var(--gray-four)" : "var(--gray-two)"};
  }

  div {
    width: 50%;
    height: 100%;
    padding: 0 0.3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4 {
      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
    }

    small {
      color: var(--gray-three);
      font-size: 12px;
    }
  }

  & > small {
    margin: 2% 0;

    color: ${(props) =>
      props.mode === "dark" ? "var(--gray-two)" : "var(--gray-three)"};
    font-size: 12px;
    cursor: pointer;
    &:hover {
      color: ${(props) =>
        props.mode === "dark" ? "var(--gray-one)" : "var(--gray-four)"};
      text-decoration: underline;
    }
  }
`;

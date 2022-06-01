import { ThemeBtn } from "./themeComponents";

export const EventBtn = ({ children, mode, btnSize, btnColor, onClick }) => {
  return (
    <ThemeBtn
      mode={mode}
      btnSize={btnSize}
      btnColor={btnColor}
      onClick={onClick}
    >
      {children}
    </ThemeBtn>
  );
};

export const SubmitBtn = ({ children, btnSize, btnColor }) => {
  return (
    <ThemeBtn btnSize={btnSize} btnColor={btnColor} type="submit">
      {children}
    </ThemeBtn>
  );
};

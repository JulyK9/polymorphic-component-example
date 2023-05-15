import React from "react";

// Polymorphic Component

// const Text = ({ as, children }) => {
//   // 문제점(타입스크립트로 사용시)
//   // as의 element 타입을 알 수가 없음(any나 unknown으로 할수도 없음)
//   const Component = as || "span"
//   return <Component>{children}</Component>;
// };

// as props으로 전달하는 element가 일정하지 않으므로 일반화 필요
// 타입스크립트의 제네릭을 활용
type TextProps<T extends React.ElementType> = {
  as?: T; // 제네릭 파라미터로 전달받는 리액트 파라미터를 사용, 이 prop을 통해 T가 결정됨
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;
// 전달하는 elemnt에 따라서 그에 부수되는 prop들을 타입화시켜줘야함
// 유틸리티 타입인 Omit 키워드도 사용, 누락시킬 타입을 파라미터를 전달(이미 이 타입안에 한번 들어가있으므로 중복되지 않게 누락시키는 것)

const Text = <C extends React.ElementType>({
  as,
  children,
  ...rest
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...rest}>{children}</Component>;
};

export default Text;

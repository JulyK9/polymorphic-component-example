import "./styles.css";
import Text from "./Text";

// Text 컴포넌트 생성
// 1. Text 컴포넌트는 as prop을 통해 다양한 태그를 렌더링 할 수 있어야 함
// 2. as props의 기본값은 span으로 지정함
// 3. as props의 값에 따라 다른 태그를 렌더링 할 수 있어야 함

export default function App() {
  return (
    <>
      {/* <Text as="h1">Heading 1 text</Text>
      <Text as="div">div text</Text>
      <Text>span text</Text>
      <Text as="a" href="/">
        span text
      </Text> */}
      <Text>Span Text</Text>
      <Text as="h1">This is H1 Text</Text>
      <Text as="div">This is div Text</Text>
      <Text as="a" href="https://google.com">
        This is anchor Text
      </Text>
    </>
  );
}

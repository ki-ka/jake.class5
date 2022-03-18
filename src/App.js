import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondalyButton } from "./components/atoms/button/SecondalyButton";
import { SearchInput } from "./components/molecules/SeachInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondalyButton>検索</SecondalyButton>
      <br />
      <SearchInput />
    </div>
  );
}

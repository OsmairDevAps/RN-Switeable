import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Home } from "./src/app/home";
import { Header } from "./src/components/header";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Header />
      <Home />
    </GestureHandlerRootView>
  );
}


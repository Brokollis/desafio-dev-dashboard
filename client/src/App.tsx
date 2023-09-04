import HeaderComponent from "./components/header";
import Routies from "./routes/Routes";
import { FileDataProvider } from "./services/UseFileContext";
import { ContainerGlobal } from "./styles/GlobalStyle";
import { AuthProvider } from "./utils/AuthProvider";

// import { AuthProvider } from "./utils/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <FileDataProvider>
        <ContainerGlobal>
          <HeaderComponent/>
          <Routies/>
        </ContainerGlobal>
      </FileDataProvider>
    </AuthProvider>

  );
}

export default App;


import React from "react";
import "./App.css";
// import { ProjectListScreen } from './screens/project-list'
// import { LoginScreen } from './screens/login'
// import { RegisterScreen } from './screens/register'
import { AuthenticatedApp } from "./authenticated-app";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { ErrorBoundary } from "components/error-bounary";
import { FullPageErrorFallback } from "components/lib";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;

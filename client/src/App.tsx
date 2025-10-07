import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import MinecraftPage from "@/pages/minecraft";
import VPSPage from "@/pages/vps";
import ParceirosPage from "@/pages/parceiros";
import AjudaPage from "@/pages/ajuda";
import StatusPage from "@/pages/status";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/minecraft" component={MinecraftPage} />
      <Route path="/vps" component={VPSPage} />
      <Route path="/parceiros" component={ParceirosPage} />
      <Route path="/ajuda" component={AjudaPage} />
      <Route path="/status" component={StatusPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

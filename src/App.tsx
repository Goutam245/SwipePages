import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubjectPage from "./pages/SubjectPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Subject Pages */}
          <Route path="/primary-maths" element={<SubjectPage />} />
          <Route path="/primary-english" element={<SubjectPage />} />
          <Route path="/highschool-maths" element={<SubjectPage />} />
          <Route path="/highschool-english" element={<SubjectPage />} />
          <Route path="/college-maths" element={<SubjectPage />} />
          <Route path="/college-english" element={<SubjectPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

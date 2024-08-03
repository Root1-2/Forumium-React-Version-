import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Post from "./pages/Post";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import PostDiscussion from "./pages/PostDiscussion";
import CreatePost from "./pages/CreatePost";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="post/" element={<Post />} />
            <Route path="post/:id" element={<PostDiscussion />} />
            <Route path="post/new" element={<CreatePost />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 6000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            padding: "16px 24px",
            backgroundColor: "#DCDCDC",
            color: "#808080",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

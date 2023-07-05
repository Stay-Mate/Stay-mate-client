import "@/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const { isLoading, refetch, data, isSuccess } = useQuery(
    ["user", "admin"],
    () => axios.get("/api/admin").then((res) => res.data),
    {
      retry: false,
      enabled: false,
      onSuccess: (data) => {
        if (data.admin === false) {
          setIsAdmin(false);
        } else {
          setIsAdmin(true);
        }
      },
    }
  );
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios.defaults.headers["x-access-token"] = localStorage.getItem("token");
      refetch();
    }
    // if (router.asPath === "/") router.replace("/main");
  }, [router.asPath]);
  useEffect(() => {
    if (isAdmin) localStorage.setItem("admin", "1");
    else localStorage.setItem("admin", "0");
  }, [isAdmin]);
  return <Component {...pageProps} />;
};

export default function App(props: AppProps) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppWrapper {...props} />
    </QueryClientProvider>
  );
}

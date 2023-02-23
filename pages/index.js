import Layout from "../components/Layout";
import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  );
}

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Card from "./Card";
import FriendInfo from "./FriendInfo";
import PostCard from "./PostCard";

export default function ProfileContent({ activeTab, userId }) {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const supabase = useSupabaseClient();
  useEffect(() => {
    if (!userId) {
      return;
    }
    if (activeTab === "posts") {
      loadPosts().then(() => {});
    }
  }, [userId]);

  async function loadPosts() {
    const posts = await userPosts(userId);
    const profile = await userProfile(userId);
    setPosts(posts);
    setProfile(profile);
  }

  async function userPosts(userId) {
    const { data } = await supabase
      .from("posts")
      .select("id, content, created_at, author")
      .eq("author", userId);
    return data;
  }

  async function userProfile(userId) {
    const { data } = await supabase.from("profiles").select().eq("id", userId);
    return data[0];
  }

  return (
    <div>
      {" "}
      {activeTab === "posts" && (
        <div>
          {posts.length > 0 &&
            posts.map((post) => (
              <PostCard key={post.created_at} {...post} profiles={profile} />
            ))}
        </div>
      )}
      {activeTab === "about" && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">About me</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
              explicabo. Quaerat reprehenderit cum nemo accusamus soluta itaque
              iure nostrum amet ipsam, consectetur harum voluptates, mollitia
              praesentium enim doloremque dolor perferendis.
            </p>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quibusdam quae dicta aspernatur libero accusamus quisquam est
              laudantium earum, in suscipit voluptatibus voluptatum explicabo
              hic, nostrum perspiciatis! Debitis, reiciendis tempora!
            </p>
          </Card>
        </div>
      )}
      {activeTab === "friends" && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
            <div className="">
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
      {activeTab === "photos" && (
        <div>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1598395927056-8d895e701c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://plus.unsplash.com/premium_photo-1666621685703-d28e502abbd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1616864068729-d086f91fd566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618500031461-a5fc01e96763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

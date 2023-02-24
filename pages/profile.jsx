import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function ProfilePage() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
          </div>
          <div className="absolute top-24 left-4">
            <Avatar size={"lg"} />
          </div>
          <div className="p-4 pb-24">
            <div className="ml-40">
              <h1 className="text-3xl font-bold">Safwan</h1>
              <div className="text-gray-500 leading-4">Kerala, India</div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "../AuthOptions";
import ApiKeyForm from "./components/api-key-form";
import { getApiKeyForUser } from "./actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SignOutButton from "./components/sign-out-button";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if(!session?.user?.id) {
    redirect("/auth/login")
  }

  const { user } = session;

  const getApiKeyResult = await getApiKeyForUser();

  const apiKey = getApiKeyResult.success ? getApiKeyResult.apiKey : getApiKeyResult.message;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-3">
      <ApiKeyForm currentApiKey={apiKey} />

      <Card className="w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem]">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>View your profile information here.</CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Label className="text-md font-bold mb-1">Name</Label>
              <p className="text-lg text-gray-700">{user.name}</p>
            </div>
            <div className="flex flex-col">
              <Label className="text-md font-bold mb-1">Email</Label>
              <p className="text-lg text-gray-700">{user.email}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SignOutButton />
        </CardFooter>
      </Card>
    </div>
  )
}

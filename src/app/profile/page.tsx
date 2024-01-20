import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "../AuthOptions";
import ApiKeyForm from "./components/api-key-form";
import { getApiKeyForUser } from "./actions";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if(!session?.user?.id) {
    redirect("/auth/login")
  }

  const getApiKeyResult = await getApiKeyForUser();

  const apiKey = getApiKeyResult.success ? getApiKeyResult.apiKey : getApiKeyResult.message;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <ApiKeyForm currentApiKey={apiKey} />
    </div>
  )
}

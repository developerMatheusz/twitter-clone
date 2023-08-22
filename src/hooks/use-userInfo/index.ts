import chalk from "chalk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUserInfo() {
  const { data: session, status: sessionStatus } = useSession();
  const [userInfo, setUserInfo] = useState<
    | {
        _id: string | undefined | null;
        username?: string | undefined | null;
        email?: string | undefined | null;
        image?: string | undefined | null;
      }
    | null
    | undefined
  >(null);
  const [status, setStatus] = useState("loading");

  function getUserInfo() {
    if (sessionStatus === "loading") {
      return;
    }

    if (!session?.user.id) {
      setStatus("unauthenticated");
      return;
    }

    fetch(`/api/users?id=${session?.user.id}`)
      .then((response) =>
        response.json().then((json) => {
          setUserInfo(json.user);
          setStatus("authenticated");
        })
      )
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  useEffect(() => {
    getUserInfo();
  }, [sessionStatus]);

  return { userInfo, status, setUserInfo };
}

import useUserInfo from "../../hooks/use-userInfo";
import chalk from "chalk";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";

const UsernameForm = () => {
  const { userInfo, status } = useUserInfo();
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (username === "") {
      const defaultUsername = userInfo?.email?.split("@")[0];
      defaultUsername && setUsername(defaultUsername!.replace(/[^a-z]+/gi, ""));
    }
  }, [status]);

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    await fetch("/api/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username
      })
    }).catch((error) => {
      console.log(
        chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
      );
    });

    router.reload();
  }

  if (status === "loading") {
    return "";
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="text-center" onSubmit={handleFormSubmit}>
        <h1 className="text-xl text-white mb-2">Escolha um nome de usuário</h1>
        <div className="mb-2">
          <Input
            type="text"
            typeInput="input"
            value={username}
            placeholder="Nome de usuário"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <Button type="normal" typeButton="submit">
          Continuar
        </Button>
      </form>
    </div>
  );
};

export default UsernameForm;

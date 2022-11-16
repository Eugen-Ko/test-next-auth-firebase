import { useState, useEffect } from "react";

import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { v4 as uuid } from "uuid";
// import { ref, set } from "firebase/database";
import { app, db } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { Button, Stack, Input, Box } from "@chakra-ui/react";

export default function ButtonAuth() {
  const [temp, setTemp] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();
  const [currentSession, setCurrentSession] = useState(null);

  const handlerOnCLickGithub = async () => {
    signIn("github");
    console.log("onClickGitHub");
    // await getSession().then((session) => {
    if (session) setDoc(doc(db, "users", uuid()), session);
    // });
  };

  const handlerOnCLickGitlab = () => {
    signIn("gitlab");
    console.log("handlerOnCLickGitlab");
  };

  const writeFireBase = async (name, email) => {
    console.log("writefirebase");
    setDoc(doc(db, "users", currentUser), {
      name: name,
      email: email,
    });
    console.log(db.collection);
  };

  const sendTelegram = () => {
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify("Hello"),
    });
  };

  useEffect(() => {
    console.log("writeFireBase before");
    currentSession && setDoc(doc(db, "users", uuid()), currentSession);
    console.log("writeFireBase after");
  }, [currentSession]);

  useEffect(() => {
    console.log("setCurrentSession before");
    session ? setCurrentSession(session) : setCurrentSession(null);
    console.log("setCurrentSession after");
  }, [session]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Stack
        w="100%"
        h="50vh"
        display="flex"
        spacing="15px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button onClick={() => handlerOnCLickGithub()}>Connect Github</Button>
        <Button onClick={() => handlerOnCLickGitlab()}>Connect Gitlab</Button>
        <Button onClick={() => writeFireBase("jeff", "qqq@qqq.qqq")}>
          Write Firebase
        </Button>
        <Button onClick={() => sendTelegram("jeff", "qqq@qqq.qqq")}>
          Send Telegram
        </Button>
        {session && (
          <>
            Signed in as {JSON.stringify(session)} <br />
            <Button onClick={() => signOut()}>Sign out</Button>
          </>
        )}
      </Stack>
      <Box
        w="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Input
          onChange={(e) => {
            setTemp(e.target.value);
          }}
        ></Input>
        <Button onClick={() => setCurrentUser(temp)}>SignIn</Button>
      </Box>
    </Box>
  );
}
